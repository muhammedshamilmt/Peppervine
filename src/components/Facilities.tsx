"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';

const facilitiesData = [
  {
    id: 1,
    image: "/assets/facilities/dining.png",
    title: "Savor authentic Kerala cuisine and international flavors.",
    desc: "Our expert chefs prepare exquisite local delicacies and international favorites at our elegant multi-cuisine restaurant.",
    btnText: "Reserve a Table"
  },
  {
    id: 2,
    image: "/assets/facilities/activities.png",
    title: "Explore the beauty of Kumily with guided nature walks.",
    desc: "Discover the lush spice plantations and wilderness of Thekkady with our curated outdoor adventures and activities.",
    btnText: "View Activities"
  },
  {
    id: 3,
    image: "/assets/facilities/swimmingpool.png",
    title: "Unwind at our outdoor swimming pool and lounge.",
    desc: "Relax after a long day of sightseeing with serene views of the Periyar landscape and refreshing handcrafted beverages.",
    btnText: "Explore Pool"
  }
];

export default function Facilities() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === facilitiesData.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? facilitiesData.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000); // Autoplay every 5 seconds

    return () => clearInterval(timer);
  }, [nextSlide, current]);

  return (
    <section className="w-full bg-[#f8f9fa] py-24 px-4 md:px-12 -mt-[90px] md:mt-0 flex flex-col items-center font-jakarta relative">

      <div className="w-full max-w-[1200px] mb-8 text-center flex flex-col items-center gap-4">
        <span className="font-bold text-sm tracking-widest uppercase text-zinc-500">World-Class</span>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.05] text-zinc-900">
          Luxury Facilities at Peppervine
        </h2>
      </div>

      <div className="w-full max-w-[1500px] bg-[#141414] rounded-[2rem] p-3 md:p-4 flex flex-col lg:flex-row gap-8 lg:gap-16 relative overflow-hidden shadow-2xl mt-8">

        {/* Background Decorative Element */}
        <div className="absolute right-[-10%] bottom-[-20%] opacity-[0.03]  pointer-events-none scale-150">
          <svg width="400" height="400" viewBox="0 0 100 100" fill="currentColor" className="text-white">
            <path d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z" />
            <path d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z" transform="rotate(45 50 50)" />
          </svg>
        </div>

        {/* Left Side: Image Carousel */}
        <div className="w-full lg:w-1/2 relative h-[450px] md:h-[550px] lg:h-[650px] rounded-3xl overflow-hidden bg-zinc-900">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${facilitiesData[current].image})` }}
            />
          </AnimatePresence>
        </div>

        {/* Right Side: Text & Navigation */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between py-6 lg:py-12 pr-4 lg:pr-12 z-10 pl-4 lg:pl-0">

          <div className="flex flex-col gap-8 md:gap-10">
            <AnimatePresence mode="wait">
              <motion.h2
                key={`title-${current}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-white text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] font-meduim tracking-tight"
              >
                {facilitiesData[current].title}
              </motion.h2>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${current}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="text-[#999999] text-lg md:text-xl font-light max-w-md leading-relaxed"
              >
                {facilitiesData[current].desc}
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.button
                key={`btn-${current}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="mt-2 flex items-center justify-between gap-4 border border-[#333333] hover:border-zinc-400 rounded-full px-6 py-3 w-fit text-white transition-colors group"
              >
                <span className="font-light tracking-wide">{facilitiesData[current].btnText}</span>
                <ArrowUpRight size={18} className="text-[#999999] group-hover:text-white transition-colors" />
              </motion.button>
            </AnimatePresence>
          </div>

          {/* Bottom Navigation */}
          <div className="flex items-center justify-between mt-16 lg:mt-0 pt-8 lg:pt-0">
            <span className="text-[#666666] font-medium tracking-widest text-sm flex items-center gap-2">
              <span className="text-white">{current + 1}</span> / {facilitiesData.length}
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-[#333333] flex items-center justify-center text-[#999999] hover:bg-[#222222] hover:text-white hover:border-[#555555] transition-all"
              >
                <ArrowLeft size={18} strokeWidth={1.5} />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-[#333333] flex items-center justify-center text-[#999999] hover:bg-[#222222] hover:text-white hover:border-[#555555] transition-all"
              >
                <ArrowRight size={18} strokeWidth={1.5} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
