import Header from "@/template/nav"
import Footer from "@/template/footer"

export default function Home() {
  return (
    <main className="">
      {/* START NAVBAR */}
      <div className="z-10 fixed">
        <Header></Header>
      </div>
      
      {/* END NAVBAR */}
      <div className="home">

        <div className="logoAITA w-64 h-64 bg-contain bg-center bg-no-repeat justify-center md:w-[500px] md:h-[577px]"></div> 

        <h1 className="text mt-10 mb-28 text-center font-bold text-xl md:text-4xl">
          INDONESIA <span className="brown">TRADING</span> COMPANY
        </h1>

        {/* header section */}

        <div className="ml-7">
          <div className="h-10 md:mt-16 md:ml-10 bg-no-repeat bg-contain md:grid md:grid-cols-none">
            <div className="dc-logo mt-32 md:mt-0 md:h-[90px] h-10 bg-no-repeat bg-contain"></div>
            <p className="text font-semibold mt-4 md:text-3xl md:mt-2 md:ml-32 md:px-7 absolute inline-block">Our Project</p>
            <p className="text brown font-semibold mt-8 md:text-3xl md:mt-12 md:ml-32 md:px-7 absolute inline-block">DeCharcoal Coco</p>

            <p className="text md:text-3xl text-end font-semibold right-7 md:px-7 absolute inline-block">Ready to Deliver</p>
            <p className="text md:text-3xl text-end font-semibold mt-4 md:mt-7 right-7 md:px-7 absolute inline-block">the <span className="brown">best quality</span></p>
            <p className="text md:text-3xl text-end font-semibold mt-8 md:mt-12 right-7 md:px-7 md:py-2 absolute inline-block">goods worldwide</p>
          </div>
        </div>

        {/* header section */}

        {/* product section */}

        <div id="product" className="product main-bg md:pb-14 h-auto">
          <h1 className="text h-full py-20 mt-20 text-center font-bold text-4xl">PRODUCT</h1>

          <div className="grid lg:grid-cols-3 md:mx-20 z-0 grid-rows-none">
            <div className="md:grid-rows-2 md:pt-10 lg:pt-0">
              <div className="product1 rounded-3xl h-64 w-64 xl:h-[400px] xl:w-[400px] sisha mx-auto bg-contain hover:-translate-y-10 hover:scale-110 duration-300"></div>
              <div className="text font-bold text-2xl pt-5 text-center grid grid-rows-none">
                <p>Sisha/Hookah <span className="brown">Charcoal </span>Briquette</p>
                <a href="./product/sisha-hookah">
                  <button className="sec-bg hover:bg-yellow-800 text mx-auto mt-5 py-2 px-5 rounded-xl text-md font-semibold">Learn more</button>
                </a>
              </div>
            </div>

            <div className="md:grid-rows-2 md:pt-10 lg:pt-0">
              <div className="product2 rounded-3xl md:mt-0 xl:h-[400px] xl:w-[400px] mt-12 h-64 w-64 bbq mx-auto bg-contain hover:-translate-y-10 hover:scale-110 duration-300"></div>
              <div className="text font-bold text-2xl pt-5 text-center grid grid-rows-none">
                <p>BBQ <span className="brown">Charcoal </span>Briquette</p>
                <a href="./product/bbq">
                  <button className="sec-bg hover:bg-yellow-800 text mx-auto mt-5 py-2 px-5 rounded-xl text-md font-semibold">Learn more</button>
                </a>
              </div>
            </div>
            
            <div className="md:grid-rows-2 md:pt-10 lg:pt-0">
              <div className="product3 rounded-3xl md:mt-0 xl:h-[400px] xl:w-[400px] mt-12 h-64 w-64 coconut mx-auto bg-contain hover:-translate-y-10 hover:scale-110 duration-300"></div>
              <div className="text font-bold text-2xl pt-5 text-center grid grid-rows-none">
                <p>Coconut Shell <span className="brown">Charcoal</span></p>
                <a href="./product/coconut-shell">
                  <button className="sec-bg hover:bg-yellow-800 text mx-auto mt-5 py-2 px-5 rounded-xl text-md font-semibold">Learn more</button>
                </a>
              </div>
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
            <p className="text mx-10 lg:mx-80 text-center text-md md:text-xl">
              Arci Intertrade Indonesia (AITA) is a trading company provide commodities and specialty products to fulfill the international and local market through various project. We commite to involve the waste management to production process for produce products with world standard quality. Every project we run having priority to involve local people to empowering them and support local economic. We dream big to give significant impact for supporting SDGs program.
            </p>
            <p className="p-3 md:p-5 brown mx-10 lg:mx-80 font-semibold text-md md:text-xl text-center">
              Start Small for Big Thinks
            </p>
          </div>

          <div className="sdgs mx-10 grid grid-rows-2 grid-flow-col gap-3 lg:grid-cols-5 lg:grid-rows-none md:mx-32 pt-4 md:pt-14 z-0">
            <div className="sdgs07 rounded-lg h-24 w-24 2xl:h-[250px] 2xl:w-[250px] lg:h-[170px] lg:w-[170px] sisha mx-auto bg-contain hover:-translate-y-5 hover:scale-110 duration-300"></div>

            <div className="sdgs08 rounded-lg h-24 w-24 2xl:h-[250px] 2xl:w-[250px] lg:h-[170px] lg:w-[170px] bbq mx-auto bg-contain hover:-translate-y-5 hover:scale-110 duration-300"></div>

            <div className="sdgs11 rounded-lg h-24 w-24 2xl:h-[250px] 2xl:w-[250px] lg:h-[170px] lg:w-[170px] coconut mx-auto bg-contain hover:-translate-y-5 hover:scale-110 duration-300"></div>

            <div className="sdgs13 rounded-lg h-24 w-24 2xl:h-[250px] 2xl:w-[250px] lg:h-[170px] lg:w-[170px] bbq mx-auto bg-contain hover:-translate-y-5 hover:scale-110 duration-300"></div>

            <div className="sdgs17 rounded-lg h-24 w-24 2xl:h-[250px] 2xl:w-[250px] lg:h-[170px] lg:w-[170px] coconut mx-auto bg-contain hover:-translate-y-5 hover:scale-110 duration-300"></div>
          </div>
        </div>

        {/* aboutus section */}

        {/* core value section */}

        <div className="coreval main-bg pb-14">
          <h1 className="text h-full py-20 text-center font-bold text-4xl"><span className="brown">CORE </span>VALUE</h1>

          <div className="grid grid-rows-4 grid-flow-col lg:grid-rows-none lg:mx-64 z-0">
            <div className="lg:grid lg:grid-rows-none">
              <div className="core1 rounded-full h-40 w-40 lg:h-[250px] lg:w-[250px] mx-auto bg-contain hover:-translate-y-3 hover:scale-105 duration-300"> </div>
              <p className="text font-bold text-2xl pt-10 lg:pt-0 text-center lg:h-10">Integrity</p>
            </div>
            
            <div className="lg:grid lg:grid-rows-none">
              <div className="core2 rounded-full h-40 w-40 lg:h-[250px] lg:w-[250px] mx-auto bg-contain hover:-translate-y-3 hover:scale-105 duration-300"></div>
              <p className="brown font-bold text-2xl pt-10 lg:pt-0 text-center lg:h-10">Growth</p>
            </div>
            
            <div className="lg:grid lg:grid-rows-none">
              <div className="core3 rounded-full h-40 w-40 lg:h-[250px] lg:w-[250px] mx-auto bg-contain hover:-translate-y-3 hover:scale-105 duration-300"> </div>
              <p className="text font-bold text-2xl pt-10 lg:pt-0 text-center lg:h-10">Innovative</p>
            </div>

            <div className="lg:grid lg:grid-rows-none">
              <div className="core4 rounded-full h-40 w-40 lg:h-[250px] lg:w-[250px] mx-auto bg-contain hover:-translate-y-3 hover:scale-105 duration-300"> </div>
              <p className="brown font-bold text-2xl pt-10 lg:pt-0 text-center lg:h-10">Collaborative</p>
            </div>
            
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

          <div className="grid grid-rows-none lg:grid-cols-3 lg:mx-72 z-0">

            <div className="lg:grid lg:grid-rows-2">
              <div className="email h-20 w-20 lg:h-32 lg:w-32 rounded-full lg:box4 mx-auto bg-contain mb-16 mt-10">
                <p className="brown font-bold lg:text-2xl text-center pt-28 lg:pt-36">EMAIL US</p>
              </div>
              <div>
                <p className="text font-normal lg:text-lg pt-70 text-center">Our friendly team is here to help</p>
                {/* <br /><br /> */}
                <p className="text font-semibold lg:text-lg pt-70 text-center">emailaita@gmail.com</p>
              </div>
            </div>

            <div className="lg:grid lg:grid-rows-2">
              <div className="office h-20 w-20 lg:h-32 lg:w-32 rounded-full lg:box4 mx-auto bg-contain mb-16 mt-10">
                <p className="brown font-bold lg:text-2xl text-center pt-28 lg:pt-36">OFFICE</p>
              </div>
              <div>
                <p className="text font-normal lg:text-lg pt-70 text-center">Come visit and let's collaborate and<br />grow together</p>
                {/* <br /> */}
                <p className="text font-semibold lg:text-lg pt-70 text-center">Jl. Kasatrian, Condongcatur,<br />Depok, Sleman, D.I Yogyakarta<br />INDONESIA</p>
              </div>
            </div>

            <div className="lg:grid lg:grid-rows-2">
              <div className="phone h-20 w-20 lg:h-32 lg:w-32 rounded-full lg:box4 mx-auto bg-contain mb-16 mt-10">
                <p className="brown font-bold lg:text-2xl text-center pt-28 lg:pt-36">PHONE</p>
              </div>
              <div>
                <p className="text font-normal lg:text-lg pt-70 text-center">Ask whatever you need, we will<br />provide the best solution</p>
                {/* <br /> */}
                <p className="text font-semibold lg:text-lg pt-70 text-center">(ID) +62 821 1234 8989</p>
              </div>
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
