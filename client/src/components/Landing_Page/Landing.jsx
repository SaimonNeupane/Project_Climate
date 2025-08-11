'use client'
import React, { useState, useEffect } from 'react';
import { ArrowRight, Leaf, Wind, Globe, Sun, Cloud, Link } from 'lucide-react';
import { useRouter } from 'next/navigation';

const EnvironmentalWebsite = ({ 
  backgroundImage = 'images/frontPage.jpg', 
  backgroundOverlay = true, 
  overlayOpacity = 0.7,
  overlayColor = 'bg-black'
}) => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const FadeInElement = ({ children, delay = 0, className = "" }) => (
    <div 
      className={`transform transition-all duration-1000 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );

  const handleClick = () => {
    router.push('/joinus')
  }

  // Dynamic background styles
  const backgroundStyles = backgroundImage 
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }
    : {};

  return (
    <div 
      className={`min-h-screen relative overflow-hidden ${
        backgroundImage ? '' : 'bg-gradient-to-br from-gray-50 to-blue-50'
      }`}
      style={backgroundStyles}
    >
      {/* Background overlay when using background image */}
      {backgroundImage && backgroundOverlay && (
        <div 
          className={`absolute inset-0 ${overlayColor}`}
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Main content container */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 lg:px-12 py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
            
            {/* Left Content */}
            <div className="space-y-8 lg:pr-8">
              <FadeInElement delay={200}>
                <h1 className="space-y-2">
                  <div className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ${
                    backgroundImage ? 'text-white' : 'text-emerald-800'
                  }`}>
                    Take action
                  </div>
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text text-transparent leading-tight">
                    now.
                  </div>
                </h1>
              </FadeInElement>
              
              <FadeInElement delay={400}>
                <p className={`text-lg leading-relaxed max-w-lg ${
                  backgroundImage ? 'text-gray-200' : 'text-gray-500'
                }`}>
                  Climate change affects every community, but together we can change the story. Act now for a cleaner, fairer, and more resilient future.
                </p>
              </FadeInElement>
              
              <FadeInElement delay={600}>
                <button 
                  onClick={() => handleClick()} 
                  className="group bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2"
                >
                  Join Us
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </FadeInElement>
            </div>

            {/* Right Illustration - Earth Image Container */}
            <FadeInElement delay={800} className="relative h-screen flex items-center justify-center">
              <div className="relative">
                <div 
                  className="w-90 h-90 lg:w-[500px] lg:h-[500px] rounded-full bg-cover bg-center bg-no-repeat animate-slow-spin shadow-2xl"
                  style={{
                    backgroundImage: `url('images/Earth.png')`,
                    // boxShadow: '0 30px 60px rgba(0,0,0,0.3), inset 0 0 50px rgba(255,255,255,0.1)',
                    filter: 'brightness(1.1) contrast(1.1) saturate(1.2)'
                  }}
                />
              </div>
            </FadeInElement>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .clip-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-slow-spin {
          animation: slowSpin 30s linear infinite;
        }
        .animate-orbit {
          animation: orbit 15s linear infinite;
        }
        .animate-orbit-reverse {
          animation: orbitReverse 20s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes slowSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbitReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .bg-blue-350 { background-color: #7dd3fc; }
        .bg-blue-550 { background-color: #0ea5e9; }
      `}</style>
    </div>
  );
};

export default EnvironmentalWebsite;