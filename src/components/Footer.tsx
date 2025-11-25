import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">EXCEL Tutoring Service</h3>
            <p className="text-primary-foreground/80">
              Empowering students to achieve their academic goals through personalized tutoring.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About Us
              </Link>
              <Link to="/booking" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Book a Tutor
              </Link>
              <Link to="/courses" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Courses
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="flex flex-col space-y-2 text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@exceltutoring.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>123 Education St, Learning City</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2024 EXCEL Tutoring Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
