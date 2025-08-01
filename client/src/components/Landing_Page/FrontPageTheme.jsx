'use client'
import React, { useState } from 'react';
import { 
  Trees, 
  Wifi, 
  Sprout, 
  Brain, 
  Globe, 
  Droplets,
  Wind,
  Zap,
  Thermometer,
  Fish,
  Mountain,
  Recycle
} from 'lucide-react';

const EnvironmentalFacts = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const facts = [
    // Row 1
    {
      id: 1,
      icon: <Trees className="w-12 h-12" />,
      title: "Forest Loss Crisis",
      stat: "10 Football Fields",
      subtitle: "Lost Every Minute",
      description: "According to the World Bank, 10 million hectares of forest are lost each year — an area roughly the size of Portugal."
    },
    {
      id: 2,
      icon: <Wifi className="w-12 h-12" />,
      title: "Digital Carbon Footprint",
      stat: "3.7%",
      subtitle: "Global Carbon Emissions",
      description: "Internet contributes to 3.7% of global carbon emissions — more than the entire aviation industry."
    },
    {
      id: 3,
      icon: <Sprout className="w-12 h-12" />,
      title: "Agricultural Land Crisis",
      stat: "50%",
      subtitle: "Already Degraded",
      description: "More than half of the world's topsoil has been lost in the last 150 years, severely affecting global food security."
    },
    {
      id: 4,
      icon: <Brain className="w-12 h-12" />,
      title: "Nature's Brain Boost",
      stat: "Larger Brain Volume",
      subtitle: "From Green Spaces",
      description: "Children raised near green spaces have greater volume in brain regions linked to memory, attention, and emotional regulation."
    },
    // Row 2
      
  
    // Row 3
   
    
    {
      id: 11,
      icon: <Mountain className="w-12 h-12" />,
      title: "Species Extinction Rate",
      stat: "1,000x",
      subtitle: "Natural Rate",
      description: "Current species extinction rates are 1,000 times higher than natural background rates, indicating a biodiversity crisis."
    },
    {
      id: 12,
      icon: <Recycle className="w-12 h-12" />,
      title: "Global Recycling Rate",
      stat: "9%",
      subtitle: "Plastic Recycled",
      description: "Only 9% of all plastic ever produced has been recycled, with most ending up in landfills or the environment."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            🌍 Environmental Facts
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Critical environmental statistics that shape our planet's future. 
            Each fact represents both a challenge and an opportunity for positive change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((fact) => (
            <div
              key={fact.id}
              className={`relative group cursor-pointer transition-all duration-500 transform ${
                hoveredCard === fact.id ? 'scale-105 z-10' : 'hover:scale-102'
              }`}
              onMouseEnter={() => setHoveredCard(fact.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`
                bg-green-50 border border-green-200 hover:bg-green-100
                rounded-2xl p-6 text-gray-800 shadow-sm hover:shadow-lg 
                transition-all duration-500 h-full
                ${hoveredCard === fact.id ? 'shadow-lg ring-2 ring-green-300 bg-green-100' : ''}
              `}>
                <div className="flex flex-col items-center text-center h-full">
                  <div className={`
                    mb-4 p-3 bg-green-200 rounded-full text-green-700
                    transition-all duration-300
                    ${hoveredCard === fact.id ? 'scale-110 rotate-3 bg-green-300' : ''}
                  `}>
                    {fact.icon}
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 leading-tight text-gray-800">
                    {fact.title}
                  </h3>
                  
                  <div className="mb-2">
                    <div className="text-2xl font-bold text-green-600">
                      {fact.stat}
                    </div>
                    <div className="text-sm text-gray-600">
                      {fact.subtitle}
                    </div>
                  </div>
                  
                  <div className={`
                    text-sm text-gray-600 opacity-0 transition-all duration-500 mt-auto
                    ${hoveredCard === fact.id ? 'opacity-100 translate-y-0' : 'translate-y-2'}
                  `}>
                    {fact.description}
                  </div>
                  
                  <div className={`
                    mt-4 w-full h-1 bg-green-200 rounded-full overflow-hidden
                    ${hoveredCard === fact.id ? 'opacity-100' : 'opacity-0'}
                    transition-opacity duration-500
                  `}>
                    <div className="h-full bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-green-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Take Action Today
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Every small action contributes to a larger environmental impact. 
              Start with one change and build momentum for a sustainable future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-colors duration-300 shadow-sm hover:shadow-md">
                Learn More
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-colors duration-300 shadow-sm hover:shadow-md">
                Get Involved
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-colors duration-300 shadow-sm hover:shadow-md">
                Share Facts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalFacts;