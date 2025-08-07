import React, { useState } from 'react';
import { Filter, Eye } from 'lucide-react';
import { allImages, bedroomImages, kitchenImages, poojaImages, tvUnitImages, livingArchImages } from '../config/images';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Bedroom', 'Kitchen', 'Pooja', 'TV Units', 'Living Arch'];

  // Create projects from actual images
  const projects = allImages.map((image, index) => ({
    id: image.id,
    title: image.title,
    category: image.category,
    image: image.src,
    description: `Beautiful ${image.category.toLowerCase()} design showcasing modern interior solutions with premium materials and expert craftsmanship.`
  }));

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-neutral-800 mb-6">Our Portfolio</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of transformed spaces. Each project tells a unique story of creativity, 
            functionality, and beautiful design tailored to our clients' lifestyles.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center mr-4">
              <Filter className="text-neutral-500 mr-2" size={20} />
              <span className="text-neutral-600 font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-primary-100 hover:text-primary-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer" onClick={() => setSelectedProject(project)}>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Eye className="text-white" size={32} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                    <p className="text-neutral-300 text-sm">{project.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-neutral-800">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-neutral-500 hover:text-neutral-700 text-xl"
                >
                  ×
                </button>
              </div>
              
              <div className="mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              
              <div>
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-3">
                  {selectedProject.category}
                </span>
                <p className="text-neutral-600 leading-relaxed">{selectedProject.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;