import React, { useState, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // EmailJS configuration
    // Replace these with your actual EmailJS credentials
    const serviceId = 'service_fqlucdp'; // Your EmailJS service ID
    const ownerTemplateId = 'template_8dc6wwm'; // Owner notification template ID
    const autoReplyTemplateId = 'template_7rot2e9'; // Auto-reply template ID (replace with your actual ID)
    const publicKey = '2dK7kJ-_mcBsSPvjM'; // Your EmailJS public key

    if (form.current) {
      // Send to owner
      emailjs.sendForm(serviceId, ownerTemplateId, form.current, publicKey)
        .then((result) => {
          // Send auto-reply to sender
          emailjs.sendForm(serviceId, autoReplyTemplateId, form.current, publicKey)
            .then(() => {
              setSubmitStatus('success');
              setFormData({ name: '', email: '', phone: '', service: '', message: '' });
            })
            .catch(() => setSubmitStatus('error'));
        })
        .catch(() => setSubmitStatus('error'))
        .finally(() => setIsSubmitting(false));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-neutral-800 mb-6">Get In Touch</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space? Let's discuss your vision and bring your dream interior to life. 
            Contact us today for a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-800 mb-8">Send Us a Message</h2>
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Design</option>
                      <option value="commercial">Commercial Interiors</option>
                      <option value="kitchen">Modular Kitchen</option>
                      <option value="furniture">Custom Furniture</option>
                      <option value="consultation">Design Consultation</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="Tell us about your project, budget, timeline, and any specific requirements..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center ${
                    isSubmitting 
                      ? 'bg-neutral-400 cursor-not-allowed' 
                      : 'bg-primary-600 hover:bg-primary-700 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2" size={18} />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium">
                      Thank you for your message! We'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-medium">
                      Sorry, there was an error sending your message. Please try again or contact us directly.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-800 mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-1">Our Location</h3>
                    <p className="text-neutral-600">
                      SMK Interiors<br />
                      Suraram X Road Hunaman Nagar,<br />
                      Hyderabad, Telangana - 500055,<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-1">Phone Number</h3>
                    <p className="text-neutral-600">
                      +91 9160614609 <br />
                      +91 9346899020
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-1">Email Address</h3>
                    <p className="text-neutral-600">
                      smkinteriors16@gmail.com<br />
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-neutral-600">
              Common questions about our services and process
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                How long does a typical interior design project take?
              </h3>
              <p className="text-neutral-600">
                Project timelines vary depending on scope and complexity. A single room typically takes 4-6 weeks, 
                while full home renovations can take 3-6 months. We'll provide a detailed timeline during consultation.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                Do you offer free consultations?
              </h3>
              <p className="text-neutral-600">
                Yes! We offer a complimentary initial consultation to discuss your project, understand your needs, 
                and explain our process. This helps us determine if we're the right fit for your project.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                What's included in your design services?
              </h3>
              <p className="text-neutral-600">
                Our comprehensive service includes space planning, color consultation, furniture selection, 
                lighting design, material selection, project management, and installation oversight.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                Do you work within specific budgets?
              </h3>
              <p className="text-neutral-600">
                Absolutely! We work with various budget ranges and will be transparent about costs from the beginning. 
                We'll help you prioritize elements to maximize impact within your budget.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;