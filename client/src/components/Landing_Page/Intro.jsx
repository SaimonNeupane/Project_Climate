'use client'
import React from 'react';
import { Check } from 'lucide-react';

const ImpactHeroSection = () => {
  const features = [
    {
      title: "Get rid of limiting beliefs.",
      description: "Learn to think like the world's boldest climate innovators."
    },
    {
      title: "Step out of your comfort zone.",
      description: "Build sustainable habits that help you grow, even when it's challenging."
    },
    {
      title: "Master 10X thinking.",
      description: "Replace small goals with bold environmental vision."
    },
    {
      title: "Gain 100% Accountability.",
      description: "4 climate leaders + 1 mentor per group—your support system for life."
    }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* White section above */}
      <div className="bg-white h-32 lg:h-48"></div>

      {/* Main curved background */}
      <div className="relative bg-gradient-to-br from-slate-900 via-green-900 to-slate-800 text-white">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/50 via-green-800/30 to-blue-900/50"></div>
        
        {/* Curved top section */}
        <div className="absolute top-0 left-0 right-0">
          <svg 
            viewBox="0 0 1440 320" 
            className="w-full h-20 md:h-32 lg:h-40 fill-white"
            preserveAspectRatio="none"
          >
            <path d="M0,224L48,208C96,192,192,160,288,170.7C384,181,480,235,576,250.7C672,267,768,245,864,234.7C960,224,1056,224,1152,234.7C1248,245,1344,267,1392,277.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 lg:py-32">
          {/* Main Heading */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
             CLIMATE CARE NETWORK
            </h1>
            
            <div className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              <span className="text-white font-medium">Climate Action Mindset</span> isn't a course. It's a{' '}
              <span className="text-white font-bold">transformational journey</span> where you'll:
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-6 lg:space-y-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 lg:space-x-6">
                {/* Check Icon */}
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 lg:w-7 lg:h-7 bg-white rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 lg:w-5 lg:h-5 text-slate-800 font-bold stroke-2" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-1">
                    <span className="text-white">{feature.title}</span>
                  </h3>
                  <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Curved bottom section - matching the original */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg 
            viewBox="0 0 1440 320" 
            className="w-full h-20 md:h-32 lg:h-40 fill-white"
            preserveAspectRatio="none"
          >
            <path d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,149.3C960,160,1056,160,1152,149.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* White section below */}
      <div className="bg-white h-32 lg:h-48"></div>
    </section>
  );
};

export default ImpactHeroSection;