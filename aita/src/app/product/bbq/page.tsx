import Header from "@/template/nav";
import Footer from "@/template/footer";
import Border from "@/template/border";

export default function bbq() {
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
                
                <div className="bbq w-56 h-56 md:w-[300px] md:h-[300px] bg-contain rounded-2xl"></div>
                <div className="bbq1 w-56 h-56 md:w-[300px] md:h-[300px] bg-contain rounded-2xl"></div>

            </div>

            <div className="text text-center font-bold text-xl md:text-2xl main-bg pb-10">Specification</div>

            <div className="main-bg flex justify-center pb-10">
                <table className="table-auto text text-center text-sm md:text-lg border-collapse">
                    <tbody> 
                        <Border></Border>
                        <tr>
                            <th className="pr-10 brown">Dimension</th>
                            <th className="pl-10 font-normal">
                                Hexagonal - 50 x 200 mm
                                <br />
                                Hexagonal - 50 x 150 mm
                                <br />
                                Hexagonal - 50 x 100 mm
                                <br />
                                Hexagonal - 50 x 50 mm
                                <br />
                                Hexagonal - 40 x 200 mm
                                <br />
                                Hexagonal - 40 x 150 mm
                                <br />
                                Hexagonal - 40 x 100 mm
                                <br />
                                Hexagonal - 40 x 50 mm
                                <br />
                                Stick/Finger - 22 x 50 mm 
                                <br />
                                Stick/Finger - 25 x 50 mm
                                <br />
                                Stick/Finger - 22 x 40 mm 
                                <br />
                                Stick/Finger - 25 x 40 mm
                            </th>
                        </tr>
                        <Border></Border>
                        <tr>
                            <th className="pr-10 brown">Material</th>
                            <th className="pl-10 font-normal">50% Coconut Shell Charcoal + 50% Hardwood Charcoal</th>
                        </tr>
                        <Border></Border>
                        <tr>
                            <th className="pr-10 brown">Ash Content</th>
                            <th className="pl-10 font-normal">8% - 10%</th>
                        </tr>
                        <Border></Border>
                        <tr>
                            <th className="pr-10 brown">Ash Color</th>
                            <th className="pl-10 font-normal">White/Silver</th>
                        </tr>
                        <Border></Border>
                        <tr>
                            <th className="pr-10 brown">Calorie Value</th>
                            <th className="pl-10 font-normal">6000 KCal/Kg</th>
                        </tr>
                        <Border></Border>
                        <tr>
                            <th className="pr-10 brown">Moisture</th>
                            <th className="pl-10 font-normal">Less than 6%</th>
                        </tr>
                        <Border></Border>
                        <tr>
                            <th className="pr-10 brown">Fix Carbon</th>
                            <th className="pl-10 font-normal">Over than 75</th>
                        </tr>
                        <Border></Border>
                        <tr>
                            <th className="pr-10 brown">Burning Time</th>
                            <th className="pl-10 font-normal">5 - 6 Hours</th>
                        </tr>
                        <Border></Border>
                        <tr>
                            <th className="pr-10 brown">Volatile Matter</th>
                            <th className="pl-10 font-normal">15%</th>
                        </tr>
                        <Border></Border>
                        <tr>
                            <th className="pr-10 brown">Other</th>
                            <th className="pl-10 font-normal">Free from Odor, Smoke, Spark, Crack & Chemical</th>
                        </tr>
                        <Border></Border>
                    </tbody> 
                </table>
            </div>
            

            {/* END MAIN SECTION */}

            {/* START FOOTER */}

            <Footer></Footer>

            {/* END FOOTER */}
        </main>
    )
    
}