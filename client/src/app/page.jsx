
"use client";
import EnvironmentalWebsite from '@/components/Landing_Page/Landing'
import EnvironmentalFacts from '@/components/Landing_Page/FrontPageTheme';
import React from 'react'
import NewsSection from '@/components/Landing_Page/NewsSection';
import Footer from '@/components/Footer';
import ImpactHeroSection from '@/components/Landing_Page/Intro';


function page() {
  return (
    <>
     <EnvironmentalWebsite/>
     <ImpactHeroSection/>
    <EnvironmentalFacts/>
    <NewsSection/>
    <Footer/>
    

   </>
  )
}

export default page