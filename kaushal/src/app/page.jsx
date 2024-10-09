import Image from "next/image";
import '../styles/global.css'

export default function Home() {
  return (
    <main>
      <div className="xl:px-20 lg:px-10 md:px-5 sm:px-2">
        <div className="flex flex-col lg:flex-row gap-10 justify-between">
          <div className="text-black px-5 py-10">
            <span className="Hollow">C</span>
            <span className="Hollow">A</span>
            <span className="Hollow">R</span>
            <span className="Hollow">I</span>
            <span className="Hollow">N</span>
            <span className="Hollow">G</span>
            <span className="Hollow"> </span>
            <span className="Hollow">CLIMATE</span><br />
            <span className="Hollow">Curing</span>
            <span className="smallHollow"> PLANET</span><br />
            <span className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, nesciunt? Cupiditate eveniet aperiam earum, temporibus rerum, perspiciatis itaque sequi rem sunt repudiandae, eum labore quidem soluta modi in expedita assumenda quod! Placeat labore quae, exercitationem fuga possimus commodi ea quidem?</span>
          </div>
          <div className="text-black hidden xl:block lg:block" style={{
            paddingTop: '0px'
          }}>
            <img src="/images/Logo.png" alt="Logo" className="w-full max-w-xs" />
          </div>
        </div>
      </div>
      <div className="xl:px-20 lg:px-10 md:px-5 sm:px-2 flex justify-center items-center flex-col">
        <span className="py-10 text-4xl md:text-5xl" style={{
          paddingLeft: '10px',
          paddingRight: '10px',
        }}>What does Climate Care Network do?</span><br />
        <span className="text-justify" style={{
          paddingLeft: '10px',
          paddingRight: '10px',
        }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi tempore quidem est modi, dicta porro quis voluptates adipisci facere alias. Aliquid nobis animi perspiciatis, et asperiores iste repellat odit distinctio vel accusamus laboriosam blanditiis numquam, corporis sed reiciendis tenetur ipsum dolore quasi culpa debitis vero libero suscipit? Recusandae facere at officiis doloribus reiciendis, et, architecto tempora consectetur id possimus hic fugiat tempore veritatis quisquam nemo sequi eum veniam repudiandae corporis totam provident ducimus voluptatibus. Dolores placeat eligendi beatae assumenda illo. Quis aspernatur facere beatae laboriosam id ipsa quo aliquam minima reprehenderit optio. Fugiat nostrum, tempora aliquid nulla quos consequuntur eum.</span>
      </div>
    </main>
  );
}
