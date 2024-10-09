import Image from "next/image";
import '../styles/global.css'

export default function Home() {
  return (
    <main>
      <div className="xl:px-20 " >
        <div className="flex  gap-10 justify-between">
          <div className="text-black" style={{
            paddingLeft:'50px',
            paddingTop:"50px",
            width:'900px'
          }}  >
            <span className="Hollow" >CARING CLIMATE</span><br />
            <span className="smallHollow">Curing PLANET</span><br />
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, nesciunt? Cupiditate eveniet aperiam earum, temporibus rerum, perspiciatis itaque sequi rem sunt repudiandae, eum labore quidem soluta modi in expedita assumenda quod! Placeat labore quae, exercitationem fuga possimus commodi ea quidem?</span>

          </div>
          <div className="text-black"style={{
            paddingRight:'50px',
            paddingTop:'0px'
           
          }} >
            <img src="/images/Logo.png" alt="Logo" />
          </div>
          
        </div>
      </div>
    </main>
  );
}
