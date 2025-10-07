'use client'
import BestSelling from "@/components/BestSelling";
import Hero from "@/components/Hero";
import OurSpecs from "@/components/OurSpec";
import LatestProducts from "@/components/LatestProducts";
import SeasonSeeds from "@/components/SeasonSeeds";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <div>
            <Hero />
            <SeasonSeeds/>
            <LatestProducts />
            <BestSelling />
            <OurSpecs />
            <Contact/>
        </div>
    );
}
