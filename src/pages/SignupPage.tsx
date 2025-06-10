import { SignUp } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-lg w-full">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Join DevIgniter</h2>
            <p className="text-xl text-gray-600">Start your coding journey with unlimited access</p>
          </div>
        </div>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-gray-200/50">
          <SignUp 
            appearance={{
              elements: {
                formButtonPrimary: 
                  "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105",
                card: "shadow-none bg-transparent",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton: "border-2 border-gray-200 hover:border-purple-300 rounded-xl py-3 px-4 transition-all duration-200",
                formFieldInput: "border-2 border-gray-200 focus:border-purple-400 rounded-xl py-3 px-4 text-base",
                footerActionLink: "text-purple-600 hover:text-purple-700 font-medium"
              }
            }}
            redirectUrl="/dashboard"
          />
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-purple-600 hover:text-purple-700 font-semibold">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}