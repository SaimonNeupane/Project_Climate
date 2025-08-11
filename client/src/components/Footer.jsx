'use client'
import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTelegram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const date = new Date().getFullYear();
  
  const generalLinks = [
    { name: 'Home', path: '/' },
    { name: 'Contact Us', path: '/contacts' }
  ];
  
  const aboutLinks = [
    { name: 'Why Us', path: '/why-us' },
    { name: 'About', path: '/aboutus' },
    { name: 'CSR', path: '/csr' }
  ];
  
  const resourceLinks = [
    { name: 'Company Policy', path: '/policy' },
    { name: 'Sustainable Tourism Policy Guidelines', path: '/sustainability' },
    { name: 'Climate Blog', path: '/blogs' },
    { name: 'FAQs', path: '/faqs' }
  ];

  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', { firstName, lastName, email });
    // Handle newsletter signup logic here
  };

  return (
    <footer className="relative bg-gradient-to-b from-green-50 to-green-100 overflow-hidden">
      {/* Mountain/Forest Background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
        <svg viewBox="0 0 1200 120" className="w-full h-full">
          {/* Mountains */}
          <path d="M0,120 L200,40 L400,80 L600,20 L800,60 L1000,30 L1200,70 L1200,120 Z" fill="#22c55e" opacity="0.6"/>
          <path d="M0,120 L150,60 L350,100 L550,40 L750,80 L950,50 L1200,90 L1200,120 Z" fill="#16a34a" opacity="0.8"/>
          
          {/* Trees */}
          <circle cx="100" cy="70" r="15" fill="#15803d"/>
          <circle cx="110" cy="65" r="12" fill="#16a34a"/>
          <circle cx="90" cy="65" r="10" fill="#16a34a"/>
          <rect x="97" y="80" width="6" height="15" fill="#92400e"/>
          
          <circle cx="300" cy="90" r="18" fill="#15803d"/>
          <circle cx="315" cy="85" r="15" fill="#16a34a"/>
          <circle cx="285" cy="85" r="12" fill="#16a34a"/>
          <rect x="297" y="105" width="6" height="15" fill="#92400e"/>
          
          <circle cx="500" cy="50" r="20" fill="#15803d"/>
          <circle cx="520" cy="45" r="16" fill="#16a34a"/>
          <circle cx="480" cy="45" r="14" fill="#16a34a"/>
          <rect x="497" y="65" width="6" height="18" fill="#92400e"/>
          
          <circle cx="700" cy="85" r="16" fill="#15803d"/>
          <circle cx="715" cy="80" r="13" fill="#16a34a"/>
          <circle cx="685" cy="80" r="11" fill="#16a34a"/>
          <rect x="697" y="100" width="6" height="15" fill="#92400e"/>
          
          <circle cx="900" cy="65" r="22" fill="#15803d"/>
          <circle cx="925" cy="60" r="18" fill="#16a34a"/>
          <circle cx="875" cy="60" r="15" fill="#16a34a"/>
          <rect x="897" y="85" width="6" height="20" fill="#92400e"/>
          
          <circle cx="1100" cy="95" r="14" fill="#15803d"/>
          <circle cx="1112" cy="90" r="11" fill="#16a34a"/>
          <circle cx="1088" cy="90" r="9" fill="#16a34a"/>
          <rect x="1097" y="108" width="6" height="12" fill="#92400e"/>
        </svg>
      </div>
      
      {/* Floating leaves */}
      <div className="absolute top-10 left-10 opacity-30">
        <svg width="30" height="30" viewBox="0 0 30 30">
          <path d="M15,2 Q25,8 15,28 Q5,8 15,2" fill="#22c55e" opacity="0.7"/>
        </svg>
      </div>
      
      <div className="absolute top-20 right-20 opacity-25">
        <svg width="25" height="25" viewBox="0 0 30 30">
          <path d="M15,2 Q25,8 15,28 Q5,8 15,2" fill="#16a34a" opacity="0.8"/>
        </svg>
      </div>
      
      <div className="absolute top-32 left-1/3 opacity-20">
        <svg width="35" height="35" viewBox="0 0 30 30">
          <path d="M15,2 Q25,8 15,28 Q5,8 15,2" fill="#15803d" opacity="0.6"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          
          {/* Logo and Contact Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img src="/images/Logo.png" alt="Climate Care Network" className="h-16 mb-4" />
              <div className="space-y-1 text-gray-700">
                <p>PO Box: 10987</p>
                <p>Biratnagar, Nepal</p>
                <p>+977-01-4700563, +977-01-4700066</p>
                <p>Whatsapp: +977 9851167070</p>
                <a 
                  href="mailto:climatecarenetwork@gmail.com" 
                  className="text-green-600 hover:text-green-800 transition-colors"
                >
                  climatecarenetwork@gmail.com
                </a>
              </div>
            </div>
            
            {/* Awards/Recognition */}
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 inline-block">
              <div className="text-center">
                <div className="text-xs text-gray-600 mb-1">Climate Action</div>
                <div className="text-sm font-semibold text-gray-800">Excellence Awards</div>
                <div className="w-12 h-12 mx-auto mt-2 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">2024</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* General Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">General</h3>
            <ul className="space-y-2">
              {generalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.path} 
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* About Us Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">About Us</h3>
            <ul className="space-y-2">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.path} 
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Stay Updated</h3>
            <form onSubmit={handleNewsletterSignup} className="space-y-3">
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-3 py-2 bg-white/70 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-3 py-2 bg-white/70 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-white/70 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors font-medium"
              >
                SIGN UP FOR OUR NEWSLETTER
              </button>
            </form>
          </div>
        </div>
        
        {/* Resources Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Resources</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {resourceLinks.map((link, index) => (
              <a 
                key={index}
                href={link.path} 
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        
        {/* Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-green-200">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-700">
              Copyright © {date} Climate Care Network. All Rights Reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-green-600 hover:text-green-800 transition-colors p-2 bg-white/70 rounded-full">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-green-600 hover:text-green-800 transition-colors p-2 bg-white/70 rounded-full">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-green-600 hover:text-green-800 transition-colors p-2 bg-white/70 rounded-full">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="text-green-600 hover:text-green-800 transition-colors p-2 bg-white/70 rounded-full">
              <FaTelegram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;