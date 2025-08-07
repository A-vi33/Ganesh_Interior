import React from 'react';
import { Home, Building, ChefHat, Sofa, ArrowRight, Check, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import { bedroomImages, kitchenImages, tvUnitImages, poojaImages, livingArchImages } from '../config/images';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Bedroom Design",
      description: "Create luxurious and comfortable bedroom spaces that reflect your personal style and provide the perfect sanctuary for rest and relaxation.",
      features: [
        "Custom bedroom layouts",
        "Wardrobe and storage solutions",
        "Lighting and ambiance design",
        "Color and texture coordination",
        "Furniture selection and placement",
        "Accessories and finishing touches"
      ],
      image: bedroomImages[0].src,
      gallery: bedroomImages.slice(0, 3),
      link: "/bedroom-design"
    },
    {
      icon: ChefHat,
      title: "Kitchen Design",
      description: "Design functional and beautiful kitchens that become the heart of your home with smart storage solutions and modern appliances.",
      features: [
        "Custom cabinet design",
        "Smart storage solutions",
        "Appliance integration",
        "Island and breakfast bars",
        "Lighting and ventilation",
        "Material selection"
      ],
      image: kitchenImages[0].src,
      gallery: kitchenImages.slice(0, 3),
      link: "/kitchen-design"
    },
    {
      icon: Sofa,
      title: "TV Units & Entertainment Centers",
      description: "Stylish and functional TV units that enhance your living space while providing optimal viewing experience and storage solutions.",
      features: [
        "Custom TV unit designs",
        "Cable management solutions",
        "Storage and display options",
        "Material and finish selection",
        "Lighting integration",
        "Space optimization"
      ],
      image: tvUnitImages[0].src,
      gallery: tvUnitImages.slice(0, 3),
      link: "/tv-units"
    },
    {
      icon: Building,
      title: "Pooja Room Design",
      description: "Sacred and serene pooja room designs that create the perfect spiritual environment for your religious practices and meditation.",
      features: [
        "Traditional and modern designs",
        "Sacred geometry principles",
        "Proper ventilation and lighting",
        "Storage for religious items",
        "Peaceful ambiance creation",
        "Cultural authenticity"
      ],
      image: poojaImages[0].src,
      gallery: poojaImages.slice(0, 3),
      link: "/pooja-rooms"
    },
    {
      icon: Landmark,
      title: "Living Arch Design",
      description: "Create stunning living arch designs that add elegance and architectural beauty to your living spaces with custom designs and premium materials.",
      features: [
        "Custom living arch designs",
        "Modern and traditional styles",
        "Material selection and finishing",
        "Lighting integration and effects",
        "Space optimization and planning",
        "Decorative elements and accents"
      ],
      image: livingArchImages[0].src,
      gallery: livingArchImages.slice(0, 3),
      link: "/living-arch"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-neutral-800 mb-6">Our Services</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive interior design solutions tailored to your unique needs, style, and budget. 
            From concept to completion, we handle every detail to create spaces that inspire.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="bg-neutral-50 rounded-xl p-6 md:p-8 hover:shadow-lg transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                        <service.icon className="text-primary-600" size={24} />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">{service.title}</h2>
                    </div>
                    <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <Check className="text-primary-600 mr-3 flex-shrink-0" size={16} />
                          <span className="text-neutral-600 text-sm md:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to={service.link}
                      className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-lg shadow-lg w-full h-64 md:h-80 object-cover"
                      />
                      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary-600 rounded-lg opacity-20"></div>
                      <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-300 rounded-lg opacity-20"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">Our Work Gallery</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Explore our latest projects and see how we transform spaces into beautiful, functional environments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-semibold text-neutral-800 text-center">{service.title}</h3>
                <div className="grid grid-cols-1 gap-4">
                  {service.gallery.map((image, imageIndex) => (
                    <div key={imageIndex} className="relative overflow-hidden rounded-lg shadow-lg group">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                    </div>
                  ))}
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
              A systematic approach that ensures every project meets your expectations and timeline
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">Consultation</h3>
              <p className="text-neutral-600">
                Initial meeting to understand your vision, needs, and budget requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">Concept Design</h3>
              <p className="text-neutral-600">
                Create initial design concepts, mood boards, and space planning layouts.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">Development</h3>
              <p className="text-neutral-600">
                Refine designs, select materials, and finalize all project specifications.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">Implementation</h3>
              <p className="text-neutral-600">
                Oversee installation and ensure every detail meets our quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Let's discuss your vision and create a space that perfectly reflects your style and needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-300"
          >
            Schedule Consultation
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;