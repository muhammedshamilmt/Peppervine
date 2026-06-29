'use client';

import React from 'react';
import { ArrowRight, Play, ArrowLeft } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function Hero({ startAnimation = true }: { startAnimation?: boolean }) {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.8 } // Delayed to let main text animate first
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  return (
    <div className="w-full px-2 md:px-4  pt-24 pb-2 flex justify-center">
      <div
        className="relative w-full max-w-[1800px]  md:h-[97vh] min-h-[90vh] bg-zinc-900 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl"
      >
        {/* Layer 1: Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/assets/hero/bg.png")' }}
        />

        {/* Layer 2: Animated PEPPERVINE Text */}
        <div className="absolute inset-0 z-10 flex items-start justify-center pt-[15vh] pointer-events-none">
          <motion.h1
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.2 }
              }
            }}
            initial="hidden"
            animate={startAnimation ? "visible" : "hidden"}
            className="text-white/95 font-black text-[18vw] md:text-[15vw] lg:text-[14vw] leading-none tracking-tighter text-center whitespace-nowrap  flex overflow-hidden scale-y-[1.15]"
          >
            {"PEPPERVINE".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 150 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Layer 3: Foreground Hero Image */}
        <div
          className="absolute inset-0 z-20 bg-contain bg-bottom md:mb-[-300px] lg:mb-[-200px]   bg-no-repeat pointer-events-none"
          style={{ backgroundImage: 'url("/assets/hero/hero.png")' }}
        />

        {/* Gradient Overlay for text readability (Layer 4) */}
        <div className="absolute inset-0 z-30 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>

        {/* Bottom Section Wrapper (Layer 5) */}
        <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 right-8 md:right-16 z-40 flex flex-col md:flex-row justify-between items-end gap-8">

          {/* Bottom Left Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={startAnimation ? "visible" : "hidden"}
          >
            <motion.h1 variants={item} className="text-white text-[2.5rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.01] font-light tracking-tight flex flex-col overflow-hidden">
              <span className="block">Experience the</span>
              <span className="block">true essence of</span>
              <span className="block">Thekkady</span>
            </motion.h1>
            <motion.p variants={item} className="text-zinc-200 text-lg  mb-8 max-w-xl">
              A luxurious 4-star sanctuary nestled near the Periyar Wildlife Sanctuary, offering unforgettable moments and world-class hospitality.
            </motion.p>
            <motion.div variants={item} className="flex flex-wrap items-center gap-4">
              <button className="flex items-center gap-3 bg-[#2E7237] text-white px-6 py-3.5 rounded-full font-bold hover:bg-[#368540] transition-colors">
                Book Your Stay
                <div className="bg-white text-[#2E7237] p-1 rounded-full flex items-center justify-center">
                  <ArrowRight size={18} />
                </div>
              </button>

              <button className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-colors">
                <Play size={20} fill="white" className="text-white" />
                Take a Tour
              </button>
            </motion.div>
          </motion.div>

          {/* Bottom Right Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" as const }}
            className="hidden md:flex bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-4 items-center gap-6 w-[450px]"
          >
            {/* Card Image */}
            <div
              className="w-32 h-32 rounded-2xl bg-cover bg-center shrink-0"
              style={{ backgroundImage: 'url("/assets/hero/herocard.png")' }}
            ></div>

            {/* Card Content */}
            <div className="flex-1 flex flex-col justify-between py-1 pr-2">
              <div>
                <h3 className="text-white font-medium text-xl mb-2">Luxury Suites & Spa</h3>
                <p className="text-zinc-400 text-sm leading-snug">
                  Immerse yourself in panoramic views of majestic mountains and spice plantations.
                </p>
              </div>

              {/* Pagination/Arrows */}
              <div className="flex items-center gap-2 mt-4">
                <button className="bg-white text-zinc-900 p-2 rounded-full hover:bg-zinc-200 transition-colors">
                  <ArrowLeft size={16} />
                </button>
                <button className="bg-[#2E7237] text-white p-2 rounded-full hover:bg-[#368540] transition-colors">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
