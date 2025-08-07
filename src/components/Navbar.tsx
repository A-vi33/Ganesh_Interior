import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, Briefcase, Camera, MessageCircle, Phone, ChevronDown, Landmark } from 'lucide-react';
import { logo } from '../config/images';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      name: "Bedroom Design",
      path: "/bedroom-design",
      description: "Luxurious bedroom spaces"
    },
    {
      name: "Kitchen Design",
      path: "/kitchen-design",
      description: "Functional kitchen solutions"
    },
    {
      name: "TV Units",
      path: "/tv-units",
      description: "Entertainment centers"
    },
    {
      name: "Pooja Rooms",
      path: "/pooja-rooms",
      description: "Sacred space designs"
    },
    {
      name: "Living Arch",
      path: "/living-arch",
      description: "Architectural beauty"
    }
  ];

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/portfolio', label: 'Portfolio', icon: Camera },
    { path: '/contact', label: 'Contact', icon: Phone },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt="SMK Interiors Logo" 
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className="text-xl font-semibold text-neutral-800">SMK Interiors</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Home */}
            <Link
              to="/"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                location.pathname === '/'
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              <Home size={16} />
              <span>Home</span>
            </Link>

            {/* About */}
            <Link
              to="/about"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                location.pathname === '/about'
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              <User size={16} />
              <span>About</span>
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location.pathname.includes('-design') || location.pathname.includes('-units') || location.pathname.includes('-rooms') || location.pathname.includes('-arch')
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Briefcase size={16} />
                <span>Services</span>
                <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-xl border border-neutral-200 transition-all duration-300 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="p-4">
                  <div className="grid grid-cols-1 gap-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="flex items-center p-3 rounded-lg hover:bg-primary-50 transition-colors duration-200 group"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-primary-200 transition-colors duration-200">
                          {service.name === "Bedroom Design" && <Home size={16} className="text-primary-600" />}
                          {service.name === "Kitchen Design" && <Briefcase size={16} className="text-primary-600" />}
                          {service.name === "TV Units" && <Camera size={16} className="text-primary-600" />}
                          {service.name === "Pooja Rooms" && <User size={16} className="text-primary-600" />}
                          {service.name === "Living Arch" && <Landmark size={16} className="text-primary-600" />}
                        </div>
                        <div>
                          <div className="font-medium text-neutral-800 group-hover:text-primary-600 transition-colors duration-200">
                            {service.name}
                          </div>
                          <div className="text-sm text-neutral-500">
                            {service.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio */}
            <Link
              to="/portfolio"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                location.pathname === '/portfolio'
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              <Camera size={16} />
              <span>Portfolio</span>
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                location.pathname === '/contact'
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              <Phone size={16} />
              <span>Contact</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-600 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-neutral-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Home */}
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  location.pathname === '/'
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                <Home size={20} />
                <span>Home</span>
              </Link>

              {/* About */}
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  location.pathname === '/about'
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                <User size={20} />
                <span>About</span>
              </Link>
              
              {/* Mobile Services Section */}
              <div className="border-t border-neutral-200 pt-2 mt-2">
                <div className="px-3 py-2 text-sm font-medium text-neutral-500">Services</div>
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-2 px-6 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      location.pathname === service.path
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                  >
                    <div className="w-6 h-6 bg-primary-100 rounded flex items-center justify-center">
                      {service.name === "Bedroom Design" && <Home size={14} className="text-primary-600" />}
                      {service.name === "Kitchen Design" && <Briefcase size={14} className="text-primary-600" />}
                      {service.name === "TV Units" && <Camera size={14} className="text-primary-600" />}
                      {service.name === "Pooja Rooms" && <User size={14} className="text-primary-600" />}
                      {service.name === "Living Arch" && <Landmark size={14} className="text-primary-600" />}
                    </div>
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>

              {/* Portfolio */}
              <Link
                to="/portfolio"
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  location.pathname === '/portfolio'
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                <Camera size={20} />
                <span>Portfolio</span>
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  location.pathname === '/contact'
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                <Phone size={20} />
                <span>Contact</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;