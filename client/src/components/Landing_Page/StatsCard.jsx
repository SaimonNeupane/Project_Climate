import React from 'react';

const StatsComponent = () => {
  const stats = [
    {
      number: "1000+",
      description: "Young minds empowered"
    },
    {
      number: "50+", 
      description: " sessions enabled"
    },
    // {
    //   number: "750+",
    //   description: "Solutions for global challenges launched"
    // },
    // {
    {
      number: "30+",
      description: "Mentors and experts involved"
    }
  ];

  return (
    <div className="w-full">
      {/* Green Stats Section - Straight Rectangle */}
      <div className="bg-gradient-to-br from-green-600 to-green-800 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-green-100 font-medium leading-relaxed">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;