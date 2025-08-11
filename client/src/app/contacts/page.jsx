'use client'
import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, Leaf, Globe, Recycle } from 'lucide-react';
import Footer from '@/components/Footer';
import { messageAPI } from '@/utils/api';
import { toast } from 'sonner';

const EnvironmentalContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    inspiration: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

   const handleMessageSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const responsePromise = messageAPI(formData);

    toast.promise(responsePromise, {
      loading: "Sending request...",
      success: "Successfully submitted the details!",
      error: "Submission failed. Please try again.",
    });

    try {
      await responsePromise;
      setVolunteerData({ name: "", email: "", age: "", inspiration: "" });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Volunteer form submission failed:", error);
    }
  };

  return (
    <><main className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-emerald-300/20 rounded-full blur-lg animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-teal-200/25 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 px-4 py-16 lg:py-24 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-6 shadow-lg">
            <Globe className="w-10 h-10 text-white animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join us in creating a sustainable future. Whether you have questions, ideas, or want to collaborate on environmental initiatives, we'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              <div className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-green-100">
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Visit Our Green Office</h3>
                    <p className="text-gray-600 text-lg">Tokha-11,Kathmandu,Nepal</p>
             
                  </div>
                </div>
              </div>

              <div className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-green-100">
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-teal-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Call Us</h3>
                    <p className="text-gray-600 text-lg">+977-9851042306,+977-9746885199</p>
                   
                  </div>
                </div>
              </div>

              <div className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-green-100">
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Email Us</h3>
                    <p className="text-gray-600 text-lg">climatecarenetwork@gmail.com</p>
                    <p className="text-gray-600">We respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
           
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-2xl border border-green-100">
            <div className="flex items-center space-x-4 mb-8">
              <MessageCircle className="w-8 h-8 text-green-600" />
              <h2 className="text-3xl font-bold text-gray-800">Send us a Message</h2>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 text-lg border-2 border-green-200 rounded-2xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-300 bg-white/70"
                    placeholder="Your Name"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 text-lg border-2 border-green-200 rounded-2xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-300 bg-white/70"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 text-lg border-2 border-green-200 rounded-2xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-300 bg-white/70"
                  placeholder="age"
                />
              </div>

              <div className="relative">
                <textarea
                  name="inspiration"
                  value={formData.inspiration}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-4 text-lg border-2 border-green-200 rounded-2xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-300 resize-none bg-white/70"
                  placeholder="Tell us about your environmental concerns or ideas..."
                ></textarea>
              </div>

              <button
                onClick={handleMessageSubmit}
                disabled={isSubmitting}
                className={`w-full py-4 px-8 text-lg font-bold text-white rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-3 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Recycle className="w-6 h-6 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-green-700 text-lg font-semibold">
            <Leaf className="w-5 h-5" />
            <span>Every message plants a seed for change</span>
            <Leaf className="w-5 h-5" />
          </div>
        </div>
      </div>
    </main>
     <Footer/></>
   
  );
};

export default EnvironmentalContact;