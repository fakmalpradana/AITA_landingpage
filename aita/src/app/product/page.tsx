import Header from "@/template/nav";
import Footer from "@/template/footer";

export default function Product() {
    return(
        <main className="w-screen">
            {/* START NAVBAR */}

            <div className="z-10">
                <Header></Header>
            </div>
            
            {/* END NAVBAR */}

            {/* START TITLE SECTION */}

            <div className="footer-bg h-48">
                <h1 className="text title-page pt-28 text-center font-bold text-3xl">Product</h1>
            </div>

            {/* END TITLE SECTION */}

            {/* START MAIN SECTION */}

            <div className="flex flex-col main-bg pt-10 pl-32 pb-20">
                <div className="flex flex-row pt-10">
                    <div className="sisha box3 bg-contain rounded-3xl"></div>
                    <div className="pl-12">
                        <h2 className="brown font-semibold text-2xl">Sisha/Hookah Charcoal Briquette</h2>
                        <p className="text font-medium text-lg pt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente quia magnam molestiae enim nisi sed at maiores? Deleniti.</p>
                        <p className="text font-medium text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente quia magnam molestiae enim nisi sed at maiores? Deleniti.</p>
                        <p className="text font-medium text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente quia magnam molestiae enim nisi sed at maiores? Deleniti.</p>
                    </div>
                </div>

                <div className="flex flex-row pt-10">
                    <div className="bbq box3 bg-contain rounded-3xl"></div>
                    <div className="pl-12">
                        <h2 className="brown font-semibold text-2xl">BBQ Charcoal Briquette</h2>
                        <p className="text font-medium text-lg pt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente quia magnam molestiae enim nisi sed at maiores? Deleniti.</p>
                        <p className="text font-medium text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente quia magnam molestiae enim nisi sed at maiores? Deleniti.</p>
                        <p className="text font-medium text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente quia magnam molestiae enim nisi sed at maiores? Deleniti.</p>
                    </div>
                </div>

                <div className="flex flex-row pt-10">
                    <div className="coconut box3 bg-contain rounded-3xl"></div>
                    <div className="pl-12">
                        <h2 className="brown font-semibold text-2xl">Coconut Shell Charcoal</h2>
                        <p className="text font-medium text-lg pt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente quia magnam molestiae enim nisi sed at maiores? Deleniti.</p>
                        <p className="text font-medium text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente quia magnam molestiae enim nisi sed at maiores? Deleniti.</p>
                        <p className="text font-medium text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente quia magnam molestiae enim nisi sed at maiores? Deleniti.</p>
                    </div>
                </div>
            </div>

            {/* END MAIN SECTION */}

            {/* START FOOTER */}

            <Footer></Footer>

            {/* END FOOTER */}
        </main>
    )
    
}