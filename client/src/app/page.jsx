
"use client";
import EnvironmentalWebsite from '@/components/Landing_Page/Landing'
import EnvironmentalFacts from '@/components/Landing_Page/FrontPageTheme';
import React from 'react'
import NewsSection from '@/components/Landing_Page/NewsSection';
import Footer from '@/components/Footer';


function page() {
  return (
    <>
     <EnvironmentalWebsite/>
    <EnvironmentalFacts/>
    <NewsSection/>
    <Footer/>
    

   </>
  )
}

export default page