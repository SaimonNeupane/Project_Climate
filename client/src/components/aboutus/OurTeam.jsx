'use client'
import React, { useState } from 'react';
import { Linkedin, Mail, Instagram, ArrowLeft, Share, UserPlus, Eye, Users, Calendar, MapPin } from 'lucide-react';

// Enhanced team data with descriptions and additional info
const teamData = [
  {
    id: 1,
    slug: "bibek-khanal",
    name: "Bibek Khanal",
    title: "Co-Founder, President",
    image: "/team/Bibekdada.jpg",
    description: "Bibek Khanal is an environmental professional and founding president of the Climate Care Network (CCN), dedicated to climate resilience, sustainable development, and community empowerment. With a degree in Environmental Science, he brings experience in bioengineering, circular economy models, and Indigenous knowledge integration. At CCN, he has led programs focused on slope stabilization, innovative integrated waste management youth and women-led climate adaptation, and policy engagement, particularly in disaster-prone and marginalized communities of Nepal.In addition to his work at CCN, Bibek serves as an Environment Safeguard Officer for a nationally pride infrastructure project, ensuring environmental compliance and sustainable practices in road construction. He is skilled in environmental impact assessment, project coordination, carbon footprint analysis, and grassroots mobilization. His research on municipal solid waste and GHG emissions has been published, and he continues to bridge science, policy, and local action for inclusive and impactful climate solutions.",
    location: "Chitwan, Nepal",
    joinedDate: "November 2023",
    projects: 15,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/bibek-khanal-361140248",
      email: "bibekkhanal5698@gmail.com"
    },
    expertise: ["Climate Policy", "Community Engagement", "Project Management", "Environmental Education"],
    achievements: [
      "Led 10+ community awareness campaigns",
      "Coordinated tree plantation drives across 5 districts",
      "Published research on climate adaptation strategies"
    ]
  },
  {
    id: 2,
    slug: "namrata-khatiwada",
    name: "Namrata Khatiwada",
    title: "Co-Founder, Vice President",
    image: "/team/namrata.png",
    description: "Namrata, the Vice Coordinator at Climate Care Network, is a passionate advocate for climate action and environmental conservation. After earning her bachelor's degree in forestry from Agriculture and Forestry University in 2023, she dedicated her career to making a tangible impact.Her diverse experience includes leading the SHIFT project, an initiative focused on climate justice for the indigenous Chepang community, with support from WWF Nepal, Save the Children, and Shift. She also spearheads the 'Climate Creativity Contest' under the 'Social Action Project' in collaboration with the British Council and Association of Youth Organizations Nepal.In addition to her project leadership roles, Namrata previously served as a Conservation Education Assistant at WWF Nepal, where she supported various conservation initiatives. She is also the founder of Forestry Youth Network, a green organization that engages young people in forestry, wildlife, and climate action projects. Namrata thrives on connecting with people and nature, drawing on her experience working with diverse audiences across Nepal.",
    location: "Dhading, Nepal",
    joinedDate: "November 2023",
    projects: 12,
    socialLinks: {
            linkedin: "https://www.linkedin.com/in/namrata-khatiwada ",
      email: "khatiwadanamrus@gmail.com"
    },
    expertise: ["Environmental Education", "Curriculum Development", "Youth Mentorship", "Rural Outreach"],
    achievements: [
      "Developed climate education modules for 20+ schools",
      "Trained 500+ educators in climate literacy",
      "Established youth climate clubs in 15 communities"
    ]
  },
  {
    id: 3,
    slug: "kaushal-niraula",
    name: "Kaushal Niraula",
    title: "Co-Founder, Treasurer",
    image: "/team/kaushal.JPG",
    description: "Kaushal, an Environment Science student at Kathmandu University, is a passionate environmental advocate from Biratnagar, Nepal, who embarked on his journey in environmental advocacy at an early age. As the Founding Secretary of the Climate Care Network, he plays a pivotal role in driving initiatives for ecosystem restoration and community empowerment. Kaushal is also a grantee of the Social Action Project, where he collaborated closely with his team to successfully complete the Climate Creativity Project, fostering innovative solutions to climate challenges. Having been part of various initiatives, he actively contributes to communities such as Movers Community Nepal and serves as a Local Ambassador for Moonshot Pirates. In recognition of his dedicated efforts, he was honored as one of Glocal's 20 Under 20 for 2024, highlighting his commitment to building a resilient and hopeful future through youth-led action.",
    location: "Biratnagar, Nepal",
    joinedDate: "November 2023",
    projects: 10,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/kaushalniraula88/",
      email: "kaushalniraula88@gmail.com"
    },
    expertise: ["Financial Management", "Waste Management", "Community Programs", "Resource Optimization"],
    achievements: [
      "Implemented waste segregation in 8 municipalities",
      "Managed funding for 25+ environmental projects",
      "Reduced organizational carbon footprint by 40%"
    ]
  },
  {
    id: 4,
    slug: "avash-thakur",
    name: "Avash Thakur",
    title: "Co-Founder, Legal Head",
    image: "/team/aavash.png",
    description: "Avash is the Legal Head at Climate Care Network, overseeing all legal matters with expertise and dedication. As a law student pursuing a BA LLB at Kathmandu School of Law since 2020, he brings an open mindset, enthusiasm for work, and strong mass communication skills to his social causes. He serves as a trainer for youth mock parliament at the National Youth Council, an executive member of the PDS-Nepal Student Network, a member of the National Youth Council, and a former member of the Province Youth Council in Madhesh Pradesh. Additionally, he holds certifications in mock parliament training, law drafting, youth leadership on climate change, first aid, and debate competitions, reflecting his commitment to community engagement and leadership.",
    location: "Janakpur, Dhanusha",
    joinedDate: "November 2023",
    projects: 18,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/avash-thakur-bb5046283",
      email: "avashthakur2060@gmail.com"
    },
    expertise: ["GIS & Remote Sensing", "Data Analysis", "Environmental Mapping", "Technology Integration"],
    achievements: [
      "Created environmental risk maps for 12 districts",
      "Trained 200+ professionals in GIS applications",
      "Developed climate monitoring dashboard"
    ]
  },
  {
    id: 5,
    slug: "aagya-dhungana",
    name: "Aagya Dhungana",
    title: "Co-Founder, Vice-Secretary",
    image: "/team/aagya.png",
    description: "Aagya Dhungana is a Geomatics engineer graduated from Kathmandu University who loves creating maps that support environment sustainability.  She is currently invested in utilizing geoinformation into various policy and decision making initiatives across Nepal. Her past experience involves development of GIS-based plastic waste map books for seven rural municipalities spread across Bagmati and Madhes Province under a World Bank funded project , drafting 10-year visionary plan for Harion municipality under UNDP initiative and multiple community development projects. She is a driven geo-information and climate action advocate.",
    location: "Kathmandu, Nepal",
    joinedDate: "November 2023",
    projects: 14,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/aagya-dhungana ",
      email: "aagyadhungana@outlook.com"
    },
    expertise: ["Communications", "Media Relations", "Social Media Strategy", "Content Creation"],
    achievements: [
      "Increased CCN's social media reach by 300%",
      "Secured coverage in 50+ media outlets",
      "Created viral climate awareness campaigns"
    ]
  },
  {
    id: 6,
    slug: "prabina-bhandari",
    name: "Prabina Bhandari",
    title: "Executive Member, Secretary",
    image: "/team/prabina.png",
    description: "Prabina Bhandari, Secretary at Climate Care Network, is a dedicated graduate of the Institute of Agriculture and Animal Science (IAAS), Tribhuvan University, with a Bachelor's degree in Agriculture. As Chairperson of Bagmati Welfare Society Nepal since April 2025, she leads full-time efforts in community welfare. She also serves as Executive Board Member Treasurer at Prisoner's Assistance Mission (PAM) since September 2024, and has held roles as Program Officer at Women Acting Together for Change (WATCH) and Coordinator at Women Youth Climate Warriors (WYCM) from April 2024 to August 2025, showcasing her commitment to social and environmental causes.",
    location: "Kathmandu, Nepal",
    joinedDate: "March 2024",
    projects: 11,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/prabina-bhandari",
      email: "prabinabhandari789@gmail.com"
    },
    expertise: ["Administration", "Program Coordination", "Partnership Management", "Event Planning"],
    achievements: [
      "Coordinated 30+ environmental events",
      "Established partnerships with 25+ organizations",
      "Streamlined organizational processes"
    ]
  },
  {
    id: 7,
    slug: "anupam-joshi",
    name: "Anupam Joshi",
    title: "Executive Member",
    image: "/team/anupam.png",
    description: "Anupam Joshi is a passionate youth from Nepal, currently pursuing a degree in Computer Science and Information Technology. He envisions a future where technology becomes a powerful ally in the fight against climate change. Integrating data science, digital tools, and innovative thinking, Anupam focuses on creating sustainable, tech-based solutions to environmental challenges.Anupam is truly passionate about growing his network and digital presence. He aims to raise awareness, inspire action, and build bridges between climate science and computer science.",
    location: "Kailali, Nepal",
    joinedDate: "July 2024",
    projects: 9,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/theanupamjoshi ",
      email: "anupamjoshi99@gmail.com"
    },
    expertise: ["Policy Research", "Academic Writing", "Advocacy", "Data Analysis"],
    achievements: [
      "Published 8 research papers on climate policy",
      "Contributed to national climate adaptation plans",
      "Presented at 15+ international conferences"
    ]
  },
 
];

const TeamMember = ({ member, onClick }) => (
  <div 
    className="flex flex-col items-center text-center cursor-pointer group"
    onClick={() => onClick(member)}
  >
    <div className="w-48 h-48 rounded-full overflow-hidden mb-4 bg-gray-300 group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
      <img 
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">{member.name}</h3>
    <p className="text-gray-500 text-sm mb-4">{member.title}</p>
    <div className="flex space-x-3">
      {member.socialLinks.linkedin && (
        <a 
          href={member.socialLinks.linkedin} 
          className="text-gray-600 hover:text-blue-600 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <Linkedin size={20} />
        </a>
      )}
      {member.socialLinks.instagram && (
        <a 
          href={member.socialLinks.instagram} 
          className="text-gray-600 hover:text-pink-600 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <Instagram size={20} />
        </a>
      )}
      {member.socialLinks.email && (
        <a 
          href={`mailto:${member.socialLinks.email}`} 
          className="text-gray-600 hover:text-green-600 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <Mail size={20} />
        </a>
      )}
    </div>
  </div>
);

const ProfilePage = ({ member, onBack }) => (
  <div className="min-h-screen bg-gradient-to-br from-green-900 to-gray-900 text-white">
    <div className="max-w-6xl mx-auto px-8 py-12">
      {/* Header with Back Button */}
      <div className="mb-8">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors mb-8 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
          <img src="/images/" alt="" />
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl text-gray-300 mb-2">Meet</h2>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              {member.name}
            </h1>
            <p className="text-xl text-gray-300 mb-8">{member.title}</p>
          </div>

          {/* Description */}
          <div className="text-gray-300 leading-relaxed text-lg">
            {member.description}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <MapPin className="text-blue-400" size={20} />
              <span className="text-gray-300">{member.location}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="text-green-400" size={20} />
              <span className="text-gray-300">Joined {member.joinedDate}</span>
            </div>
            
          
          </div>

          {/* Action Buttons */}
          
        </div>

        {/* Right Column - Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-96 h-96 rounded-lg overflow-hidden shadow-2xl">
            <img 
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      
    </div>
  </div>
);

const MeetOurCrew = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const handleBackToTeam = () => {
    setSelectedMember(null);
  };

  const handleJoinCrew = () => {
    // router.push('/joinus')
    console.log('Navigate to join us page');
  };

  // If a member is selected, show their profile page
  if (selectedMember) {
    return <ProfilePage member={selectedMember} onBack={handleBackToTeam} />;
  }

  // Show team overview
  return (
    <div className="bg-gray-100 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 tracking-wide">
            MEET OUR TEAM
          </h1>
          <p className="text-gray-600 text-lg">
            Ahoy! It's nice to meet you. We are the Team Climate Care Network! 🌳
          </p>
          <p className="text-gray-500 mt-2">
            Click on any team member to learn more about their story and contributions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {teamData.slice(0, 4).map((member) => (
            <TeamMember key={member.id} member={member} onClick={handleMemberClick} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamData.slice(4).map((member) => (
            <TeamMember key={member.id} member={member} onClick={handleMemberClick} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button 
            className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300 text-sm tracking-wide transform hover:scale-105" 
            onClick={handleJoinCrew}
          >
            JOIN OUR CREW
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetOurCrew;