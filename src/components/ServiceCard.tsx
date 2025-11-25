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
    <Card className="group hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fade-in">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button
          onClick={() => navigate("/booking")}
          className="w-full transition-all duration-300"
        >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
