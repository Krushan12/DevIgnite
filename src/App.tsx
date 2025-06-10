import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react';
import { Navbar } from '@/components/layout/Navbar';
import { HomePage } from '@/pages/HomePage';
import { DSAPage } from '@/pages/DSAPage';
import { WebDevPage } from '@/pages/WebDevPage';
import { LoginPage } from '@/pages/LoginPage';
import { SignupPage } from '@/pages/SignupPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { Toaster } from '@/components/ui/toaster';

const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  // Show error message if Clerk key is not configured
  if (!CLERK_PUBLISHABLE_KEY || CLERK_PUBLISHABLE_KEY === 'pk_test_your-actual-clerk-key-here') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-xl font-bold text-red-600 mb-4">Configuration Required</h1>
          <p className="text-gray-700 mb-4">
            Please configure your Clerk publishable key to continue.
          </p>
          <ol className="list-decimal list-inside text-sm text-gray-600 space-y-2">
            <li>Get your publishable key from <a href="https://dashboard.clerk.com/last-active?path=api-keys" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Clerk Dashboard</a></li>
            <li>Update the <code className="bg-gray-100 px-1 rounded">.env</code> file with your actual key</li>
            <li>Restart the development server</li>
          </ol>
        </div>
      </div>
    );
  }

  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 w-full">
          <Navbar />
          <main className="w-full">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dsa" element={<DSAPage />} />
              <Route path="/webdev" element={<WebDevPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route 
                path="/dashboard" 
                element={
                  <>
                    <SignedIn>
                      <DashboardPage />
                    </SignedIn>
                    <SignedOut>
                      <Navigate to="/login" replace />
                    </SignedOut>
                  </>
                } 
              />
            </Routes>
          </main>
          <Toaster />
        </div>
      </Router>
    </ClerkProvider>
  );
}

export default App;