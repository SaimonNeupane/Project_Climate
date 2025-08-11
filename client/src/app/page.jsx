
"use client";
import EnvironmentalWebsite from '@/components/Landing_Page/Landing'
import EnvironmentalFacts from '@/components/Landing_Page/FrontPageTheme';
import React from 'react'
import NewsSection from '@/components/Landing_Page/NewsSection';
import Footer from '@/components/Footer';
import ImpactHeroSection from '@/components/Landing_Page/Intro';
import StatsComponent from '@/components/Landing_Page/StatsCard';


function page() {
  return (
    <>
     <EnvironmentalWebsite/>
     <ImpactHeroSection/>
    <EnvironmentalFacts/>
    <StatsComponent/>
    <NewsSection/>
    <Footer/>
    

   </>
  )
}

export default page