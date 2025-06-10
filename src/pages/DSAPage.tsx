import { useState, useEffect } from 'react';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Brain, Clock, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const problems = [
  {
    id: 1,
    title: 'Two Sum',
    description: 'Find two numbers in an array that add up to a target sum. Perfect for learning hash maps and array manipulation.',
    difficulty: 'Easy',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    topics: ['Array', 'Hash Map'],
    color: 'green'
  },
  {
    id: 2,
    title: 'Binary Tree Traversal',
    description: 'Implement in-order, pre-order, and post-order traversal of binary trees. Master recursive tree algorithms.',
    difficulty: 'Medium',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(h)',
    topics: ['Binary Tree', 'Recursion'],
    color: 'yellow'
  },
  {
    id: 3,
    title: 'Longest Palindromic Substring',
    description: 'Find the longest palindromic substring in a given string using dynamic programming techniques.',
    difficulty: 'Hard',
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    topics: ['Dynamic Programming', 'String'],
    color: 'red'
  }
];

export function DSAPage() {
  const [attemptCount, setAttemptCount] = useState(0);
  const [showLimitDialog, setShowLimitDialog] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem('dsa-attempts');
    if (saved) {
      setAttemptCount(parseInt(saved, 10));
    }
  }, []);

  const handleTryWithAI = (problemId: number) => {
    if (problemId === 1) {
      // First problem is always free
      toast({
        title: "AI Assistant Activated!",
        description: "Opening interactive problem solver with AI guidance...",
      });
      return;
    }

    if (attemptCount >= 1) {
      setShowLimitDialog(true);
      return;
    }

    const newCount = attemptCount + 1;
    setAttemptCount(newCount);
    localStorage.setItem('dsa-attempts', newCount.toString());
    
    toast({
      title: "AI Assistant Activated!",
      description: "Opening interactive problem solver with AI guidance...",
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
      case 'Hard': return 'bg-red-100 text-red-800 hover:bg-red-200';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200/50 mb-6">
            <Brain className="h-4 w-4 text-purple-600 mr-2" />
            <span className="text-sm font-medium text-purple-700">Data Structures & Algorithms</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Master DSA with{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              AI Guidance
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solve algorithmic problems with step-by-step AI assistance. Understand the logic, optimize your solutions, and build strong fundamentals.
          </p>
        </div>

        {/* Usage Info for Non-Signed Users */}
        <SignedOut>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Free Trial Available</h3>
                <p className="text-gray-600">
                  Try one problem with AI assistance. <Link to="/signup" className="text-purple-600 hover:text-purple-700 font-medium">Sign up</Link> for unlimited access.
                </p>
              </div>
              <Zap className="h-8 w-8 text-purple-600" />
            </div>
          </div>
        </SignedOut>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem) => (
            <Card key={problem.id} className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className={getDifficultyColor(problem.difficulty)}>
                    {problem.difficulty}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {problem.timeComplexity}
                  </div>
                </div>
                
                <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                  {problem.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {problem.topics.map((topic, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center text-sm text-gray-500">
                    <Target className="h-4 w-4 mr-1" />
                    Space: {problem.spaceComplexity}
                  </div>
                  
                  <SignedIn>
                    <Button 
                      onClick={() => handleTryWithAI(problem.id)}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    >
                      Try with AI
                    </Button>
                  </SignedIn>
                  
                  <SignedOut>
                    <Button 
                      onClick={() => handleTryWithAI(problem.id)}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      disabled={problem.id !== 1 && attemptCount >= 1}
                    >
                      {problem.id === 1 ? 'Try Free' : 'Try with AI'}
                    </Button>
                  </SignedOut>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sign-up CTA for more problems */}
        <SignedOut>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Unlock Your Full Potential</h3>
              <p className="text-lg mb-6 text-blue-100">
                Get unlimited access to all problems, AI assistance, and detailed explanations
              </p>
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                  Sign Up for Free Access
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
                You've used your free trial. Sign up to continue solving problems with AI assistance and unlock unlimited access to all features.
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