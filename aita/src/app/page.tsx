import Header from "@/template/nav"

export default function Home() {
  return (
    <main className="w-screen">
      {/* START NAVBAR */}
      <div className="z-10">
        <Header></Header>
      </div>
      
      {/* END NAVBAR */}
      <div className="home">

        <div id="home" className="logoAITA"></div> 

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

        <div id="product" className="product main-bg pb-14">
          <h1 className="text h-full py-20 mt-20 text-center font-bold text-4xl">PRODUCT</h1>

          <div className="grid grid-cols-3 mx-20 z-0">
            <div className="product1 box sisha mx-auto bg-contain hover:-translate-y-10 hover:scale-110 duration-300"></div>

            <div className="product2 box bbq mx-auto bg-contain hover:-translate-y-10 hover:scale-110 duration-300"></div>

            <div className="product3 box coconut mx-auto bg-contain hover:-translate-y-10 hover:scale-110 duration-300"></div>
          </div>

          <div className="grid grid-cols-3 mx-20">
            <div className="product1 text font-bold text-2xl hover:drop-shadow-md pt-10 text-center">
              <a href="">Sisha/Hookah <span className="brown">Charcoal </span>Briquette</a>
            </div>

            <div className="product2 text font-bold text-2xl hover:drop-shadow-md pt-10 text-center">
              <a href="">BBQ <span className="brown">Charcoal </span>Briquette</a>
            </div>

            <div className="product3 text font-bold text-2xl hover:drop-shadow-md pt-10 text-center">
              <a href="">Coconut Shell <span className="brown">Charcoal</span></a>
            </div>
          </div>
        </div>

        {/* product section */}

        {/* aboutus section */}

        <div id="aboutus" className="aboutus main-bg pb-14">
          <h1 className="text h-full py-20 text-center font-bold text-4xl">ABOUT <span className="brown">US</span></h1>

          <div className="text">
            <p className="text mx-64 text-center text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quasi modi doloribus recusandae sequi amet minima excepturi quo corrupti cum rem, doloremque ipsam maiores consequuntur, distinctio rerum iusto sapiente ex enim ducimus vero facere impedit quibusdam nihil. Excepturi veniam nobis qui sed minus debitis quasi eveniet. Eum enim magni sit non eius. Neque animi consequuntur repellendus doloremque voluptas dolore nulla deleniti, iusto omnis corporis, vero porro officia, amet culpa ipsa accusantium vel ea qui. Earum cum quis aut itaque, eius porro nobis? Corrupti porro magni voluptas vero a veniam magnam. Exercitationem quaerat fugit perferendis repellat adipisci laboriosam sunt fugiat nihil.
            </p>
          </div>

          <div className="sdgs grid grid-cols-5 mx-32 pt-14 z-0">
            <div className="sdgs07 box2 sisha mx-auto bg-contain hover:-translate-y-5 hover:scale-110 duration-300"></div>

            <div className="sdgs08 box2 bbq mx-auto bg-contain hover:-translate-y-5 hover:scale-110 duration-300"></div>

            <div className="sdgs11 box2 coconut mx-auto bg-contain hover:-translate-y-5 hover:scale-110 duration-300"></div>

            <div className="sdgs13 box2 bbq mx-auto bg-contain hover:-translate-y-5 hover:scale-110 duration-300"></div>

            <div className="sdgs17 box2 coconut mx-auto bg-contain hover:-translate-y-5 hover:scale-110 duration-300"></div>
          </div>
        </div>

        {/* aboutus section */}

        {/* core value section */}

        <div className="coreval main-bg pb-14">
          <h1 className="text h-full py-20 text-center font-bold text-4xl"><span className="brown">CORE </span>VALUE</h1>

          <div className="grid grid-cols-4 mx-64 z-0">
            <div className="core1 rounded-full box3 mx-auto bg-contain hover:-translate-y-3 hover:scale-90 duration-300"> </div>

            <div className="core2 rounded-full box3 mx-auto bg-contain hover:-translate-y-3 hover:scale-90 duration-300"></div>

            <div className="core3 rounded-full box3 mx-auto bg-contain hover:-translate-y-3 hover:scale-90 duration-300"> </div>

            <div className="core4 rounded-full box3 mx-auto bg-contain hover:-translate-y-3 hover:scale-90 duration-300"> </div>
          </div>

          <div className="grid grid-cols-4 mx-64">
            <p className="text font-bold text-2xl pt-10 text-center">Integrity</p>

            <p className="brown font-bold text-2xl pt-10 text-center">Growth</p>

            <p className="text font-bold text-2xl pt-10 text-center">Innovative</p>

            <p className="brown font-bold text-2xl pt-10 text-center">Collaborative</p>
          </div>

        </div>

        {/* core value section */}

        {/* contact us section */}

        <div id="contact" className="contact main-bg pb-14 pt-10">
          <h1 className="text h-full py-20 text-center font-bold text-4xl">CONTACT <span className="brown">US</span></h1>

          <div className="grid grid-cols-3 mx-72 z-0">
            <div className="email rounded-full box4 mx-auto bg-contain">
              <p className="brown font-bold text-2xl pt-60 text-center">EMAIL US</p>
            </div>

            <div className="office rounded-full box4 mx-auto bg-contain">
              <p className="brown font-bold text-2xl pt-60 text-center">OFFICE</p>
            </div>

            <div className="phone rounded-full box4 mx-auto bg-contain">
              <p className="brown font-bold text-2xl pt-60 text-center">PHONE</p>
            </div>
          </div>

          <div className="grid grid-cols-3 mx-72 my-24">
            <div>
              <p className="text font-normal text-lg pt-70 text-center">Our friendly team is here to help</p>
              <br /><br />
              <p className="text font-semibold text-lg pt-70 text-center">emailaita@gmail.com</p>
            </div>

            <div>
              <p className="text font-normal text-lg pt-70 text-center">Come visit and let's collaborate and<br />grow together</p>
              <br />
              <p className="text font-semibold text-lg pt-70 text-center">Jl. Kasatrian, Condongcatur,<br />Depok, Sleman, D.I Yogyakarta<br />INDONESIA</p>
            </div>

            <div>
              <p className="text font-normal text-lg pt-70 text-center">Ask whatever you need, we will<br />provide the best solution</p>
              <br />
              <p className="text font-semibold text-lg pt-70 text-center">(ID) +62 821 1234 8989</p>
            </div>
            
          </div>
        </div>

        {/* contact us section */}

        {/* footer section */}

        <div className="footer footer-bg pt-10">
          <div className="logoaita2 bg-contain"></div>
          <p className="text-inherit py-5 text-center">&copy;2023. PT. Arci Intertrade Indonesia.</p>
        </div>
        {/* footer section */}


        
      </div>
    </main>
  )
}
