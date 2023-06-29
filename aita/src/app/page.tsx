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

        <div className="flex-col ml-7">
          <div className="dc-logo rounded-lg mt-20 ml-10 static">
            <p className="text text-3xl font-semibold mt-2 ml-32 px-7 absolute inline-block">Our Project</p>
            <p className="text brown text-3xl font-semibold mt-12 ml-32 px-7 absolute inline-block">DeCharcoal Coco</p>

            <p className="text text-3xl text-end font-semibold mt-2 right-7 px-7 absolute inline-block">Ready to Deliver</p>
            <p className="text text-3xl text-end font-semibold mt-12 right-7 px-7 absolute inline-block">the <span className="brown">best quality</span></p>
            <p className="text text-3xl text-end font-semibold mt-20 right-7 px-7 py-2 absolute inline-block">goods worldwide</p>
          </div>

          
        </div>
        
      </div>
    </main>
  )
}
