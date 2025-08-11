'use client'
import React from 'react';
import { Linkedin, Mail, Instagram } from 'lucide-react';

const TeamMember = ({ name, title, image, socialLinks }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-48 h-48 rounded-full overflow-hidden mb-4 bg-gray-300">
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
      />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
    <p className="text-gray-500 text-sm mb-4">{title}</p>
    <div className="flex space-x-3">
      {socialLinks.linkedin && (
        <a href={socialLinks.linkedin} className="text-gray-600 hover:text-gray-800 transition-colors">
          <Linkedin size={20} />
        </a>
      )}
      {socialLinks.instagram && (
        <a href={socialLinks.instagram} className="text-gray-600 hover:text-gray-800 transition-colors">
          <Instagram size={20} />
        </a>
      )}
      {socialLinks.email && (
        <a href={`mailto:${socialLinks.email}`} className="text-gray-600 hover:text-gray-800 transition-colors">
          <Mail size={20} />
        </a>
      )}
    </div>
  </div>
);

const MeetOurCrew = () => {
  const teamMembers = [
    {
      name: "LUKE",
      title: "Commander of Code",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      socialLinks: {
        linkedin: "#",
        email: "luke@moonshotpirates.com"
      }
    },
    {
      name: "NAZAR",
      title: "Master of Content",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      socialLinks: {
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "TEE",
      title: "Master of Connections",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b742?w=400&h=400&fit=crop&crop=face",
      socialLinks: {
        instagram: "#",
        linkedin: "#",
        email: "tee@moonshotpirates.com"
      }
    },
    {
      name: "SEAN",
      title: "Chief Navigator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      socialLinks: {
        linkedin: "#",
        email: "sean@moonshotpirates.com"
      }
    },
    {
      name: "SARAH",
      title: "Creative Captain",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      socialLinks: {
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "ALEX",
      title: "Strategy Specialist",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face",
      socialLinks: {
        linkedin: "#",
        email: "alex@moonshotpirates.com"
      }
    },
    {
      name: "MARCUS",
      title: "Innovation Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      socialLinks: {
        linkedin: "#",
        email: "marcus@moonshotpirates.com"
      }
    },
    {
      name: "DAVID",
      title: "Operations Lead",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      socialLinks: {
        linkedin: "#",
        email: "david@moonshotpirates.com"
      }
    }
  ];

  return (
    <div className="bg-gray-100 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 tracking-wide">
            MEET OUR CREW
          </h1>
          <p className="text-gray-600 text-lg">
            Ahoy! It's nice to meet you. We are the Moonshot Pirates!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {teamMembers.slice(0, 4).map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.slice(4).map((member, index) => (
            <TeamMember key={index + 4} {...member} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300 text-sm tracking-wide">
            JOIN OUR CREW
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetOurCrew;