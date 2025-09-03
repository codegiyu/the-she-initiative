import { Heart, Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Heart className="w-8 h-8 text-primary stroke-2" />
                <div className="absolute -top-1 -right-1 w-4 h-6 border-r-2 border-t-2 border-primary transform rotate-45"></div>
              </div>
              <span className="font-montserrat font-bold text-2xl">The Initiative</span>
            </div>
            <p className="font-montserrat text-white/90 leading-relaxed mb-6 max-w-md">
              Empowering her today, transforming tomorrow. We provide holistic support, protection
              and opportunities for girls and young women.
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-primary p-2 rounded-full">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-montserrat font-semibold">Emergency Support</div>
                <div className="font-montserrat text-white/80">Available 24/7</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Our Services', 'Get Support', 'Volunteer', 'Donate'].map(link => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-montserrat text-white/80 hover:text-primary transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="font-montserrat text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="font-montserrat text-white/80">help@theinitiative.org</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span className="font-montserrat text-white/80">
                  123 Hope Street
                  <br />
                  Community Center
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-montserrat text-white/80 mb-4 md:mb-0">
              © {currentYear} The Initiative. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="font-montserrat text-white/80 hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-montserrat text-white/80 hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
