import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { BookOpen, Users, Award, Clock, Sparkles, Zap, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { ServiceCardSkeleton } from "@/components/LoadingSkeleton";
import { useState, useEffect } from "react";
import heroBackground from "@/assets/hero-background.png";
import oneToOne from "@/assets/one-to-one.png";
import onlineTutoring from "@/assets/online-tutoring.png";
import groupSessions from "@/assets/group-sessions.png";
import homeworkHelp from "@/assets/homework-help.png";
import examPrep from "@/assets/exam-prep.png";
import codingSkills from "@/assets/coding-skills.png";

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const services = [
    {
      image: oneToOne,
      title: "One-to-One Tutoring",
      description: "Personalized learning experience tailored to your unique needs and pace.",
    },
    {
      image: onlineTutoring,
      title: "Online/Virtual Tutoring",
      description: "Learn from anywhere with our interactive online tutoring sessions.",
    },
    {
      image: groupSessions,
      title: "Group Classes",
      description: "Collaborative learning environment with peers at your level.",
    },
    {
      image: homeworkHelp,
      title: "Homework Help",
      description: "Get expert assistance with your homework and assignments.",
    },
    {
      image: examPrep,
      title: "Test Preparation",
      description: "Comprehensive preparation for all major exams and assessments.",
    },
    {
      image: codingSkills,
      title: "Skill Development Classes",
      description: "Master new skills including coding, languages, and more.",
    },
  ];

  const features = [
    {
      icon: <Sparkles className="h-8 w-8 text-secondary" />,
      title: "Expert Tutors",
      description: "Learn from qualified professionals with years of teaching experience",
    },
    {
      icon: <Clock className="h-8 w-8 text-secondary" />,
      title: "Flexible Schedule",
      description: "Book sessions that fit your busy lifestyle and timezone",
    },
    {
      icon: <Award className="h-8 w-8 text-secondary" />,
      title: "Proven Results",
      description: "95% of our students improve their grades within 3 months",
    },
    {
      icon: <Zap className="h-8 w-8 text-secondary" />,
      title: "All Subjects",
      description: "Comprehensive coverage of Math, Science, Languages, and more",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Parallax */}
      <section
        className="relative h-[700px] flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 95, 0.85), rgba(30, 58, 95, 0.9)), url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '0s' }} />
          <div className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="container mx-auto px-4 animate-fade-in relative z-10">
          <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
            <span className="text-white/90 text-sm font-medium flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent animate-pulse" />
              AI-Powered Learning Platform
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
            EXCEL Tutoring Service
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Transform your learning journey with personalized expert tutoring
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button
              size="lg"
              onClick={() => navigate("/signup")}
              className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground text-lg px-10 py-7 shadow-glow hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Get Started Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/booking")}
              className="glass-card text-white hover:bg-white/20 text-lg px-10 py-7 hover:scale-105 transition-all duration-300"
            >
              <Zap className="mr-2 h-5 w-5" />
              Explore Tutors
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 rounded-full">
              <span className="text-secondary text-sm font-semibold">Premium Services</span>
            </div>
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tutoring solutions designed to help you succeed
            </p>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <ServiceCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} style={{ animationDelay: `${index * 100}ms` }}>
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Why Choose EXCEL?</h2>
            <p className="text-xl text-muted-foreground">
              We're committed to your academic success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl glass-card hover:shadow-glow transition-all duration-500 animate-scale-in transform hover:-translate-y-2 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 group-hover:from-secondary/30 group-hover:to-accent/30">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-secondary transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-secondary to-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10,000+", label: "Students Taught", icon: <Users className="h-8 w-8 mx-auto mb-2" /> },
              { number: "500+", label: "Expert Tutors", icon: <Award className="h-8 w-8 mx-auto mb-2" /> },
              { number: "50+", label: "Subjects Covered", icon: <BookOpen className="h-8 w-8 mx-auto mb-2" /> },
              { number: "98%", label: "Success Rate", icon: <TrendingUp className="h-8 w-8 mx-auto mb-2" /> },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="animate-fade-in group transform hover:scale-110 transition-all duration-300" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="glass-card p-6 rounded-2xl border-2 border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">{stat.icon}</div>
                  <div className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                  <div className="text-primary-foreground/90 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto glass-card p-12 rounded-3xl border-2 border-primary/20 shadow-glow animate-scale-in">
            <Sparkles className="h-16 w-16 text-secondary mx-auto mb-6 animate-float" />
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Ready to Excel in Your Studies?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join thousands of students who have transformed their academic journey with EXCEL Tutoring
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate("/signup")} 
                className="text-lg px-12 py-7 bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 shadow-glow hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Start Your Journey
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/contact")}
                className="text-lg px-12 py-7 glass-card hover:bg-primary/10 transform hover:scale-105 transition-all duration-300"
              >
                <Zap className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
