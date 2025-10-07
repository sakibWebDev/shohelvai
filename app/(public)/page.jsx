'use client'
import BestSelling from "@/components/BestSelling";
import Hero from "@/components/Hero";
import OurSpecs from "@/components/OurSpec";
import LatestProducts from "@/components/LatestProducts";
import SeasonSeeds from "@/components/SeasonSeeds";
import Contact from "@/components/Contact";
import FarmerBanner from "@/components/FarmerBanner";

export default function Home() {
    return (
        <div>
            <Hero />
            <FarmerBanner/>
            <SeasonSeeds/>
            <LatestProducts />
            <BestSelling />
            <OurSpecs />
            <Contact/>
        </div>
    );
}
