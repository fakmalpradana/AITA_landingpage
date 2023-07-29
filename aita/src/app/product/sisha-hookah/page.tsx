import Header from "@/template/nav";
import Footer from "@/template/footer";
import Border from "@/template/border";

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

            <div className="main-bg flex justify-center pb-10">
                <table className="table-auto text text-center text-sm md:text-lg border-collapse">
                    <tbody>
                        <Border></Border>
                        <tr>
                            <th className="pr-10 brown">Dimension</th>
                            <th className="pl-10 font-normal">
                                Cube C20 - 20 x 20 x 20 mm
                                <br />
                                Cube C22 - 22 x 22 x 22 mm
                                <br />
                                Cube C25 - 25 x 25 x 25 mm
                                <br />
                                Cube C26 - 26 x 26 x 26 mm
                                <br />
                                Flat - 25 x 25 x 15 mm
                            </th>
                        </tr>
                        <Border></Border>
                        <tr>
                            <th className="pr-10 brown">Material</th>
                            <th className="pl-10 font-normal">100% Coconut Shell Charcoal</th>
                        </tr>
                        <Border></Border>
                        <tr>
                            <th className="pr-10 brown">Ash Content</th>
                            <th className="pl-10 font-normal">1.8% - 2.5%</th>
                        </tr>
                        <Border></Border>
                        <tr>
                            <th className="pr-10 brown">Ash Color</th>
                            <th className="pl-10 font-normal">White/Snow</th>
                        </tr>
                        <Border></Border>
                        <tr>
                            <th className="pr-10 brown">Calorie Value</th>
                            <th className="pl-10 font-normal">7000 - 7500 KCal/Kg</th>
                        </tr>
                        <Border></Border>
                        <tr>
                            <th className="pr-10 brown">Moisture</th>
                            <th className="pl-10 font-normal">Less than 5%</th>
                        </tr>
                        <Border></Border>
                        <tr>
                            <th className="pr-10 brown">Fix Carbon</th>
                            <th className="pl-10 font-normal">Over than 80</th>
                        </tr>
                        <Border></Border>
                        <tr>
                            <th className="pr-10 brown">Burning Time</th>
                            <th className="pl-10 font-normal">90 - 120 minutes</th>
                        </tr>
                        <Border></Border>
                        <tr>
                            <th className="pr-10 brown">Ignition Time</th>
                            <th className="pl-10 font-normal">2 - 5 minutes</th>
                        </tr>
                        <Border></Border>
                        <tr>
                            <th className="pr-10 brown">Volatile Matter</th>
                            <th className="pl-10 font-normal">14%</th>
                        </tr>
                        <Border></Border>
                        <tr>
                            <th className="pr-10 brown">Packaging</th>
                            <th className="pl-10 font-normal">
                                Small box - 500 gram or 1 Kg 
                                <br />
                                Master box - 10 Kg or 20 Kg 
                                <br />
                                <span className="italic">*for any custom size, brand and design please contact us</span>
                            </th>
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