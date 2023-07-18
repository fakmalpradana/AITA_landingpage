import Header from "@/template/nav"
import Footer from "@/template/footer"

export default function Home() {
  return (
    <main className="w-screen">
      {/* START NAVBAR */}
      <div className="z-10">
        <Header></Header>
      </div>
      
      {/* END NAVBAR */}
      <div className="home">

        <div className="logoAITA w-64 h-64 bg-contain bg-center bg-no-repeat justify-center md:w-[500px] md:h-[577px]"></div> 

        <h1 className="text mt-10 mb-28 text-center font-bold text-xl md:text-4xl">
          INDONESIA <span className="brown">TRADING</span> COMPANY
        </h1>

        {/* header section */}

        <div className="flex-col ml-7">
          <div className="h-10 md:h-[90px] rounded-lg md:mt-20 md:ml-10 bg-no-repeat bg-contain">
            <div className="dc-logo mt-32 h-10 bg-no-repeat bg-contain"></div>
            <p className="text font-semibold mt-4 md:text-3xl md:mt-2 md:ml-32 md:px-7 absolute inline-block">Our Project</p>
            <p className="text brown font-semibold mt-8 md:text-3xl md:mt-12 md:ml-32 md:px-7 absolute inline-block">DeCharcoal Coco</p>

            <p className="text md:text-3xl text-end font-semibold md:mt-2 right-7 md:px-7 absolute inline-block">Ready to Deliver</p>
            <p className="text md:text-3xl text-end font-semibold mt-4 md:mt-12 right-7 md:px-7 absolute inline-block">the <span className="brown">best quality</span></p>
            <p className="text md:text-3xl text-end font-semibold mt-8 md:mt-20 right-7 md:px-7 md:py-2 absolute inline-block">goods worldwide</p>
          </div>
        </div>

        {/* header section */}

        {/* product section */}

        <div id="product" className="product main-bg md:pb-14 h-auto">
          <h1 className="text h-full py-20 mt-20 text-center font-bold text-4xl">PRODUCT</h1>

          <div className="grid md:grid-cols-3 md:mx-20 z-0 grid-rows-none">
            <div className="product1 rounded-3xl h-64 w-64 md:box sisha mx-auto bg-contain hover:-translate-y-10 hover:scale-110 duration-300"></div>
            <div className="text font-bold text-2xl pt-5 text-center">
              <a href="">Sisha/Hookah <span className="brown">Charcoal </span>Briquette</a>
            </div>

            <div className="product2 rounded-3xl mt-12 h-64 w-64 md:box bbq mx-auto bg-contain hover:-translate-y-10 hover:scale-110 duration-300"></div>
            <div className="text font-bold text-2xl pt-5 text-center">
              <a href="">BBQ <span className="brown">Charcoal </span>Briquette</a>
            </div>

            <div className="product3 rounded-3xl mt-12 h-64 w-64 md:box coconut mx-auto bg-contain hover:-translate-y-10 hover:scale-110 duration-300"></div>
            <div className="text font-bold text-2xl pt-5 text-center">
              <a href="">Coconut Shell <span className="brown">Charcoal</span></a>
            </div>
          </div>

          {/* <div className="invisible md:grid md:grid-cols-3 md:mx-20">
            <div className="product1 text font-bold text-2xl hover:drop-shadow-md pt-10 text-center">
              <a href="">Sisha/Hookah <span className="brown">Charcoal </span>Briquette</a>
            </div>

            <div className="product2 text font-bold text-2xl hover:drop-shadow-md pt-10 text-center">
              <a href="">BBQ <span className="brown">Charcoal </span>Briquette</a>
            </div>

            <div className="product3 text font-bold text-2xl hover:drop-shadow-md pt-10 text-center">
              <a href="">Coconut Shell <span className="brown">Charcoal</span></a>
            </div>
          </div> */}
        </div>

        {/* product section */}

        {/* aboutus section */}

        <div id="aboutus" className="aboutus main-bg pb-14">
          <h1 className="text h-full pt-20 pb-10 md:py-20 text-center font-bold text-4xl">ABOUT <span className="brown">US</span></h1>

          <div className="text">
            <p className="text mx-10 md:mx-80 text-center text-md md:text-xl">
              Arci Intertrade Indonesia (AITA) is a trading company provide commodities and specialty products to fulfill the international and local market through various project. We commite to involve the waste management to production process for produce products with world standard quality. Every project we run having priority to involve local people to empowering them and support local economic. We dream big to give significant impact for supporting SDGs program.
            </p>
            <p className="p-3 md:p-5 brown mx-10 md:mx-80 font-semibold text-md md:text-xl text-center">
              Start Small for Big Thinks
            </p>
          </div>

          <div className="sdgs mx-10 grid grid-rows-2 grid-flow-col gap-3 md:grid-cols-5 md:mx-32 pt-4 md:pt-14 z-0">
            <div className="sdgs07 h-24 w-24 md:box2 sisha mx-auto bg-contain hover:-translate-y-5 hover:scale-110 duration-300"></div>

            <div className="sdgs08 h-24 w-24 md:box2 bbq mx-auto bg-contain hover:-translate-y-5 hover:scale-110 duration-300"></div>

            <div className="sdgs11 h-24 w-24 md:box2 coconut mx-auto bg-contain hover:-translate-y-5 hover:scale-110 duration-300"></div>

            <div className="sdgs13 h-24 w-24 md:box2 bbq mx-auto bg-contain hover:-translate-y-5 hover:scale-110 duration-300"></div>

            <div className="sdgs17 h-24 w-24 md:box2 coconut mx-auto bg-contain hover:-translate-y-5 hover:scale-110 duration-300"></div>
          </div>
        </div>

        {/* aboutus section */}

        {/* core value section */}

        <div className="coreval main-bg pb-14">
          <h1 className="text h-full py-20 text-center font-bold text-4xl"><span className="brown">CORE </span>VALUE</h1>

          <div className="grid grid-rows-4 grid-flow-col md:grid-cols-4 md:mx-64 z-0">
            <div className="core1 rounded-full h-40 w-40 md:box3 mx-auto bg-contain hover:-translate-y-3 hover:scale-105 duration-300"> </div>
            <p className="text font-bold text-2xl pt-10 text-center">Integrity</p>

            <div className="core2 rounded-full h-40 w-40 md:box3 mx-auto bg-contain hover:-translate-y-3 hover:scale-105 duration-300"></div>
            <p className="brown font-bold text-2xl pt-10 text-center">Growth</p>

            <div className="core3 rounded-full h-40 w-40 md:box3 mx-auto bg-contain hover:-translate-y-3 hover:scale-105 duration-300"> </div>
            <p className="text font-bold text-2xl pt-10 text-center">Innovative</p>

            <div className="core4 rounded-full h-40 w-40 md:box3 mx-auto bg-contain hover:-translate-y-3 hover:scale-105 duration-300"> </div>
            <p className="brown font-bold text-2xl pt-10 text-center">Collaborative</p>
          </div>

          {/* <div className="grid grid-cols-4 mx-64">
            <p className="text font-bold text-2xl pt-10 text-center">Integrity</p>

            <p className="brown font-bold text-2xl pt-10 text-center">Growth</p>

            <p className="text font-bold text-2xl pt-10 text-center">Innovative</p>

            <p className="brown font-bold text-2xl pt-10 text-center">Collaborative</p>
          </div> */}

        </div>

        {/* core value section */}

        {/* contact us section */}

        <div id="contact" className="contact main-bg pb-14">
          <h1 className="text h-full pb-16 md:py-20 text-center font-bold text-4xl">CONTACT <span className="brown">US</span></h1>

          <div className="grid grid-rows-none md:grid-cols-3 md:mx-72 z-0">
            <div className="email h-20 w-20 rounded-full md:box4 mx-auto bg-contain mb-16 mt-10">
              <p className="brown font-bold md:text-2xl md:pt-60 text-center pt-24">EMAIL US</p>
            </div>
            <div>
              <p className="text font-normal md:text-lg pt-70 text-center">Our friendly team is here to help</p>
              {/* <br /><br /> */}
              <p className="text font-semibold md:text-lg pt-70 text-center">emailaita@gmail.com</p>
            </div>

            <div className="office h-20 w-20 rounded-full md:box4 mx-auto bg-contain mb-16 mt-10">
              <p className="brown font-bold md:text-2xl md:pt-60 text-center pt-24">OFFICE</p>
            </div>
            <div>
              <p className="text font-normal md:text-lg pt-70 text-center">Come visit and let's collaborate and<br />grow together</p>
              {/* <br /> */}
              <p className="text font-semibold md:text-lg pt-70 text-center">Jl. Kasatrian, Condongcatur,<br />Depok, Sleman, D.I Yogyakarta<br />INDONESIA</p>
            </div>

            <div className="phone h-20 w-20 rounded-full md:box4 mx-auto bg-contain mb-16 mt-10">
              <p className="brown font-bold md:text-2xl md:pt-60 text-center pt-24">PHONE</p>
            </div>
            <div>
              <p className="text font-normal md:text-lg pt-70 text-center">Ask whatever you need, we will<br />provide the best solution</p>
              {/* <br /> */}
              <p className="text font-semibold md:text-lg pt-70 text-center">(ID) +62 821 1234 8989</p>
            </div>

          </div>

          {/* <div className="grid grid-cols-3 mx-72 my-24">
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
            
          </div> */}

        </div>

        {/* contact us section */}

        {/* footer section */}

        <Footer></Footer>
        
        {/* footer section */}


        
      </div>
    </main>
  )
}
