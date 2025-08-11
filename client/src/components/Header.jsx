"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Leaf, Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/aboutus" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blogs" },
    { label: "Contact", href: "/contacts" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-green-100"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={()=>router.push('/')} >
              <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r rounded-full shadow-lg border-2 border-green-500">
                <img src="images/Logo.png" alt="" />
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent hidden sm:block">
                  Climate Care Network
                </h1>
                <h1 className="text-xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent block sm:hidden">
                  CCN
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.slice(0, 5).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <a
                href="/contacts"
                className="bg-gradient-to-r from-green-600 to-emerald-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Contact Us</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={toggleMobileMenu}
        ></div>

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-500 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Menu Header */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold">Climate Care</h2>
                  <p className="text-green-100 text-sm">Network</p>
                </div>
              </div>
              <button
                onClick={toggleMobileMenu}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="p-6 space-y-2">
            {navigationItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={toggleMobileMenu}
                className="flex items-center justify-between p-4 rounded-2xl hover:bg-green-50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-gray-700 font-medium group-hover:text-green-600 transition-colors">
                  {item.label}
                </span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="p-6 border-t border-gray-100 space-y-4">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Get in Touch
            </h3>

            <div className="flex items-center space-x-3 text-gray-600">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Phone className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="font-medium">+1 (555) ECO-CARE</p>
                <p className="text-sm text-gray-500">Call us anytime</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-gray-600">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Mail className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="font-medium">hello@climatecare.org</p>
                <p className="text-sm text-gray-500">Send us a message</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-gray-600">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="font-medium">Green Building, Eco City</p>
                <p className="text-sm text-gray-500">Visit our office</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="p-6">
            <a
              href="/contacts"
              onClick={toggleMobileMenu}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-700 text-white py-4 px-6 rounded-2xl font-semibold shadow-lg flex items-center justify-center space-x-2 hover:shadow-xl transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Us Today</span>
            </a>
          </div>

          {/* Footer */}
          <div className="p-6 pt-0 text-center">
            <p className="text-sm text-gray-500">
              Building a sustainable future together
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
