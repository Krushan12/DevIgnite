import { useUser } from '@clerk/clerk-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Code, Trophy, Target, Calendar, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DashboardPage() {
  const { user } = useUser();

  const stats = [
    { label: 'Problems Solved', value: '12', icon: Target, color: 'text-green-600' },
    { label: 'Projects Built', value: '3', icon: Code, color: 'text-blue-600' },
    { label: 'Study Streak', value: '7 days', icon: Calendar, color: 'text-purple-600' },
    { label: 'Skill Level', value: 'Intermediate', icon: TrendingUp, color: 'text-orange-600' }
  ];

  const recentActivity = [
    { type: 'Problem', title: 'Two Sum', completed: true, date: '2 hours ago' },
    { type: 'Project', title: 'Weather Dashboard', completed: false, date: '1 day ago' },
    { type: 'Problem', title: 'Binary Tree Traversal', completed: true, date: '2 days ago' }
  ];

  const skillProgress = [
    { skill: 'Arrays & Strings', progress: 85, color: 'bg-green-500' },
    { skill: 'Trees & Graphs', progress: 60, color: 'bg-blue-500' },
    { skill: 'Dynamic Programming', progress: 40, color: 'bg-purple-500' },
    { skill: 'System Design', progress: 25, color: 'bg-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.firstName || 'Developer'}! 👋
          </h1>
          <p className="text-gray-600">Track your progress and continue your learning journey</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${activity.completed ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                      <div>
                        <p className="font-medium text-gray-900">{activity.title}</p>
                        <p className="text-sm text-gray-600">{activity.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={activity.completed ? 'default' : 'secondary'}>
                        {activity.completed ? 'Completed' : 'In Progress'}
                      </Badge>
                      <p className="text-xs text-gray-500 mt-1">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Skill Progress */}
          <div>
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2" />
                  Skill Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skillProgress.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">{skill.skill}</span>
                      <span className="text-sm text-gray-600">{skill.progress}%</span>
                    </div>
                    <Progress value={skill.progress} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2">Ready to Continue Learning?</h3>
                  <p className="text-purple-100">Pick up where you left off or start something new</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/dsa">
                    <Button variant="secondary" size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                      Solve Problems
                    </Button>
                  </Link>
                  <Link to="/webdev">
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600">
                      Build Projects
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}