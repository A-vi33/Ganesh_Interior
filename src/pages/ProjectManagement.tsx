import React from 'react';
import { ArrowRight, Check, Star, Users, Clock, Award, Calendar, Shield } from 'lucide-react';

const ProjectManagement = () => {
  const services = [
    {
      title: "Project Planning",
      description: "Comprehensive project planning and timeline management.",
      features: ["Timeline creation", "Resource allocation", "Budget planning", "Risk assessment"]
    },
    {
      title: "Vendor Management",
      description: "Professional coordination with contractors and suppliers.",
      features: ["Vendor selection", "Contract negotiation", "Quality control", "Timeline management"]
    },
    {
      title: "Quality Control",
      description: "Rigorous quality control and inspection services.",
      features: ["Regular inspections", "Quality standards", "Issue resolution", "Final approval"]
    },
    {
      title: "Project Monitoring",
      description: "Continuous monitoring and progress tracking.",
      features: ["Progress reports", "Milestone tracking", "Communication updates", "Issue management"]
    }
  ];

  const benefits = [
    "Professional project coordination",
    "Timeline adherence and management",
    "Quality assurance and control",
    "Cost-effective project execution",
    "Stress-free project experience",
    "Regular progress updates"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-neutral-800 mb-6">Project Management</h1>
              <p className="text-xl text-neutral-600 mb-6 leading-relaxed">
                Professional project management services to ensure your interior design project is completed on time, within budget, and to the highest quality standards.
              </p>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Our experienced project managers coordinate every aspect of your project, from initial planning to final completion, ensuring a smooth and successful experience.
              </p>
              <button className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300">
                Get Project Quote
                <ArrowRight className="ml-2" size={18} />
              </button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center">
                <Calendar className="text-primary-600" size={80} />
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
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">Our Project Management Services</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive project management solutions to ensure your project success
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
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">Why Choose Our Project Management?</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Professional project management that delivers results and exceeds expectations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="text-primary-600" size={24} />
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
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">Our Project Management Process</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A systematic approach to ensure your project is managed efficiently and successfully
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Project Initiation</h3>
              <p className="text-neutral-600">
                Define project scope, objectives, and establish project team.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Planning</h3>
              <p className="text-neutral-600">
                Develop detailed project plan, timeline, and resource allocation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Execution</h3>
              <p className="text-neutral-600">
                Implement project plan with continuous monitoring and control.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Completion</h3>
              <p className="text-neutral-600">
                Final inspection, handover, and project closure with documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">What We Manage</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive project management covering all aspects of your interior design project
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <Check className="text-primary-600 mr-4 mt-1 flex-shrink-0" size={20} />
              <span className="text-neutral-600 text-lg">Timeline management and scheduling</span>
            </div>
            <div className="flex items-start">
              <Check className="text-primary-600 mr-4 mt-1 flex-shrink-0" size={20} />
              <span className="text-neutral-600 text-lg">Budget tracking and cost control</span>
            </div>
            <div className="flex items-start">
              <Check className="text-primary-600 mr-4 mt-1 flex-shrink-0" size={20} />
              <span className="text-neutral-600 text-lg">Vendor and contractor coordination</span>
            </div>
            <div className="flex items-start">
              <Check className="text-primary-600 mr-4 mt-1 flex-shrink-0" size={20} />
              <span className="text-neutral-600 text-lg">Quality control and inspections</span>
            </div>
            <div className="flex items-start">
              <Check className="text-primary-600 mr-4 mt-1 flex-shrink-0" size={20} />
              <span className="text-neutral-600 text-lg">Risk management and issue resolution</span>
            </div>
            <div className="flex items-start">
              <Check className="text-primary-600 mr-4 mt-1 flex-shrink-0" size={20} />
              <span className="text-neutral-600 text-lg">Regular progress reporting</span>
            </div>
            <div className="flex items-start">
              <Check className="text-primary-600 mr-4 mt-1 flex-shrink-0" size={20} />
              <span className="text-neutral-600 text-lg">Communication and stakeholder management</span>
            </div>
            <div className="flex items-start">
              <Check className="text-primary-600 mr-4 mt-1 flex-shrink-0" size={20} />
              <span className="text-neutral-600 text-lg">Final handover and documentation</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Let our professional project managers handle your interior design project from start to finish.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-300">
            Get Project Quote
            <ArrowRight className="ml-2" size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectManagement; 