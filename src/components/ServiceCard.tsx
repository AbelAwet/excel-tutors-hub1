import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard = ({ image, title, description }: ServiceCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="group relative hover:shadow-glow transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 overflow-hidden animate-fade-in glass-card border-2">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <CardHeader className="relative z-10">
        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
        <CardDescription className="group-hover:text-foreground/80 transition-colors duration-300">{description}</CardDescription>
      </CardHeader>
      <CardFooter className="relative z-10">
        <Button
          onClick={() => navigate("/booking")}
          className="w-full transition-all duration-300 group-hover:shadow-lg relative overflow-hidden"
        >
          <span className="relative z-10">Start Learning</span>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
