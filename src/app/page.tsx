"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Facilities from "@/components/Facilities";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <main className="flex-1 flex flex-col relative">
      <Preloader onComplete={() => setPreloaderDone(true)} />
      <div className="h-screen"><Hero startAnimation={preloaderDone} /></div>
      <About />
      <Rooms />
      <Services />
      <Facilities />
      <Packages />
      <Gallery />
      <Testimonials />
      <Blog />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
