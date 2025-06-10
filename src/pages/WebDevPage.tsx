import { useState, useEffect } from 'react';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Code, Globe, Palette, Database, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const projects = [
  {
    id: 1,
    title: 'Netflix Clone',
    description: 'Build a full-stack streaming platform with React, Node.js, and MongoDB. Includes user authentication, video streaming, and recommendation engine.',
    difficulty: 'Intermediate',
    duration: '2-3 weeks',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    features: ['User Authentication', 'Video Streaming', 'Search & Filter', 'Responsive Design'],
    image: 'https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg'
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    description: 'Create a beautiful weather application with real-time data, forecasts, and interactive maps. Perfect for learning API integration and data visualization.',
    difficulty: 'Beginner',
    duration: '1 week',
    technologies: ['React', 'Weather API', 'Charts.js', 'CSS3'],
    features: ['Real-time Weather', '7-day Forecast', 'Interactive Maps', 'Location Search'],
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg'
  }
];

export function WebDevPage() {
  const [attemptCount, setAttemptCount] = useState(0);
  const [showLimitDialog, setShowLimitDialog] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem('webdev-attempts');
    if (saved) {
      setAttemptCount(parseInt(saved, 10));
    }
  }, []);

  const handleStartProject = (projectId: number) => {
    if (projectId === 1) {
      // First project is always free
      toast({
        title: "Project Started!",
        description: "Opening project setup with step-by-step guidance...",
      });
      return;
    }

    if (attemptCount >= 1) {
      setShowLimitDialog(true);
      return;
    }

    const newCount = attemptCount + 1;
    setAttemptCount(newCount);
    localStorage.setItem('webdev-attempts', newCount.toString());
    
    toast({
      title: "Project Started!",
      description: "Opening project setup with step-by-step guidance...",
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 hover:bg-red-200';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200/50 mb-6">
            <Code className="h-4 w-4 text-purple-600 mr-2" />
            <span className="text-sm font-medium text-purple-700">Web Development Projects</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Build Real-World{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create impressive full-stack applications with guided tutorials, modern frameworks, and industry best practices.
          </p>
        </div>

        {/* Usage Info for Non-Signed Users */}
        <SignedOut>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Start Your First Project Free</h3>
                <p className="text-gray-600">
                  Try one complete project tutorial. <Link to="/signup" className="text-purple-600 hover:text-purple-700 font-medium">Sign up</Link> for access to all projects.
                </p>
              </div>
              <Globe className="h-8 w-8 text-purple-600" />
            </div>
          </div>
        </SignedOut>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getDifficultyColor(project.difficulty)}>
                    {project.difficulty}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                  <div className="flex items-center text-white text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {project.duration}
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl group-hover:text-purple-600 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Palette className="h-4 w-4 mr-2" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Database className="h-4 w-4 mr-2" />
                    Key Features
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t">
                  <SignedIn>
                    <Button 
                      onClick={() => handleStartProject(project.id)}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      size="lg"
                    >
                      Start Project
                    </Button>
                  </SignedIn>
                  
                  <SignedOut>
                    <Button 
                      onClick={() => handleStartProject(project.id)}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      size="lg"
                      disabled={project.id !== 1 && attemptCount >= 1}
                    >
                      {project.id === 1 ? 'Start Free Project' : 'Start Project'}
                    </Button>
                  </SignedOut>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">More Projects Coming Soon</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'E-commerce Store', tech: 'Next.js, Stripe, PostgreSQL' },
              { title: 'Social Media App', tech: 'React Native, Firebase' },
              { title: 'Task Management', tech: 'Vue.js, Express, MongoDB' }
            ].map((project, index) => (
              <Card key={index} className="bg-gray-50 border-2 border-dashed border-gray-300">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.tech}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sign-up CTA */}
        <SignedOut>
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Build Your Portfolio</h3>
              <p className="text-lg mb-6 text-blue-100">
                Access all projects, get personalized guidance, and showcase your work to potential employers
              </p>
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                  Start Building Today
                </Button>
              </Link>
            </div>
          </div>
        </SignedOut>

        {/* Limit Reached Dialog */}
        <AlertDialog open={showLimitDialog} onOpenChange={setShowLimitDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Free Trial Limit Reached</AlertDialogTitle>
              <AlertDialogDescription>
                You've completed your free project. Sign up to access all projects with step-by-step tutorials, code reviews, and deployment guides.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction asChild>
                <Link to="/signup">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Sign Up Now
                  </Button>
                </Link>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}