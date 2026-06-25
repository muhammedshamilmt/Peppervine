"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Star, Wind } from 'lucide-react';

export default function Rooms() {
  return (
    <section className="w-full bg-[#f8f9fa] py-24 px-4 md:px-12 flex flex-col items-center font-jakarta">
      <div className="w-full max-w-7xl flex flex-col gap-24">

        {/* Room 1: Suite Room */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <span className="font-bold text-sm tracking-wide uppercase text-zinc-900">Luxury & Comfort</span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.05] text-zinc-900">
              Experience<br />Our Premium<br />Suite Room
            </h2>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed mt-2 font-medium pr-4">
              Our signature Suite Room offers the perfect blend of modern luxury and serene comfort. Designed meticulously to provide you with an unforgettable stay, featuring breathtaking views and top-tier amenities.
            </p>

            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-1.5 rounded-full text-zinc-900"><Check size={14} strokeWidth={3} /></div>
                <span className="font-bold text-sm text-zinc-900">Spacious living area & king-size bed.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-1.5 rounded-full text-zinc-900"><Check size={14} strokeWidth={3} /></div>
                <span className="font-bold text-sm text-zinc-900">Complimentary breakfast & spa access.</span>
              </div>
            </div>

            <button className="bg-zinc-900 text-white rounded-xl px-6 py-4 w-fit font-bold flex items-center gap-3 mt-4 hover:bg-zinc-800 transition-colors shadow-lg">
              Book Suite Room <ArrowRight size={18} />
            </button>
          </motion.div>

          {/* Right Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative h-[500px] md:h-[650px] w-full rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-1000 ease-out" style={{ backgroundImage: 'url("/assets/rooms/img-1.png")' }}></div>

            {/* Glassmorphism Cards Overlay (Bottom Right) */}
            <div className="absolute bottom-6 right-6 flex flex-col gap-3 w-64">
              {/* Card 1 */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-white shadow-2xl">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-medium text-white/80">Room Size</span>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
                    <Star size={18} className="text-primary" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">850</span>
                    <span className="text-sm font-medium text-white/80">sqft</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-white shadow-2xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Wind size={20} className="text-white" />
                </div>
                <span className="text-sm font-bold leading-tight">Breathtaking<br />panoramic views</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Room 2: Deluxe Room */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative h-[500px] md:h-[650px] w-full rounded-[2rem] overflow-hidden shadow-2xl order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-1000 ease-out" style={{ backgroundImage: 'url("/assets/rooms/img-2.png")' }}></div>

            {/* Glassmorphism Cards Overlay (Bottom Left) */}
            <div className="absolute bottom-6 left-6 flex flex-col gap-3 w-64">
              {/* Card 1 */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-white shadow-2xl">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-medium text-white/80">Room Size</span>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
                    <Star size={18} className="text-primary" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">500</span>
                    <span className="text-sm font-medium text-white/80">sqft</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-white shadow-2xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Check size={20} className="text-white" />
                </div>
                <span className="text-sm font-bold leading-tight">Premium comfort<br />& amenities</span>
              </div>
            </div>
          </motion.div>

          {/* Right Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-6 order-1 lg:order-2"
          >
            <span className="font-bold text-sm tracking-wide uppercase text-zinc-900">Relax & Unwind</span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.05] text-zinc-900">
              Discover<br />Our Exclusive<br />Deluxe Room
            </h2>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed mt-2 font-medium pr-4">
              The Deluxe Room is crafted for guests who seek tranquility and style. With contemporary decor and top-notch facilities, it's a sanctuary designed for pure relaxation.
            </p>

            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-1.5 rounded-full text-zinc-900"><Check size={14} strokeWidth={3} /></div>
                <span className="font-bold text-sm text-zinc-900">High-speed WiFi & Smart TV.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-1.5 rounded-full text-zinc-900"><Check size={14} strokeWidth={3} /></div>
                <span className="font-bold text-sm text-zinc-900">24/7 Room service & concierge.</span>
              </div>
            </div>

            <button className="bg-zinc-900 text-white rounded-xl px-6 py-4 w-fit font-bold flex items-center gap-3 mt-4 hover:bg-zinc-800 transition-colors shadow-lg">
              Book Deluxe Room <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
