"use client";
import React, { useState } from "react";
import {
  Mail,
  Briefcase,
  ArrowRight,
  Leaf,
  Globe,
  Heart,
  TreePine,
  Recycle,
  Wind,
  ChevronRight,
  Play,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import axios from "axios";
import { volunteerAPI ,memberAPI} from "@/utils/api";

export default function GetInvolved() {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [volunteerData, setVolunteerData] = useState({
    name: "",
    email: "",
    age: "",
    inspiration: "",
  });
  const [email, setemail] = useState("");

  const handleVolunteerSubmit = async (e) => {
  e.preventDefault();
  console.log(volunteerData);

  const responsePromise = volunteerAPI(volunteerData);
  
  toast.promise(responsePromise, {
    loading: 'Sending request...',
    success: 'Successfully submitted the details!',
    error: 'Submission failed. Please try again.'
  });

  try {
    await responsePromise;
    setVolunteerData({ name: "", email: "", age: "", inspiration: "" });
    setIsModalOpen(false);
  } catch (error) {
    console.error("Volunteer form submission failed:", error);
  }
};


  const handleMemberSubmit = async(e) => {
    e.preventDefault();
    console.log(email)
    const response = memberAPI(email)
    toast.promise(response,{
      loading:"sending request",
      success:"We will try to reach you as soon as Possible!!",
      error:"Something went wrong!"
    })
    setemail("");
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pt-[100px]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 py-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 animate-float">
            <Leaf className="w-12 h-12 text-green-200" />
          </div>
          <div className="absolute top-32 right-20 animate-pulse">
            <TreePine className="w-16 h-16 text-emerald-200" />
          </div>
          <div className="absolute bottom-20 left-1/4 animate-bounce">
            <Globe className="w-10 h-10 text-teal-200" />
          </div>
          <div className="absolute bottom-32 right-1/3 animate-float">
            <Wind className="w-14 h-14 text-green-300" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <Recycle className="w-5 h-5 text-white mr-2 animate-spin" />
            <span className="text-white font-semibold">Join the Movement</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            GET <span className="text-yellow-300">INVOLVED</span>
          </h1>

          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-12 leading-relaxed">
            Together, we can create a sustainable future for our planet.
            Discover how you can make a meaningful impact through our
            community-driven environmental initiatives.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => router.push("/aboutus")}
              className="group bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Start Your Journey
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-300">
              <Play className="inline-block mr-2 w-5 h-5" />
              Watch Our Story
            </button>
          </div>
        </div>
      </div>

      {/* Main Sections */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Stay Informed Section */}
          <div
            className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100 h-full"
            onMouseEnter={() => setHoveredCard("informed")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-2xl mr-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Stay Informed
                </h2>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Get the latest updates on environmental initiatives, climate
                action, and sustainability practices delivered to your inbox.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">
                    Weekly Environmental Newsletter
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-700">
                    Exclusive Research Reports
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Event Invitations</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full p-3 rounded-lg border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                  />
                  <button className="w-full mt-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 rounded-lg hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Subscribe Now
                    <ChevronRight className="inline-block ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Support CCN Section */}
          <div
            className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-emerald-100 h-full"
            onMouseEnter={() => setHoveredCard("support")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-4 rounded-2xl mr-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Support CCN
                </h2>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Your support helps us drive meaningful environmental change and
                build a sustainable future for generations to come.
              </p>

              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold py-4 rounded-lg hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Heart className="inline-block mr-2 w-5 h-5" />
                  Donate Now
                </button>
              </div>
            </div>
          </div>

          {/* Work With Us Section */}
          <div
            className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-teal-100 h-full"
            onMouseEnter={() => setHoveredCard("work")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-teal-500 to-blue-600 p-4 rounded-2xl mr-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Work With Us
                </h2>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Join our team of passionate environmental advocates and help
                shape policies that protect our planet's future.
              </p>

              <div className="space-y-4 mb-8 flex-grow">
                <div
                  className="p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl hover:shadow-md transition-all duration-300 cursor-pointer"
                  onClick={() => {
                    setModalType("volunteer");
                    setIsModalOpen(true);
                  }}
                >
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold text-gray-800">Volunteer</h4>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div
                  className="p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl hover:shadow-md transition-all duration-300 cursor-pointer"
                  onClick={() => {
                    setModalType("member");
                    setIsModalOpen(true);
                  }}
                >
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold text-gray-800">Member</h4>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>

            {modalType === "volunteer" ? (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Volunteer Application
                </h3>
                <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 text-lg rounded-lg border border-teal-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                      value={volunteerData.name}
                      onChange={(e) =>
                        setVolunteerData({
                          ...volunteerData,
                          name: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full p-3 text-lg rounded-lg border border-teal-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                      value={volunteerData.email}
                      onChange={(e) =>
                        setVolunteerData({
                          ...volunteerData,
                          email: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Age
                    </label>
                    <input
                      type="number"
                      className="w-full p-3 text-lg rounded-lg border border-teal-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                      value={volunteerData.age}
                      onChange={(e) =>
                        setVolunteerData({
                          ...volunteerData,
                          age: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Inspiration (Optional)
                    </label>
                    <textarea
                      className="w-full p-3 text-lg rounded-lg border border-teal-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                      rows="4"
                      value={volunteerData.inspiration}
                      onChange={(e) =>
                        setVolunteerData({
                          ...volunteerData,
                          inspiration: e.target.value,
                        })
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 text-lg rounded-lg hover:from-teal-600 hover:to-blue-700 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg mt-4"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Become a Member
                </h3>
                <form onSubmit={handleMemberSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full p-3 text-lg rounded-lg border border-teal-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 text-lg rounded-lg hover:from-teal-600 hover:to-blue-700 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg mt-4"
                  >
                    Join as Member
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <Globe className="w-5 h-5 text-white mr-2 animate-pulse" />
            <span className="text-white font-semibold">Time to Act</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Make a <span className="text-yellow-300">Difference?</span>
          </h2>

          <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto">
            Every action counts. Whether you stay informed, support our mission,
            or join our team, you're part of the solution.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}