import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Clock } from 'lucide-react';
import { featuredImages } from '../config/images';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-neutral-900">
        <div className="absolute inset-0">
          <img
            src={featuredImages.hero}
            alt="Elegant Interior Design"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transforming Spaces,
            <span className="block text-primary-300">Elevating Lifestyles</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-neutral-200 max-w-2xl mx-auto leading-relaxed">
            Creating beautiful, functional interiors that reflect your unique style and enhance your daily living experience.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary-500 text-white rounded-lg text-lg font-semibold hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Book a Free Consultation
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                Creating Spaces That Inspire
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                At SMK Interiors, we believe that great design goes beyond aesthetics. We create spaces that tell your story, reflect your personality, and enhance your lifestyle. Our team of experienced designers combines creativity with functionality to deliver exceptional results.
              </p>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                From contemporary minimalism to classic elegance, we work closely with our clients to understand their vision and bring it to life. Every project is a collaboration, ensuring that the final result is uniquely yours.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
              >
                Learn More About Us
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
            <div className="relative">
              <img
                src={featuredImages.about}
                alt="Interior Design Process"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-600 rounded-lg opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-300 rounded-lg opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">Our Services</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive interior design solutions tailored to your needs and lifestyle
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredImages.services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={service.src}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">{service.title}</h3>
                <p className="text-neutral-600">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
            >
              View All Services
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
            Let's discuss your vision and create something extraordinary together. 
            Our team is ready to bring your dream space to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
            >
              Get Free Consultation
              <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-neutral-800 transition-colors duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;