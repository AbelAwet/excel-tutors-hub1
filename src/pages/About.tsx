import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Users, Target, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Award className="h-12 w-12 text-secondary" />,
      title: "Excellence",
      description: "We strive for the highest standards in education and student support.",
    },
    {
      icon: <Users className="h-12 w-12 text-secondary" />,
      title: "Community",
      description: "Building a supportive learning community for all students.",
    },
    {
      icon: <Target className="h-12 w-12 text-secondary" />,
      title: "Results",
      description: "Focused on measurable academic improvement and success.",
    },
    {
      icon: <Heart className="h-12 w-12 text-secondary" />,
      title: "Passion",
      description: "Dedicated tutors who are passionate about teaching.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">About EXCEL Tutoring Service</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering students to reach their full academic potential through personalized,
            expert tutoring since 2010.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-20 animate-slide-up">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                EXCEL Tutoring Service was founded with a simple mission: to make quality
                education accessible to every student. What started as a small tutoring center
                has grown into a comprehensive learning platform serving thousands of students
                worldwide.
              </p>
              <p className="text-muted-foreground mb-4">
                Our team of over 500 expert tutors brings together decades of teaching
                experience, innovative methods, and genuine care for student success. We believe
                that every student has the potential to excel, and we're here to unlock it.
              </p>
              <p className="text-muted-foreground">
                Today, we offer both in-person and online tutoring across 50+ subjects, helping
                students from elementary school through college achieve their academic goals.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                  <div className="text-muted-foreground">Students Mentored</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                  <div className="text-muted-foreground">Expert Tutors</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">14 Years</div>
                  <div className="text-muted-foreground">Of Excellence</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-muted-foreground">Student Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            To provide exceptional, personalized tutoring that empowers students to achieve
            academic excellence, build confidence, and develop a lifelong love for learning.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
