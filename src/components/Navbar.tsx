import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/menu', label: 'Our Menu' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/testimonials', label: 'Reviews' },
    { to: '/contact', label: 'Order Now' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-warm rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
              K
            </div>
            <span className="text-2xl font-bold text-primary">Foods and Bakery</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary relative ${
                  isActive(link.to) ? 'text-primary' : 'text-foreground'
                }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
            <Button className="bg-gradient-warm hover:opacity-90 text-white">
              <Phone className="w-4 h-4 mr-2" />
              Call Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-soft">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.to) ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="bg-gradient-warm hover:opacity-90 text-white w-full">
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;