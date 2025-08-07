import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { logo } from '../config/images';

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={logo} 
                alt="SMK Interiors Logo" 
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="text-xl font-semibold">SMK Interiors</span>
            </div>
            <p className="text-neutral-300 mb-4 leading-relaxed">
              Creating beautiful, functional spaces that enhance your lifestyle and reflect your unique personality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-primary-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-primary-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-primary-400 transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-neutral-300 hover:text-primary-400 transition-colors duration-200">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-primary-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/bedroom-design" className="text-neutral-300 hover:text-primary-400 transition-colors duration-200">
                  Bedroom Design
                </Link>
              </li>
              <li>
                <Link to="/kitchen-design" className="text-neutral-300 hover:text-primary-400 transition-colors duration-200">
                  Kitchen Design
                </Link>
              </li>
              <li>
                <Link to="/tv-units" className="text-neutral-300 hover:text-primary-400 transition-colors duration-200">
                  TV Units
                </Link>
              </li>
              <li>
                <Link to="/pooja-rooms" className="text-neutral-300 hover:text-primary-400 transition-colors duration-200">
                  Pooja Rooms
                </Link>
              </li>
              <li>
                <Link to="/living-arch" className="text-neutral-300 hover:text-primary-400 transition-colors duration-200">
                  Living Arch
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-primary-400 mt-1 flex-shrink-0" size={16} />
                <div className="text-neutral-300 text-sm">
                SMK Interiors<br />
                Suraram X Road Hunaman Nagar,<br />
                Hyderabad, Telangana - 500055,<br />
                India
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-primary-400 flex-shrink-0" size={16} />
                <span className="text-neutral-300 text-sm">+91 9160614609<br />+91 9346899020</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-primary-400 flex-shrink-0" size={16} />
                <span className="text-neutral-300 text-sm">smkinteriors16@gmail.com<br /></span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              © 2024 SMK Interiors. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-neutral-400 hover:text-primary-400 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;