import Header from "@/template/nav"

export default function Home() {
  return (
    <main className="w-screen">
      {/* START NAVBAR */}
      
      <Header></Header>
      {/* END NAVBAR */}
      <div className="home">

        <div className="logoAITA"></div> 

        <h1 className="text mt-10 mb-28 text-center font-bold text-4xl">
          INDONESIA <span className="brown">TRADING</span> COMPANY
        </h1>

        {/* header section */}

        <div className="flex-col ml-7">
          <div className="dc-logo rounded-lg mt-20 ml-10 static">
            <p className="text text-3xl font-semibold mt-2 ml-32 px-7 absolute inline-block">Our Project</p>
            <p className="text brown text-3xl font-semibold mt-12 ml-32 px-7 absolute inline-block">DeCharcoal Coco</p>

            <p className="text text-3xl text-end font-semibold mt-2 right-7 px-7 absolute inline-block">Ready to Deliver</p>
            <p className="text text-3xl text-end font-semibold mt-12 right-7 px-7 absolute inline-block">the <span className="brown">best quality</span></p>
            <p className="text text-3xl text-end font-semibold mt-20 right-7 px-7 py-2 absolute inline-block">goods worldwide</p>
          </div>
        </div>

        {/* header section */}

        {/* product section */}

        <div className="product main-bg pb-14">
          <h1 className="text h-full py-20 mt-20 text-center font-bold text-4xl">PRODUCT</h1>

          <div className="grid grid-cols-3 mx-20">
            <div className="product1 box sisha mx-auto bg-contain hover:-translate-y-10 hover:scale-110 duration-300"></div>

            <div className="product2 box bbq mx-auto bg-contain hover:-translate-y-10 hover:scale-110 duration-300"></div>

            <div className="product3 box coconut mx-auto bg-contain hover:-translate-y-10 hover:scale-110 duration-300"></div>
          </div>

          <div className="grid grid-cols-3 mx-20">
            <div className="product1 brown font-bold text-xl hover:text-white pt-10 text-center">
              <a href="">Sisha/Hookah Charcoal Briquette</a>
            </div>

            <div className="product2 brown font-bold text-xl hover:text-white pt-10 text-center">
              <a href="">BBQ Charcoal Briquette</a>
            </div>

            <div className="product3 brown font-bold text-xl hover:text-white pt-10 text-center">
              <a href="">Coconut Shell Charcoal</a>
            </div>
          </div>
        </div>

        {/* product section */}

        {/* aboutus section */}

        <div className="aboutus main-bg">
          <h1 className="text h-full py-20 text-center font-bold text-4xl">ABOUT <span className="brown">US</span></h1>

          <div className="text">
            <p className="text mx-64 text-center text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quasi modi doloribus recusandae sequi amet minima excepturi quo corrupti cum rem, doloremque ipsam maiores consequuntur, distinctio rerum iusto sapiente ex enim ducimus vero facere impedit quibusdam nihil. Excepturi veniam nobis qui sed minus debitis quasi eveniet. Eum enim magni sit non eius. Neque animi consequuntur repellendus doloremque voluptas dolore nulla deleniti, iusto omnis corporis, vero porro officia, amet culpa ipsa accusantium vel ea qui. Earum cum quis aut itaque, eius porro nobis? Corrupti porro magni voluptas vero a veniam magnam. Exercitationem quaerat fugit perferendis repellat adipisci laboriosam sunt fugiat nihil.
            </p>
          </div>

          <div className="sdgs grid grid-cols-5 mx-32 pt-14">
            <div className="sdgs07 text box2 sisha mx-auto bg-contain hover:-translate-y-5 hover:scale-110 duration-300"></div>

            <div className="sdgs08 text box2 bbq mx-auto bg-contain hover:-translate-y-5 hover:scale-110 duration-300"></div>

            <div className="sdgs11 text box2 coconut mx-auto bg-contain hover:-translate-y-5 hover:scale-110 duration-300"></div>

            <div className="sdgs13 text box2 bbq mx-auto bg-contain hover:-translate-y-5 hover:scale-110 duration-300"></div>

            <div className="sdgs17 text box2 coconut mx-auto bg-contain hover:-translate-y-5 hover:scale-110 duration-300"></div>
          </div>
        </div>

        {/* aboutus section */}

        {/* core value section */}
        {/* core value section */}


        
      </div>
    </main>
  )
}
