
'use client'
import React, { useState, useEffect } from 'react';
import { ArrowRight, Leaf, Wind, Globe, Sun, Cloud, Link } from 'lucide-react';
import { useRouter } from 'next/navigation';


const EnvironmentalWebsite = () => {
  const router=useRouter();


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
  const handleClick=()=>{
    router.push('/joinus')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8">
            <FadeInElement delay={200}>
              <h1 className="space-y-2">
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-emerald-800 leading-tight">
                  Take action
                </div>
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text text-transparent leading-tight">
                  now.
                </div>
              </h1>
            </FadeInElement>
            
            <FadeInElement delay={400}>
              <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
                Internet contributes to 3.7% of global carbon emissions, more than aviation. Audit your website for a greener internet.
              </p>
            </FadeInElement>
            
            <FadeInElement delay={600}>
              <button onClick={()=>handleClick()} className="group bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2">
                Join Us
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </FadeInElement>
          </div>

          {/* Right Illustration - Low-Poly 3D Earth */}
          <FadeInElement delay={800} className="relative h-screen flex items-center justify-center">
            <div className="relative w-full max-w-2xl h-full flex items-center justify-center">
              
              {/* Main Earth Sphere */}
              <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px]">
                
                {/* Base sphere with shadow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-2xl transform rotate-12"
                     style={{ 
                       boxShadow: '0 30px 60px rgba(0,0,0,0.2), inset 0 0 50px rgba(255,255,255,0.1)' 
                     }} />
                
                {/* Ocean Polygonal Facets */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  {/* Large ocean triangles */}
                  <div className="absolute top-8 left-12 w-32 h-24 bg-blue-500 transform rotate-12 clip-triangle opacity-80" />
                  <div className="absolute top-16 right-8 w-28 h-32 bg-blue-400 transform -rotate-6 clip-triangle opacity-70" />
                  <div className="absolute bottom-20 left-8 w-36 h-28 bg-blue-600 transform rotate-45 clip-triangle opacity-85" />
                  <div className="absolute bottom-12 right-16 w-24 h-36 bg-blue-500 transform -rotate-12 clip-triangle opacity-75" />
                  <div className="absolute top-32 left-24 w-20 h-20 bg-blue-300 transform rotate-30 clip-triangle opacity-60" />
                  <div className="absolute center-left w-40 h-32 bg-blue-550 transform rotate-15 clip-triangle opacity-80" 
                       style={{ top: '40%', left: '10%' }} />
                  
                  {/* Medium ocean facets */}
                  <div className="absolute top-24 right-24 w-16 h-20 bg-blue-400 transform rotate-60 clip-triangle opacity-70" />
                  <div className="absolute bottom-32 left-32 w-18 h-24 bg-blue-500 transform -rotate-30 clip-triangle opacity-75" />
                  <div className="absolute top-40 left-40 w-14 h-16 bg-blue-350 transform rotate-75 clip-triangle opacity-65" />
                </div>
                
                {/* Green Landmass Polygonal Facets */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  {/* Large continent triangles */}
                  <div className="absolute top-20 left-20 w-40 h-32 bg-emerald-500 transform rotate-24 clip-triangle opacity-90" />
                  <div className="absolute top-12 right-20 w-28 h-40 bg-green-600 transform -rotate-15 clip-triangle opacity-85" />
                  <div className="absolute bottom-24 right-12 w-32 h-24 bg-emerald-400 transform rotate-36 clip-triangle opacity-80" />
                  <div className="absolute bottom-16 left-24 w-24 h-28 bg-lime-500 transform -rotate-20 clip-triangle opacity-75" />
                  
                  {/* Medium landmass facets */}
                  <div className="absolute top-36 left-36 w-20 h-16 bg-green-500 transform rotate-45 clip-triangle opacity-85" />
                  <div className="absolute top-28 right-32 w-16 h-20 bg-emerald-600 transform -rotate-25 clip-triangle opacity-80" />
                  <div className="absolute bottom-28 right-28 w-18 h-14 bg-lime-600 transform rotate-55 clip-triangle opacity-75" />
                  <div className="absolute center w-24 h-20 bg-green-400 transform rotate-10 clip-triangle opacity-90" 
                       style={{ top: '45%', left: '35%' }} />
                  
                  {/* Small island facets */}
                  <div className="absolute top-44 left-16 w-12 h-10 bg-emerald-500 transform rotate-80 clip-triangle opacity-70" />
                  <div className="absolute bottom-36 left-40 w-10 h-12 bg-lime-500 transform -rotate-40 clip-triangle opacity-75" />
                  <div className="absolute top-32 right-16 w-8 h-14 bg-green-600 transform rotate-65 clip-triangle opacity-80" />
                  <div className="absolute bottom-40 right-36 w-14 h-8 bg-emerald-400 transform -rotate-35 clip-triangle opacity-70" />
                </div>
                
                {/* Highlight facets for 3D effect */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  {/* Light reflections on ocean */}
                  <div className="absolute top-16 left-16 w-20 h-16 bg-blue-300 transform rotate-20 clip-triangle opacity-40" />
                  <div className="absolute top-24 right-40 w-16 h-12 bg-blue-200 transform -rotate-30 clip-triangle opacity-30" />
                  
                  {/* Light reflections on land */}
                  <div className="absolute top-32 left-32 w-16 h-12 bg-lime-300 transform rotate-40 clip-triangle opacity-50" />
                  <div className="absolute bottom-32 right-24 w-12 h-16 bg-emerald-300 transform -rotate-25 clip-triangle opacity-45" />
                </div>
                
                {/* Depth shadows */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute bottom-8 right-8 w-32 h-24 bg-blue-800 transform rotate-15 clip-triangle opacity-30" />
                  <div className="absolute bottom-12 left-32 w-24 h-20 bg-green-800 transform -rotate-20 clip-triangle opacity-25" />
                </div>
                
                {/* Atmospheric glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-blue-900 opacity-20" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-transparent via-transparent to-white opacity-10" />
              </div>
              
              {/* Floating elements around Earth */}
              <div className="absolute top-8 left-8 w-12 h-6 bg-white rounded-full opacity-40 animate-float" />
              <div className="absolute top-16 right-12 w-16 h-8 bg-white rounded-full opacity-30 animate-float-delayed" />
              <div className="absolute bottom-12 left-16 w-10 h-5 bg-white rounded-full opacity-35 animate-float" />
            </div>
          </FadeInElement>
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
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .bg-blue-350 { background-color: #7dd3fc; }
        .bg-blue-550 { background-color: #0ea5e9; }
      `}</style>
    </div>
  );
};

export default EnvironmentalWebsite;