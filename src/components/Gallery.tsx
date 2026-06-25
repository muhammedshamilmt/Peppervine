"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Image as ImageIcon, MapPin } from 'lucide-react';

const galleryImages = [
  "https://images.unsplash.com/photo-1542314831-c6a4d14b4cc3?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=600",
];

const duplicatedImages = [...galleryImages, ...galleryImages];

export default function Gallery() {
  return (
    <section className="w-full py-24 bg-white -mt-24  md:mt-0 flex flex-col items-center font-jakarta overflow-hidden">

      {/* Top Heading Section */}
      <div className="flex flex-col items-center text-center px-6 mb-16 max-w-3xl mx-auto">

        {/* Top Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border  bg-primary text-white text-xs font-semibold mb-8">
          <Camera size={14} /> Unforgettable Memories
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl lg:text-[64px] font-medium text-zinc-900 leading-[1.1] mb-6 tracking-tight">
          Discover the <span className="text-white px-1 py-1 bg-primary rounded-2xl ">Beauty</span> of Peppervine
        </h2>

        {/* Subtitle */}
        <p className="text-zinc-500 text-[17px] leading-relaxed mb-10 mx-auto">
          Peppervine is a sanctuary of elegance. Browse our curated gallery to see the breathtaking views, luxurious rooms, and world-class amenities that await you.
        </p>

        {/* Button */}
        <button className="flex items-center gap-3 pl-2 pr-6 py-2 bg-[#1a1a1a] text-white rounded-xl hover:bg-black transition-colors shadow-lg">
          <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center text-white shadow-inner">
            <ImageIcon size={18} strokeWidth={2.5} />
          </div>
          <span className="font-semibold text-[15px]">View Full Gallery</span>
        </button>
      </div>

      {/* Marquee Section */}
      <div className="w-full relative overflow-hidden flex whitespace-nowrap py-4">

        {/* Left and Right Gradients to fade edges */}
        {/* <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div> */}

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          className="flex gap-4 md:gap-6 px-3"
        >
          {duplicatedImages.map((src, i) => (
            <div
              key={i}
              className="relative w-[260px] h-[360px] md:w-[320px] md:h-[440px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shrink-0 group cursor-pointer"
            >
              <img
                src={src}
                alt="Gallery moment"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Glassmorphic Top Overlay */}
              <div className="absolute top-4 left-4 right-4 rounded-[1rem] bg-black/20 backdrop-blur-md border border-white/20 text-white text-xs px-4 py-3 flex items-center gap-2 shadow-sm transition-opacity">
                <div className="w-5 h-5 rounded-full bg-black/40 flex items-center justify-center shrink-0">
                  <MapPin size={10} className="text-white" />
                </div>
                <span className="font-medium tracking-wide truncate">Peppervine Moments</span>
              </div>

            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
