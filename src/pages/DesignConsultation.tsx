import React from 'react';
import { ArrowRight, Check, Star, Users, Clock, Award } from 'lucide-react';

const DesignConsultation = () => {
  const services = [
    {
      title: "Initial Consultation",
      description: "Free initial consultation to understand your vision, budget, and requirements.",
      features: ["Space assessment", "Budget discussion", "Style preferences", "Timeline planning"]
    },
    {
      title: "Design Consultation",
      description: "Professional design consultation with expert interior designers.",
      features: ["Color consultation", "Material selection", "Furniture planning", "Lighting design"]
    },
    {
      title: "3D Visualization",
      description: "Advanced 3D renderings to visualize your space before implementation.",
      features: ["3D modeling", "Realistic renderings", "Multiple options", "Virtual walkthrough"]
    },
    {
      title: "Project Planning",
      description: "Comprehensive project planning and coordination services.",
      features: ["Timeline creation", "Budget management", "Vendor coordination", "Quality control"]
    }
  ];

  const benefits = [
    "Expert guidance from experienced designers",
    "Save time and money with professional planning",
    "Avoid costly mistakes with proper consultation",
    "Get the best value for your investment",
    "Ensure your vision becomes reality",
    "Professional project management"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-neutral-800 mb-6">Design Consultation</h1>
              <p className="text-xl text-neutral-600 mb-6 leading-relaxed">
                Professional interior design consultation services to help you make informed decisions and create the perfect space for your needs.
              </p>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Our expert designers provide comprehensive consultation services, from initial concept to final implementation, ensuring your project success.
              </p>
              <button className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300">
                Book Free Consultation
                <ArrowRight className="ml-2" size={18} />
              </button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center">
                <Users className="text-primary-600" size={80} />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-600 rounded-lg opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-300 rounded-lg opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">Our Consultation Services</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive consultation services tailored to your specific needs and project requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-neutral-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-neutral-800 mb-4">{service.title}</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="text-primary-600 mr-3 flex-shrink-0" size={16} />
                      <span className="text-neutral-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">Why Choose Our Consultation?</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Professional consultation services that deliver results and exceed expectations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="text-primary-600" size={24} />
                </div>
                <p className="text-neutral-600 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">Our Consultation Process</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A systematic approach to ensure your consultation meets all your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Initial Meeting</h3>
              <p className="text-neutral-600">
                Free initial consultation to understand your vision and requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Analysis</h3>
              <p className="text-neutral-600">
                Detailed analysis of your space, budget, and design preferences.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Recommendations</h3>
              <p className="text-neutral-600">
                Professional recommendations and detailed design proposals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Implementation</h3>
              <p className="text-neutral-600">
                Support throughout implementation and project completion.
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
            Get professional consultation to ensure your interior design project is a success.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-300">
            Book Free Consultation
            <ArrowRight className="ml-2" size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default DesignConsultation; 