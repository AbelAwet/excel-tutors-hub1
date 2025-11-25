import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, Clock, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const courses = [
    {
      id: 1,
      title: "Advanced Calculus",
      category: "Mathematics",
      description: "Master calculus concepts from limits to integration",
      students: 245,
      duration: "12 weeks",
      level: "Advanced",
      price: "$299",
    },
    {
      id: 2,
      title: "English Literature",
      category: "Languages",
      description: "Explore classic and modern literature",
      students: 189,
      duration: "10 weeks",
      level: "Intermediate",
      price: "$249",
    },
    {
      id: 3,
      title: "Physics: Mechanics",
      category: "Science",
      description: "Understanding motion, forces, and energy",
      students: 156,
      duration: "14 weeks",
      level: "Intermediate",
      price: "$329",
    },
    {
      id: 4,
      title: "Python Programming",
      category: "Programming",
      description: "Learn Python from basics to advanced topics",
      students: 312,
      duration: "16 weeks",
      level: "Beginner",
      price: "$399",
    },
    {
      id: 5,
      title: "SAT Preparation",
      category: "Test Prep",
      description: "Complete SAT prep with practice tests",
      students: 428,
      duration: "8 weeks",
      level: "All Levels",
      price: "$349",
    },
    {
      id: 6,
      title: "Organic Chemistry",
      category: "Science",
      description: "Comprehensive organic chemistry course",
      students: 134,
      duration: "12 weeks",
      level: "Advanced",
      price: "$359",
    },
  ];

  const categories = ["all", "Mathematics", "Science", "Languages", "Programming", "Test Prep"];

  const filteredCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">Explore Our Courses</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive courses designed to help you master any subject
          </p>
        </div>

        {/* Filter */}
        <div className="flex justify-center mb-12 animate-slide-up">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[250px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <Card
              key={course.id}
              className="hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm font-medium text-secondary">{course.category}</span>
                  <span className="text-sm bg-accent/10 text-accent-foreground px-2 py-1 rounded">
                    {course.level}
                  </span>
                </div>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{course.students} students enrolled</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>Full course materials included</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <span className="text-2xl font-bold">{course.price}</span>
                  <span className="text-muted-foreground"> / course</span>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button className="flex-1" onClick={() => navigate("/booking")}>
                  Enroll Now
                </Button>
                <Button variant="outline" className="flex-1">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No courses found in this category.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
