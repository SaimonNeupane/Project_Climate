'use client'
import React, { useState } from 'react';
import { MapPin, Calendar, Users, Leaf, TreePine, Droplets, Recycle, Sun, Heart } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getImpactIcon = (type) => {
    switch(type) {
      case 'trees': return <TreePine className="text-green-600" size={16} />;
      case 'water': return <Droplets className="text-blue-600" size={16} />;
      case 'waste': return <Recycle className="text-emerald-600" size={16} />;
      case 'energy': return <Sun className="text-yellow-600" size={16} />;
      default: return <Leaf className="text-green-600" size={16} />;
    }
  };
  
  return (
    <div 
      className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-emerald-500/90 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
            {project.category}
          </span>
        </div>
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
            project.status === 'Completed' ? 'bg-green-500/90 text-white' :
            project.status === 'Active' ? 'bg-blue-500/90 text-white' :
            'bg-yellow-500/90 text-white'
          }`}>
            {project.status}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300 mb-3">
          {project.name}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Project Details */}
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-center space-x-2 text-gray-500">
            <MapPin size={14} />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500">
            <Calendar size={14} />
            <span>{project.timeline}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500">
            <Users size={14} />
            <span>{project.beneficiaries}</span>
          </div>
        </div>
        
        {/* Impact Metrics */}
        <div className="bg-emerald-50 rounded-xl p-4 mb-4">
          <h4 className="font-semibold text-emerald-800 mb-2 text-sm">Environmental Impact</h4>
          <div className="grid grid-cols-1 gap-2">
            {project.impacts.map((impact, i) => (
              <div key={i} className="flex items-center space-x-2">
                {getImpactIcon(impact.type)}
                <span className="text-sm text-gray-700">{impact.value}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Partners/Collaborators */}
        {project.partners && (
          <div className="mb-4">
            <p className="text-xs text-gray-500 mb-2">In partnership with:</p>
            <div className="flex flex-wrap gap-1">
              {project.partners.map((partner, i) => (
                <span key={i} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs">
                  {partner}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Action Button */}
        <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center space-x-2 group">
          <span>Learn More</span>
          <Heart size={16} className="group-hover:scale-110 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

const ProjectsShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      name: "Amazon Rainforest Restoration",
      description: "Large-scale reforestation initiative working with indigenous communities to restore degraded rainforest areas and protect biodiversity hotspots in the Amazon basin.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
      category: "Reforestation",
      status: "Active",
      location: "Amazon Basin, Brazil",
      timeline: "2020 - 2025",
      beneficiaries: "50+ communities",
      impacts: [
        { type: "trees", value: "2.5 million trees planted" },
        { type: "default", value: "15,000 hectares restored" },
        { type: "default", value: "200+ species protected" }
      ],
      partners: ["WWF", "Local Tribes", "Brazilian Government"]
    },
    {
      name: "Ocean Plastic Cleanup Initiative",
      description: "Community-driven coastal cleanup program removing plastic waste from beaches and ocean waters while educating local populations about marine conservation.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
      category: "Ocean Conservation",
      status: "Active",
      location: "Southeast Asia",
      timeline: "2019 - Ongoing",
      beneficiaries: "1M+ people",
      impacts: [
        { type: "waste", value: "500 tons plastic removed" },
        { type: "water", value: "2,000km coastline cleaned" },
        { type: "default", value: "10,000 volunteers trained" }
      ],
      partners: ["Ocean Conservancy", "Local NGOs", "Government Bodies"]
    },
    {
      name: "Solar Villages Program",
      description: "Bringing clean, renewable solar energy to remote villages without grid access, improving quality of life while reducing carbon emissions and fossil fuel dependency.",
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&h=400&fit=crop",
      category: "Renewable Energy",
      status: "Completed",
      location: "Rural India & Africa",
      timeline: "2018 - 2023",
      beneficiaries: "100,000+ people",
      impacts: [
        { type: "energy", value: "50 villages electrified" },
        { type: "default", value: "2,000 tons CO2 saved annually" },
        { type: "default", value: "500 solar systems installed" }
      ],
      partners: ["UN Development Programme", "Local Governments"]
    },
    {
      name: "Urban Green Corridors",
      description: "Creating interconnected green spaces in urban areas to combat air pollution, reduce urban heat islands, and provide wildlife habitats in city environments.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
      category: "Urban Sustainability",
      status: "Active",
      location: "Major Cities Worldwide",
      timeline: "2021 - 2026",
      beneficiaries: "5M+ urban residents",
      impacts: [
        { type: "trees", value: "100,000 trees planted" },
        { type: "default", value: "300 parks connected" },
        { type: "default", value: "30% air quality improvement" }
      ],
      partners: ["City Councils", "Environmental Groups", "Citizens"]
    },
    {
      name: "Sustainable Agriculture Training",
      description: "Empowering farmers with sustainable farming techniques that increase crop yields while protecting soil health, reducing water usage, and eliminating harmful pesticides.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      category: "Agriculture",
      status: "Active",
      location: "Sub-Saharan Africa",
      timeline: "2020 - 2024",
      beneficiaries: "25,000 farmers",
      impacts: [
        { type: "water", value: "40% water usage reduction" },
        { type: "default", value: "60% yield increase" },
        { type: "default", value: "Zero pesticide farming" }
      ],
      partners: ["FAO", "Agricultural Cooperatives", "Research Institutes"]
    },
    {
      name: "Coral Reef Restoration",
      description: "Marine conservation project focused on restoring damaged coral reefs through coral farming, transplantation, and community-based marine protected areas.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
      category: "Marine Conservation",
      status: "Planning",
      location: "Caribbean & Pacific",
      timeline: "2024 - 2029",
      beneficiaries: "Coastal communities",
      impacts: [
        { type: "water", value: "500 hectares reef restoration" },
        { type: "default", value: "50+ coral species protected" },
        { type: "default", value: "Marine biodiversity recovery" }
      ],
      partners: ["Marine Research Centers", "Diving Communities", "Tourism Boards"]
    }
  ];
  
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-teal-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 px-4 py-2 rounded-full mb-6">
              <Leaf className="text-emerald-600" size={20} />
              <span className="text-emerald-700 font-semibold">Environmental Impact</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Our Conservation Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover our global environmental initiatives making a real difference. From forest restoration to ocean cleanup, 
              each project represents our commitment to protecting our planet for future generations.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">2.5M+</div>
                <div className="text-gray-500 text-sm">Trees Planted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">6M+</div>
                <div className="text-gray-500 text-sm">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">500+</div>
                <div className="text-gray-500 text-sm">Tons Waste Removed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">50+</div>
                <div className="text-gray-500 text-sm">Communities Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-8 pb-12">
        <div className="flex items-center justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-emerald-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Environmental Mission</h2>
          <p className="text-emerald-100 mb-6 text-lg">
            Together, we can create lasting positive change for our planet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors duration-300">
              Support a Project
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-300">
              Become a Volunteer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;