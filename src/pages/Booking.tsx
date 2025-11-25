import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Star, Clock, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Booking = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");

  const tutors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      subject: "Mathematics",
      specialty: "Calculus & Algebra",
      rating: 4.9,
      hourlyRate: 60,
      experience: "10 years",
      students: 250,
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      subject: "Science",
      specialty: "Physics & Chemistry",
      rating: 4.8,
      hourlyRate: 55,
      experience: "8 years",
      students: 180,
    },
    {
      id: 3,
      name: "Emma Williams",
      subject: "Languages",
      specialty: "English & Spanish",
      rating: 5.0,
      hourlyRate: 50,
      experience: "12 years",
      students: 300,
    },
    {
      id: 4,
      name: "David Martinez",
      subject: "Programming",
      specialty: "Python & JavaScript",
      rating: 4.9,
      hourlyRate: 70,
      experience: "7 years",
      students: 150,
    },
    {
      id: 5,
      name: "Dr. Lisa Anderson",
      subject: "Biology",
      specialty: "Molecular & Cellular",
      rating: 4.7,
      hourlyRate: 58,
      experience: "15 years",
      students: 220,
    },
    {
      id: 6,
      name: "James Taylor",
      subject: "Test Prep",
      specialty: "SAT & ACT",
      rating: 4.9,
      hourlyRate: 65,
      experience: "9 years",
      students: 280,
    },
  ];

  const subjects = ["all", "Mathematics", "Science", "Languages", "Programming", "Biology", "Test Prep"];

  const filteredTutors = tutors.filter((tutor) => {
    const matchesSearch =
      tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === "all" || tutor.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  const handleBooking = (tutorName: string) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      toast.error("Please login to book a session");
      navigate("/login");
    } else {
      toast.success(`Booking request sent to ${tutorName}!`);
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">Find Your Perfect Tutor</h1>
          <p className="text-xl text-muted-foreground">
            Browse our expert tutors and book a session that fits your schedule
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 animate-slide-up">
          <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search tutors by name or specialty..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Select subject" />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((subject) => (
                  <SelectItem key={subject} value={subject}>
                    {subject === "all" ? "All Subjects" : subject}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Tutors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTutors.map((tutor, index) => (
            <Card
              key={tutor.id}
              className="hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{tutor.name}</CardTitle>
                    <CardDescription>{tutor.specialty}</CardDescription>
                  </div>
                  <div className="flex items-center gap-1 bg-accent/10 px-2 py-1 rounded">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-semibold">{tutor.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{tutor.experience} experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    <span>${tutor.hourlyRate}/hour</span>
                  </div>
                  <div>
                    <span className="font-semibold">{tutor.students}+</span> students taught
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={() => handleBooking(tutor.name)}
                >
                  Book Session
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredTutors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No tutors found. Try adjusting your search filters.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Booking;
