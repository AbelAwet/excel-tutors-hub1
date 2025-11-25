import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { BookOpen, Clock, Users, TrendingUp, Calendar, MessageSquare, User } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    {
      icon: <BookOpen className="h-8 w-8 text-secondary" />,
      label: "Active Sessions",
      value: "8",
      change: "+2 this week",
    },
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      label: "Hours Learned",
      value: "47",
      change: "+12 this month",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      label: "Active Tutors",
      value: "3",
      change: "In 2 subjects",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-secondary" />,
      label: "Progress",
      value: "85%",
      change: "+5% improvement",
    },
  ];

  const upcomingSessions = [
    {
      id: 1,
      tutor: "Dr. Sarah Johnson",
      subject: "Mathematics",
      date: "Today",
      time: "2:00 PM",
      duration: "1 hour",
    },
    {
      id: 2,
      tutor: "Emma Williams",
      subject: "English",
      date: "Tomorrow",
      time: "4:30 PM",
      duration: "1.5 hours",
    },
    {
      id: 3,
      tutor: "Prof. Michael Chen",
      subject: "Physics",
      date: "Wed, Nov 27",
      time: "3:00 PM",
      duration: "1 hour",
    },
  ];

  const recentMessages = [
    {
      id: 1,
      from: "Dr. Sarah Johnson",
      message: "Great progress on your calculus homework!",
      time: "10 minutes ago",
    },
    {
      id: 2,
      from: "Emma Williams",
      message: "Don't forget to prepare the essay draft for tomorrow.",
      time: "2 hours ago",
    },
    {
      id: 3,
      from: "Support Team",
      message: "Your monthly report is now available.",
      time: "1 day ago",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2">Welcome Back!</h1>
          <p className="text-xl text-muted-foreground">Here's your learning dashboard</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="hover:shadow-card-hover transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  {stat.icon}
                  <span className="text-3xl font-bold">{stat.value}</span>
                </div>
                <h3 className="font-semibold mb-1">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upcoming Sessions */}
          <div className="lg:col-span-2">
            <Card className="animate-slide-up">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Upcoming Sessions
                    </CardTitle>
                    <CardDescription>Your scheduled tutoring sessions</CardDescription>
                  </div>
                  <Button onClick={() => navigate("/booking")}>Book New</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div
                      key={session.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div>
                        <h4 className="font-semibold">{session.subject}</h4>
                        <p className="text-sm text-muted-foreground">with {session.tutor}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {session.date} • {session.time} • {session.duration}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Join
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Progress Tracker */}
            <Card className="mt-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
              <CardHeader>
                <CardTitle>Learning Progress</CardTitle>
                <CardDescription>Track your improvement across subjects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { subject: "Mathematics", progress: 85, color: "bg-secondary" },
                    { subject: "English", progress: 92, color: "bg-accent" },
                    { subject: "Physics", progress: 78, color: "bg-primary" },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{item.subject}</span>
                        <span className="text-muted-foreground">{item.progress}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color} transition-all duration-500`}
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="animate-slide-up" style={{ animationDelay: "200ms" }}>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => navigate("/messages")}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Messages
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => navigate("/profile")}
                >
                  <User className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => navigate("/booking")}
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Book Session
                </Button>
              </CardContent>
            </Card>

            {/* Recent Messages */}
            <Card className="animate-slide-up" style={{ animationDelay: "300ms" }}>
              <CardHeader>
                <CardTitle>Recent Messages</CardTitle>
                <CardDescription>Latest updates from your tutors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentMessages.map((message) => (
                    <div
                      key={message.id}
                      className="p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                      onClick={() => navigate("/messages")}
                    >
                      <p className="font-medium text-sm mb-1">{message.from}</p>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {message.message}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">{message.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
