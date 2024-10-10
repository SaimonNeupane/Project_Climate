import React from 'react';
import "../styles/global.css";

const Page = () => {
  return (
    <main style={{ paddingLeft: '10%',
      paddingRight:'10%',
      paddingTop:'3%'
     }}>
      <div className="flex flex-col-reverse lg:flex-row gap-4">
        {/* Text Container */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <span className="Hollow">C</span>
          <span className="Hollow">A</span>
          <span className="Hollow">R</span>
          <span className="Hollow">I</span>
          <span className="Hollow">N</span>
          <span className="Hollow">G</span><br />
          <span className="Hollow" style={{
            WebkitTextStroke: '2px black',
            color: 'transparent',
          }}>
            CLIMATE
          </span><br />
          <span className="smallHollow">Curing PLANET</span>
        </div>


        <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
          <img 
            src="/images/Logo.png" 
            className="py-10 w-full ] h-auto mx-auto lg:mx-0" 
            alt="Logo" 
            style={{ display: 'block' }} 
          />
        </div>
      </div>
      <div className="text-center lg:text-left w-full lg:w-1/2" >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit aspernatur soluta sit debitis, minima ex, at quos velit, commodi ratione molestiae in deserunt quis aliquid maxime est architecto. Voluptatibus, ipsam!
      </div>
      <div className="text-center py-[50px] lg:py-[25px] font-bold question"  >
        <span>WHAT DOES CCN DO?</span>
      </div>
    </main>
  );
}

export default Page;
