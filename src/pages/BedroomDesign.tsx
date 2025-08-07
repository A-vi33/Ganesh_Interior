import React from 'react';
import { ArrowRight, Check, Star } from 'lucide-react';
import { bedroomImages } from '../config/images';

const BedroomDesign = () => {
  const features = [
    "Custom bedroom layouts and space planning",
    "Wardrobe and storage solutions",
    "Lighting and ambiance design",
    "Color and texture coordination",
    "Furniture selection and placement",
    "Accessories and finishing touches",
    "Custom headboards and bed frames",
    "Window treatments and curtains",
    "Flooring and carpet selection",
    "Wall treatments and paint colors"
  ];

  const process = [
    {
      step: "1",
      title: "Consultation",
      description: "Initial meeting to understand your style preferences, budget, and requirements."
    },
    {
      step: "2",
      title: "Design Concept",
      description: "Create detailed design concepts with mood boards and 3D visualizations."
    },
    {
      step: "3",
      title: "Material Selection",
      description: "Choose furniture, fabrics, colors, and materials that match your vision."
    },
    {
      step: "4",
      title: "Installation",
      description: "Professional installation and final styling to complete your dream bedroom."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-neutral-800 mb-6">Bedroom Design</h1>
              <p className="text-xl text-neutral-600 mb-6 leading-relaxed">
                Transform your bedroom into a luxurious sanctuary that reflects your personal style and provides the perfect environment for rest and relaxation.
              </p>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Our bedroom design services combine functionality with aesthetics to create spaces that not only look beautiful but also enhance your daily living experience.
              </p>
              <button className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300">
                Get Free Consultation
                <ArrowRight className="ml-2" size={18} />
              </button>
            </div>
            <div className="relative">
              <img
                src={bedroomImages[0].src}
                alt="Luxury Bedroom Design"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-600 rounded-lg opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-300 rounded-lg opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">What We Offer</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive bedroom design solutions tailored to your unique needs and preferences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <Check className="text-primary-600 mr-4 mt-1 flex-shrink-0" size={20} />
                <span className="text-neutral-600 text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">Our Bedroom Designs</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Explore our collection of stunning bedroom designs that showcase our creativity and expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bedroomImages.map((image, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">Our Design Process</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A systematic approach that ensures your bedroom design meets your expectations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-4">{step.title}</h3>
                <p className="text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Bedroom?</h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Let's create a bedroom that perfectly reflects your style and provides the ultimate comfort and relaxation.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-300">
            Schedule Consultation
            <ArrowRight className="ml-2" size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default BedroomDesign; 