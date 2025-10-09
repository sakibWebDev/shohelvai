'use client'
import BestSelling from "@/components/BestSelling";
import Hero from "@/components/Hero";
import OurSpecs from "@/components/OurSpec";
import LatestProducts from "@/components/LatestProducts";
import SeasonSeeds from "@/components/SeasonSeeds";
import Contact from "@/components/Contact";
import FarmerBanner from "@/components/FarmerBanner";
import CategoriesMarquee from "@/components/CategoriesMarquee";

export default function Home() {
    return (
        <div>
            <CategoriesMarquee />
            <SeasonSeeds/>
            <Hero />
            <LatestProducts />
            <BestSelling />
            <FarmerBanner/>
            <OurSpecs />
            <Contact/>
        </div>
    );
}
