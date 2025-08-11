'use client'
import React, { useState } from 'react';
import { MapPin, Calendar, Users, Leaf, TreePine, Droplets, Recycle, Sun, Heart, ArrowLeft, Share2, Download, ExternalLink, Tag, Clock, Target, Award, ChevronRight } from 'lucide-react';

// Extended project data with detailed information
const projectsData = {
  projects: [
    {
      id: "climate-creativity-context-2024",
      slug: "climate-creativity-context-2024",
      name: "Climate Creativity Context",
      title: "Climate Creativity Context 2024",
      description: "A comprehensive youth empowerment program designed to engage students in climate action through creative expression, critical thinking, and community involvement.",
      shortDescription: "Youth empowerment initiative engaging 200+ students in climate action through creativity and community involvement.",
      image: "/projects/ClimateCreativityContext.jpg",
      category: "Empowerment",
      status: "Completed",
      location: "Dakshinkali Municipality, Nepal",
      timeline: "March 2024 - August 2024",
      duration: "6 months",
      beneficiaries: "200+ students",
      budget: "$15,000",
      partners: ["British Council Nepal", "AYON", "Dakshinkali Municipality"],
      
      // Detailed content sections
      sectionTitle: "Empowering Youth for Climate Action",
      overview: "The Climate Creativity Context was a groundbreaking initiative that brought together young minds from across Dakshinkali Municipality to address climate challenges through innovative and creative approaches. This program combined environmental education with artistic expression, enabling students to become active climate advocates in their communities.",
      
      objectives: [
        "Enhance climate literacy among young students",
        "Develop creative problem-solving skills for environmental challenges",
        "Build a network of young climate ambassadors",
        "Create community-wide awareness about climate issues",
        "Foster collaboration between schools and local government"
      ],
      
      activities: [
        {
          title: "Climate Science Workshops",
          description: "Interactive sessions covering climate science fundamentals, local environmental challenges, and global climate impacts.",
          duration: "2 weeks"
        },
        {
          title: "Creative Expression Projects",
          description: "Students created art, music, poetry, and digital content to communicate climate messages effectively.",
          duration: "4 weeks"
        },
        {
          title: "Community Action Plans",
          description: "Development of practical, student-led initiatives to address local environmental issues.",
          duration: "3 weeks"
        },
        {
          title: "Climate Advocacy Campaign",
          description: "Public presentations and community events where students shared their projects and climate solutions.",
          duration: "2 weeks"
        }
      ],
      
      impact: {
        direct: [
          "200+ students directly participated",
          "15 schools involved across the municipality",
          "50+ creative projects developed",
          "8 community action plans implemented"
        ],
        indirect: [
          "1,000+ community members reached through campaigns",
          "Local government policy discussions initiated",
          "Ongoing student-led environmental clubs established",
          "Increased community awareness about climate issues"
        ]
      },
      
      outcomes: [
        "Enhanced climate knowledge among participating students",
        "Improved creative and communication skills",
        "Stronger school-community partnerships",
        "Increased youth participation in local environmental initiatives",
        "Recognition from municipal government for innovative approach"
      ],
      
      challenges: [
        "Limited initial awareness about climate issues among students",
        "Coordinating schedules across multiple schools",
        "Language barriers in some rural areas",
        "Weather-related disruptions to outdoor activities"
      ],
      
      solutions: [
        "Developed multilingual educational materials",
        "Created flexible program schedules",
        "Partnered with local teachers for translation support",
        "Established indoor alternatives for all activities"
      ],
      
      testimonials: [
        {
          name: "Rajesh Sharma",
          role: "Principal, Dakshinkali Secondary School",
          quote: "This program transformed how our students think about environmental issues. They became true climate ambassadors."
        },
        {
          name: "Sita Poudel",
          role: "Student Participant",
          quote: "Through this program, I learned that young people can make a real difference in fighting climate change."
        }
      ],
      
      mediaGallery: [
        {
          type: "image",
          url: "/projects/ccc-workshop.jpg",
          caption: "Students participating in interactive climate science workshop"
        },
        {
          type: "image", 
          url: "/projects/ccc-creative.jpg",
          caption: "Creative expression session - students working on climate-themed artwork"
        },
        {
          type: "image",
          url: "/projects/ccc-presentation.jpg", 
          caption: "Final presentation ceremony with community members"
        }
      ],
      
      futurePhases: [
        "Expansion to 5 additional municipalities in 2025",
        "Development of digital platform for ongoing student collaboration", 
        "Integration with national climate education curriculum",
        "International student exchange program on climate action"
      ],
      
      relatedProjects: ["youth-climate-summit-2023", "green-schools-initiative"],
      
      downloadableResources: [
        {
          title: "Program Implementation Guide",
          type: "PDF",
          size: "2.3 MB"
        },
        {
          title: "Student Project Examples",
          type: "ZIP",
          size: "15.7 MB"
        },
        {
          title: "Impact Assessment Report",
          type: "PDF", 
          size: "4.1 MB"
        }
      ]
    }
    // Add more projects here with similar detailed structure
  ]
};

const ProjectCard = ({ project, onProjectClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onProjectClick(project)}
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
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-emerald-600/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="text-lg font-semibold mb-2">View Project Details</div>
            <ChevronRight className="mx-auto" size={24} />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300 mb-3">
          {project.name}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.shortDescription}
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

const ProjectDetailPage = ({ project, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const tabs = [
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'activities', label: 'Activities', icon: Clock },
    { id: 'impact', label: 'Impact', icon: Award },
    { id: 'gallery', label: 'Gallery', icon: ExternalLink }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-emerald-600 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-8 py-16">
          {/* Back Button */}
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors mb-8 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                  {project.category}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  project.status === 'Completed' ? 'bg-green-500/90' :
                  project.status === 'Active' ? 'bg-blue-500/90' :
                  'bg-yellow-500/90'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                {project.title}
              </h1>
              
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                {project.description}
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-white">{project.beneficiaries}</div>
                  <div className="text-emerald-200 text-sm">Beneficiaries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">{project.duration}</div>
                  <div className="text-emerald-200 text-sm">Duration</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">{project.partners.length}</div>
                  <div className="text-emerald-200 text-sm">Partners</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">{project.budget}</div>
                  <div className="text-emerald-200 text-sm">Investment</div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex space-x-4 mt-8">
                <button className="bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors flex items-center space-x-2">
                  <Share2 size={20} />
                  <span>Share Project</span>
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-emerald-600 transition-colors flex items-center space-x-2">
                  <Download size={20} />
                  <span>Download Report</span>
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tab Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-emerald-500 text-emerald-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <IconComponent size={20} />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Project Overview */}
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <section>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Overview</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">{project.overview}</p>
                </section>
                
                <section>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Objectives</h3>
                  <ul className="space-y-3">
                    {project.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Target className="text-emerald-500 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-gray-600">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h4 className="font-bold text-gray-800 mb-4">Project Details</h4>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Location:</span>
                      <span className="text-gray-800 font-medium">{project.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Timeline:</span>
                      <span className="text-gray-800 font-medium">{project.timeline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Budget:</span>
                      <span className="text-gray-800 font-medium">{project.budget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Status:</span>
                      <span className="text-gray-800 font-medium">{project.status}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h4 className="font-bold text-gray-800 mb-4">Partners</h4>
                  <div className="space-y-2">
                    {project.partners.map((partner, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{partner}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'activities' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Project Activities</h2>
            <div className="grid gap-6">
              {project.activities.map((activity, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{activity.title}</h3>
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                      {activity.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'impact' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Project Impact</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <Award className="text-emerald-500 mr-3" size={24} />
                  Direct Impact
                </h3>
                <ul className="space-y-3">
                  {project.impact.direct.map((impact, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <span className="text-gray-600">{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <Users className="text-blue-500 mr-3" size={24} />
                  Indirect Impact
                </h3>
                <ul className="space-y-3">
                  {project.impact.indirect.map((impact, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span className="text-gray-600">{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Testimonials */}
            {project.testimonials && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-8">What People Say</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {project.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl">
                      <blockquote className="text-gray-700 italic mb-4 text-lg leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <div className="font-bold text-gray-800">{testimonial.name}</div>
                        <div className="text-gray-500 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        
        {activeTab === 'gallery' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Project Gallery</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.mediaGallery.map((media, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <img 
                      src={media.url}
                      alt={media.caption}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="text-sm">{media.caption}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Downloadable Resources */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Download Resources</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {project.downloadableResources.map((resource, index) => (
                  <button key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-left group">
                    <div className="flex items-center justify-between mb-2">
                      <Download className="text-emerald-500" size={24} />
                      <span className="text-xs text-gray-500">{resource.size}</span>
                    </div>
                    <h4 className="font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">
                      {resource.title}
                    </h4>
                    <p className="text-sm text-gray-500">{resource.type}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectsShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = projectsData.projects;
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);
  
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };
  
  const handleBackToProjects = () => {
    setSelectedProject(null);
  };
  
  const handleJoinClick = (path) => {
    console.log(`Navigate to /${path}`);
  };
  
  // If a project is selected, show the detail page
  if (selectedProject) {
    return <ProjectDetailPage project={selectedProject} onBack={handleBackToProjects} />;
  }
  
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
              Our Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover our environmental initiatives making a real difference. From youth empowerment to ecosystem restoration, 
              each project represents our commitment to protecting our planet for future generations.
            </p>
          </div>
        </div>
      </div>
      
      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} onProjectClick={handleProjectClick} />
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Environmental Mission</h2>
          <p className="text-emerald-100 mb-6 text-lg">
            Together, we can create lasting positive change for our planet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleJoinClick('joinus')} 
              className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors duration-300"
            >
              Support a Project
            </button>
            <button 
              onClick={() => handleJoinClick('joinus')} 
              className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-300"
            >
              Become a Volunteer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;