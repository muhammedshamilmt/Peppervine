"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const roomsData = [
  {
    id: 1,
    image: "/assets/rooms/img-1.png",
    title: "We offer top-quality Suite Rooms for individual or group stays.",
    desc: "Our rooms are designed to help you relax at your best and enjoy unparalleled comfort.",
    btnText: "Book Suite Room"
  },
  {
    id: 2,
    image: "/assets/rooms/img-2.png",
    title: "Discover our exclusive Deluxe Room for pure relaxation.",
    desc: "Crafted for guests who seek tranquility, style, and top-notch facilities.",
    btnText: "Book Deluxe Room"
  }
];

export default function Rooms() {
  return (
    <section className="w-full bg-[#f4f4f5] py-32 px-4 md:px-12 flex flex-col items-center font-jakarta relative pb-64">

      <div className="w-full max-w-[1200px] mb-12">
        <h2 className="text-5xl md:text-7xl font-light tracking-tight text-zinc-900">Our <span className="font-bold text-primary bg-black px-2 rounded-xl">Rooms</span></h2>
      </div>

      <div className="w-full max-w-[1200px] flex flex-col gap-6 relative">
        {roomsData.map((room, index) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="sticky w-full bg-[#141414] rounded-[2rem] p-3 md:p-4 flex flex-col lg:flex-row gap-8 lg:gap-16 relative overflow-hidden shadow-2xl"
            style={{
              top: `calc(8rem + ${index * 2}rem)`, // Creates the visual stacking offset
              zIndex: index + 10
            }}
          >
            {/* Background Decorative Element */}
            <div className="absolute right-[-10%] bottom-[-20%] opacity-[0.03] pointer-events-none scale-150">
              <svg width="400" height="400" viewBox="0 0 100 100" fill="currentColor" className="text-white">
                <path d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z" />
                <path d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z" transform="rotate(45 50 50)" />
              </svg>
            </div>

            {/* Left Side: Image */}
            <div className="w-full lg:w-1/2 relative h-[450px] lg:h-[600px] rounded-3xl overflow-hidden bg-zinc-900">
              <div
                className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-1000 ease-out"
                style={{ backgroundImage: `url(${room.image})` }}
              />
            </div>

            {/* Right Side: Text & Data */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between py-6 lg:py-12 pr-4 lg:pr-12 z-10 pl-4 lg:pl-0">

              <div className="flex flex-col gap-8 md:gap-10">
                <h2 className="text-white text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] font-light tracking-tight">
                  {room.title}
                </h2>

                <p className="text-[#999999] text-lg md:text-xl font-light max-w-md leading-relaxed">
                  {room.desc}
                </p>

                <button className="mt-2 flex items-center justify-between gap-4 border border-[#333333] hover:border-zinc-400 rounded-full px-6 py-3 w-fit text-white transition-colors group">
                  <span className="font-light tracking-wide">{room.btnText}</span>
                  <ArrowUpRight size={18} className="text-[#999999] group-hover:text-white transition-colors" />
                </button>
              </div>

              {/* Bottom Info */}
              <div className="flex items-center justify-between mt-16 lg:mt-0 pt-8 lg:pt-0">
                <span className="text-[#666666] font-medium tracking-widest text-sm flex items-center gap-2">
                  <span className="text-white">{index + 1}</span> / {roomsData.length}
                </span>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
