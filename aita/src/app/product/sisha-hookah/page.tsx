import Header from "@/template/nav";
import Footer from "@/template/footer";

export default function sisha_hookah() {
    return(
        <main className="w-screen">
            {/* START NAVBAR */}

            <div className="z-10">
                <Header></Header>
            </div>
            
            {/* END NAVBAR */}

            {/* START TITLE SECTION */}

            <div className="footer-bg h-48">
                <h1 className="text title-page pt-32 md:pt-28 text-center font-bold text-xl md:text-3xl">Sisha/Hookah <span className="brown">Charcoal</span> Briquette</h1>
            </div>

            {/* END TITLE SECTION */}

            {/* START MAIN SECTION */}

            <div className="grid gap-10 grid-rows-none md:grid-cols-2 main-bg pt-10 justify-items-center pb-20 px-20">
                
                <div className="sisha w-56 h-56 md:w-[300px] md:h-[300px] bg-contain rounded-2xl"></div>
                <div className="sisha1 w-56 h-56 md:w-[300px] md:h-[300px] bg-contain rounded-2xl"></div>

            </div>

            <div className="text text-center font-bold text-xl md:text-2xl main-bg pb-10">Specification</div>

            

            {/* END MAIN SECTION */}

            {/* START FOOTER */}

            <Footer></Footer>

            {/* END FOOTER */}
        </main>
    )
    
}