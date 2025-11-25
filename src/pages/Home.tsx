import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { BookOpen, Users, Award, Clock, TrendingUp, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import heroBackground from "@/assets/hero-background.png";
import oneToOne from "@/assets/one-to-one.png";
import onlineTutoring from "@/assets/online-tutoring.png";
import groupSessions from "@/assets/group-sessions.png";
import homeworkHelp from "@/assets/homework-help.png";
import examPrep from "@/assets/exam-prep.png";
import codingSkills from "@/assets/coding-skills.png";

const Home = () => {
  const navigate = useNavigate();

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
      icon: <Users className="h-8 w-8 text-secondary" />,
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
      icon: <BookOpen className="h-8 w-8 text-secondary" />,
      title: "All Subjects",
      description: "Comprehensive coverage of Math, Science, Languages, and more",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section
        className="relative h-[600px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 95, 0.8), rgba(30, 58, 95, 0.8)), url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            EXCEL Tutoring Service
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Unlock your full potential with expert tutoring tailored to your learning style
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate("/signup")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/booking")}
              className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20 text-lg px-8 py-6"
            >
              Book a Session
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tutoring solutions designed to help you succeed
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose EXCEL?</h2>
            <p className="text-xl text-muted-foreground">
              We're committed to your academic success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-muted/50 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10,000+", label: "Students Taught" },
              { number: "500+", label: "Expert Tutors" },
              { number: "50+", label: "Subjects Covered" },
              { number: "98%", label: "Success Rate" },
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Excel in Your Studies?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their academic journey with EXCEL Tutoring
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate("/signup")} className="text-lg px-8 py-6">
              Sign Up Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/contact")}
              className="text-lg px-8 py-6"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
