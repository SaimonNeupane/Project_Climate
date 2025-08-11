'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { 
  FaQuestionCircle, 
  FaEye, 
  FaRoute, 
  FaHeart,
  FaLightbulb,
  FaUsers,
  FaHandsHelping,
  FaLeaf,
  FaBalanceScale,
  FaRocket,
  FaSeedling,
  FaGlobeAmericas,
  FaGlobe,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';

const TabbedSections = () => {
  const [activeTab, setActiveTab] = useState('vision');
  const [expandedThematic, setExpandedThematic] = useState(null);
  const router = useRouter();

  const tabs = [
    { id: 'vision', label: 'Our Vision', icon: FaEye },
    { id: 'approach', label: 'Our Approach', icon: FaRoute },
    { id: 'values', label: 'Our Values', icon: FaHeart },
    { id: 'themetic', label: 'Thematic Areas', icon: FaQuestionCircle },
  ];

  const content = {
    themetic: {
      title: "Our Focus Areas",
      quote: "Our core thematic areas define the focus of our work and guide our efforts toward creating lasting environmental and social impact.",
      details: [
        {
          icon: FaGlobe,
          title: "Climate Action",
          summary: "Community-driven climate solutions focusing on resilience, equity, and grassroots leadership.",
          description: "At Climate Care Network (CCN), we commitment to climate action rooted in community resilience, equity, and grassroots leadership. We work to raise awareness, build capacity, and implement practical solutions to both mitigate and adapt to the impacts of climate change through awareness campaigns, build community capacity and implement practical solutions. Our interventions span from conducting school- and community-level awareness campaigns, local tree-planting drives, and advocacy at the policy level. We emphasize the meaningful inclusion of indigenous knowledge systems, youth engagement, and women's leadership to create climate solutions that are inclusive, culturally relevant, and sustainable. Our recent co-facilitation of the Indigenous Peoples Health Screening & Awareness Camp in Ichhyakamana and Benighat Rorang demonstrates our cross-sectoral approach to bridge health, climate, and indigenous knowledge to empower marginalized communities in climate-vulnerable regions."
        },
        {
          icon: FaLightbulb,
          title: "Education",
          summary: "Empowering communities through climate literacy and environmental education programs.",
          description: "We believe that education from primary level is sustained environmental transformation. CCN actively engages schoolchildren, educators, and youth in climate literacy and environmental education through experiential learning. Our programs involve workshops, interactive storytelling, climate-focused competitions (speech, art, and debate), and capacity-building using the Reflect model. We work closely with schools and local institutions to promote climate knowledge as a part of everyday learning. On World Environment Day 2025, we reached schools in Ramechhap, a climate-vulnerable district, to address plastic pollution and promote safe waste practices. Through these efforts, we empower children and rural community members to become environmental stewards in their families and communities."
        },
        {
          icon: FaLeaf,
          title: "Geo-information & Knowledge Sharing",
          summary: "Leveraging GIS and data visualization to support environmental decision-making.",
          description: "Climate care network comprises young and enthusiastic environment and geoinformation professionals helping to leverage geo-information tools like GIS, remote sensing, and data mapping to visualize environmental challenges and support data-driven decision-making. We promote and support open access to environmental data, produce interactive maps, and host knowledge-sharing platforms to foster collaboration among scientists, planners, and local communities. This helps translate complex environmental data into actionable insight. Additionally we also support organizations with Geo-information analysis and data visualization techniques."
        },
        {
          icon: FaUsers,
          title: "Solid Waste Management",
          summary: "Addressing waste challenges through education, collaboration, and sustainable practices.",
          description: "Building to the climate mitigating efforts, we are committed to address the growing threat of waste to public health and climate resilience, a cross-sectional issue through education, action, and collaboration. We work with municipalities, youth groups, and schools to promote source segregation, composting, recycling, and the reduction of single-use plastics. Our recent awareness campaign in Ramechhap, where children learned about the dangers of plastic burning and its health impacts, reflects our commitment to vulnerable hill communities. By combining behavior change strategies with policy engagement, we aim to support cleaner environments, circular economies, and climate-resilient urban and rural systems."
        }
      ]
    },
    vision: {
      title: "Our Vision for the Future",
      quote: "We envision a just, inclusive, and sustainable world where young people are empowered as catalysts for meaningful change, leading efforts to protect the environment, restore ecosystems, and build climate-resilient communities for generations to come.",
      details: [
        {
          icon: FaGlobeAmericas,
          title: "Global Impact",
          description: "Creating worldwide networks of youth climate leaders and changemakers."
        },
        {
          icon: FaBalanceScale,
          title: "Justice & Equality",
          description: "Ensuring equitable access to climate solutions for all communities."
        },
        {
          icon: FaSeedling,
          title: "Sustainable Future",
          description: "Building resilient ecosystems that support both people and planet."
        }
      ]
    },
    approach: {
      title: "Our Strategic Approach",
      quote: "Through grassroots engagement, ecosystem restoration, climate education, and advocacy for just and green livelihoods, we work systematically toward a future where both people and the planet thrive together in harmony.",
      details: [
        {
          icon: FaUsers,
          title: "Grassroots Engagement",
          description: "Working directly with local communities to build from the ground up."
        },
        {
          icon: FaLeaf,
          title: "Ecosystem Restoration",
          description: "Hands-on environmental projects that restore and protect natural habitats."
        },
        {
          icon: FaLightbulb,
          title: "Climate Education",
          description: "Comprehensive learning programs that build climate literacy and action."
        }
      ]
    },
    values: {
      title: "Our Core Values",
      quote: "At the heart of our mission are the values that guide every decision we make: sustainability, inclusivity, innovation, and youth leadership. These principles shape how we approach challenges and create lasting positive impact.",
      details: [
        {
          icon: FaHeart,
          title: "Compassion",
          description: "We lead with empathy and care for both people and the environment."
        },
        {
          icon: FaHandsHelping,
          title: "Collaboration",
          description: "Building partnerships that amplify our collective impact and reach."
        },
        {
          icon: FaRocket,
          title: "Innovation",
          description: "Embracing creative solutions and cutting-edge approaches to climate action."
        }
      ]
    }
  };

  const handleShareOurValues = () => {
    router.push('/joinus')
    console.log('Navigate to join us page');
  }

  const toggleThematicExpansion = (index) => {
    setExpandedThematic(expandedThematic === index ? null : index);
  };

  const renderThematicDetails = () => {
    return (
      <div className="space-y-4">
        {content[activeTab].details.map((detail, index) => {
          const IconComponent = detail.icon;
          const isExpanded = expandedThematic === index;
          
          return (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300"
            >
              {/* Collapsed Header */}
              <div
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleThematicExpansion(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      <IconComponent className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {detail.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {detail.summary}
                      </p>
                    </div>
                  </div>
                  <div className="text-blue-600 transition-transform duration-200" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <FaChevronDown className="text-lg" />
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              <div className={`transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="px-6 pb-6 border-t border-gray-200">
                  <div className="pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {detail.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderRegularDetails = () => {
    return (
      <div className="grid md:grid-cols-3 gap-8">
        {content[activeTab].details.map((detail, index) => {
          const IconComponent = detail.icon;
          return (
            <div
              key={index}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                  activeTab === 'vision' ? 'bg-green-100 text-green-600' :
                  activeTab === 'approach' ? 'bg-purple-100 text-purple-600' :
                  'bg-pink-100 text-pink-600'
                } group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {detail.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {detail.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-green-50 min-h-screen" id='down-here'>
      <div className="max-w-6xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="bg-white rounded-full shadow-lg p-2 flex flex-wrap">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setExpandedThematic(null); // Reset expanded state when switching tabs
                  }}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 m-1 ${
                    activeTab === tab.id
                      ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-blue-500 hover:bg-blue-50'
                  }`}
                >
                  <IconComponent className="text-lg" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Active Tab Indicator */}
            <div className="flex items-center justify-center mb-8">
              <div className={`w-full h-1 bg-gradient-to-r rounded-full ${
                activeTab === 'themetic' ? 'from-blue-400 to-blue-600' :
                activeTab === 'vision' ? 'from-green-400 to-green-600' :
                activeTab === 'approach' ? 'from-purple-400 to-purple-600' :
                'from-pink-400 to-pink-600'
              }`}></div>
            </div>

            {/* Content Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
              {content[activeTab].title}
            </h2>

            {/* Quote Section */}
            <div className="relative mb-12">
              <div className="absolute top-0 left-0 text-6xl text-gray-300 font-serif">"</div>
              <div className="absolute bottom-0 right-0 text-6xl text-gray-300 font-serif">"</div>
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed text-center px-8 py-4 italic">
                {content[activeTab].quote}
              </blockquote>
            </div>

            {/* Details Section - Conditional Rendering */}
            {activeTab === 'themetic' ? renderThematicDetails() : renderRegularDetails()}

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <button 
                onClick={handleShareOurValues} 
                className={`px-8 py-4 rounded-full font-bold text-white transition-all duration-300 transform hover:scale-105 shadow-lg ${
                  activeTab === 'themetic' ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' :
                  activeTab === 'vision' ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700' :
                  activeTab === 'approach' ? 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700' :
                  'bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700'
                }`}
              >
                {activeTab === 'themetic' ? 'Join Our Mission' :
                 activeTab === 'vision' ? 'Be Part of the Vision' :
                 activeTab === 'approach' ? 'Learn Our Methods' :
                 'Share Our Values'}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="mt-12 flex justify-center space-x-6 opacity-30">
          <FaLeaf className="text-green-500 text-2xl animate-pulse" />
          <FaUsers className="text-blue-500 text-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          <FaGlobeAmericas className="text-purple-500 text-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          <FaHeart className="text-pink-500 text-2xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>
      </div>
    </section>
  );
};

export default TabbedSections;