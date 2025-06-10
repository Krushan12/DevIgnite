import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Code, Brain, Zap, Users, Trophy, Star } from 'lucide-react';

export function HomePage() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Learning',
      description: 'Get personalized assistance and explanations for complex problems'
    },
    {
      icon: Code,
      title: 'Hands-on Practice',
      description: 'Build real projects and solve challenging algorithmic problems'
    },
    {
      icon: Zap,
      title: 'Interactive Experience',
      description: 'Visual learning with step-by-step breakdowns and explanations'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Learn alongside thousands of developers improving their skills'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Problems Solved' },
    { number: '5,000+', label: 'Active Learners' },
    { number: '98%', label: 'Success Rate' },
    { number: '24/7', label: 'AI Support' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] bg-no-repeat"></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-20">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200/50">
                <Star className="h-5 w-5 text-purple-600 mr-3" />
                <span className="text-base font-medium text-purple-700">Trusted by 5,000+ developers</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="block">Ignite Your</span>
              <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Dev Journey
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-16 max-w-5xl mx-auto leading-relaxed">
              Learn DSA & Web Development visually with AI assistance. Master algorithms, build projects, and accelerate your programming career with interactive learning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
              <Link to="/dsa" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-8 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-0"
                >
                  Get Started Free
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/dsa" className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto border-3 border-purple-300 hover:border-purple-500 bg-white/80 backdrop-blur-sm hover:bg-purple-50 text-purple-700 hover:text-purple-800 px-12 py-8 text-xl font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Browse Problems
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Why Choose DevIgniter?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Experience a new way of learning that combines visual education, AI assistance, and hands-on practice.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl mb-6">
                    <feature.icon className="h-10 w-10 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-5xl mx-auto text-center px-6 sm:px-8 lg:px-12">
          <Trophy className="h-20 w-20 text-white mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            Ready to Level Up Your Skills?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join thousands of developers who have accelerated their careers with DevIgniter. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
            <Link to="/signup" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="secondary"
                className="w-full sm:w-auto bg-white text-purple-600 hover:bg-gray-100 px-12 py-8 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                Start Learning Free
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            <Link to="/dsa" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto border-3 border-white text-white hover:bg-white hover:text-purple-600 px-12 py-8 text-xl font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                Browse Problems
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}