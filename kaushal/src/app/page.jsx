import React from 'react'
import "../styles/global.css"
const page = () => {
  return (
    <main className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[400px]">
      <div className=" flex flex-col-reverse lg:flex-row  gap-[4px]  ">
        <div className="px:0  text-center lg:text-left" >
          <span className="Hollow">C</span>
          <span className="Hollow">A</span>
          <span className="Hollow">R</span>
          <span className="Hollow">I</span>
          <span className="Hollow">N</span>
          <span className="Hollow">G</span><br />

          <span className="Hollow " style={{
            WebkitTextStroke: '2px black',
            color: 'transparent',
          }}
          >CLIMATE</span><br />
          <span className="smallHollow">Curing PLANET</span>


        </div>
        <div className="justify-center text-center" >
          <img src="/images/Logo.png" className="py-10  w-full h-auto" alt="" />
        </div>
        <div></div>
      </div>
    </main >
  )
}

export default page