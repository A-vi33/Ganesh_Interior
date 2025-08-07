import React from 'react';
import { Award, Users, Target, Heart } from 'lucide-react';
import { bedroomImages, kitchenImages, tvUnitImages, poojaImages } from '../config/images';

const About = () => {
  const featuredProjects = [
    {
      title: "Luxury Bedroom Design",
      image: bedroomImages[1].src,
      description: "Modern bedroom with custom wardrobes and elegant lighting"
    },
    {
      title: "Contemporary Kitchen",
      image: kitchenImages[2].src,
      description: "Functional kitchen with smart storage and modern appliances"
    },
    {
      title: "Stylish TV Unit",
      image: tvUnitImages[3].src,
      description: "Custom TV unit with integrated storage and lighting"
    },
    {
      title: "Sacred Pooja Room",
      image: poojaImages[0].src,
      description: "Traditional pooja room with modern amenities"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-neutral-800 mb-6">About SMK Interiors</h1>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Founded with a vision to transform living spaces into beautiful, functional environments, SMK Interiors has been at the forefront of interior design innovation. We specialize in creating personalized spaces that reflect our clients' unique style and enhance their daily living experience.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Our team of experienced designers combines creativity with functionality to deliver exceptional results. From contemporary minimalism to classic elegance, we work closely with our clients to understand their vision and bring it to life.
              </p>
            </div>
            <div className="relative">
              <img
                src={bedroomImages[0].src}
                alt="SMK Interiors Design Studio"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-600 rounded-lg opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-primary-600" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-neutral-800 mb-4">Our Mission</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                To transform spaces into beautiful, functional environments that reflect our clients' personalities and enhance their quality of life. We strive to exceed expectations through innovative design, exceptional service, and meticulous attention to detail.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-primary-600" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-neutral-800 mb-4">Our Vision</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                To be recognized as the premier interior design firm that creates timeless, sustainable, and inspiring spaces. We envision a world where great design is accessible to everyone, and where beautiful spaces contribute to happier, more fulfilling lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">Our Featured Projects</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Explore some of our most successful projects that showcase our expertise and creativity
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                </div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">{project.title}</h3>
                <p className="text-neutral-600 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">Our Values</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Excellence</h3>
              <p className="text-neutral-600">
                We pursue excellence in every aspect of our work, from initial concept to final installation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Collaboration</h3>
              <p className="text-neutral-600">
                We believe the best designs emerge from close collaboration with our clients and partners.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Integrity</h3>
              <p className="text-neutral-600">
                We operate with honesty, transparency, and respect in all our relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose SMK Interiors?</h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              We bring years of experience and a passion for creating beautiful spaces
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">10+</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Years Experience</h3>
              <p className="text-primary-100">
                Over a decade of expertise in interior design and space transformation
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">500+</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Projects Completed</h3>
              <p className="text-primary-100">
                Successfully delivered projects across various categories and styles
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">100%</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Client Satisfaction</h3>
              <p className="text-primary-100">
                Committed to exceeding expectations and delivering exceptional results
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">24/7</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Support Available</h3>
              <p className="text-primary-100">
                Round-the-clock support and consultation for all your design needs
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;