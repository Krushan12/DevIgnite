import { Link, useLocation } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { Flame, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'DSA', href: '/dsa', current: location.pathname === '/dsa' },
    { name: 'Web Dev', href: '/webdev', current: location.pathname === '/webdev' },
  ];

  return (
    <nav className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-xl shadow-lg">
                <Flame className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                DevIgniter
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'px-4 py-3 rounded-xl text-base font-medium transition-all duration-200',
                  item.current
                    ? 'text-purple-600 bg-purple-50 shadow-sm'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/50'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <SignedOut>
              <Link to="/login">
                <Button 
                  variant="ghost" 
                  size="lg"
                  className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-6 py-3 text-base font-medium rounded-xl transition-all duration-200"
                >
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                >
                  Sign Up Free
                </Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <Link to="/dashboard">
                <Button 
                  variant="ghost" 
                  size="lg"
                  className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-6 py-3 text-base font-medium rounded-xl transition-all duration-200"
                >
                  Dashboard
                </Button>
              </Link>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10 shadow-lg"
                  }
                }}
              />
            </SignedIn>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <SignedIn>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "w-9 h-9 shadow-lg"
                  }
                }}
              />
            </SignedIn>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-6 pt-4 pb-6 space-y-2 bg-white">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'block px-4 py-3 rounded-xl text-base font-medium transition-colors duration-200',
                  item.current
                    ? 'text-purple-600 bg-purple-50'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <SignedOut>
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 text-base font-medium rounded-xl"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setIsOpen(false)}>
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 text-base font-semibold rounded-xl shadow-lg"
                  >
                    Sign Up Free
                  </Button>
                </Link>
              </div>
            </SignedOut>
            <SignedIn>
              <div className="pt-4 border-t border-gray-200">
                <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 text-base font-medium rounded-xl"
                  >
                    Dashboard
                  </Button>
                </Link>
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
}