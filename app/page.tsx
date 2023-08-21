"use client"
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Cards from "@/components/Cards";
import GridSystem from "@/components/GridSystem";
import Footer from "@/components/Footer";
import HScroller from "@/components/HScroller";


export default function Home() {  
  return (
    <div className="overflow-hidden">
      {/* NavBar section */}
      <Nav></Nav>
      {/* Hero section */}
      <Hero />
      <div className="mx-auto container py-[100px] flex justify-center items-center flex-col ">
        {/* Card of People section */}
        <Cards />
      </div>
      <div className="mx-auto container py-[100px] flex justify-center items-center flex-col">
        {/* Grid System section */}
        <GridSystem />
        {/* Grid System section */}
        <HScroller/>       
        <Footer />
      </div>
    </div>
  )
}
