"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Kathrine Katija",
    role: "Travel Blogger, Wanderlust",
    quote: "Our stay at Peppervine was absolutely magical, with stunning views and impeccable service.",
    subQuote: "Trust their hospitality, every moment was carefully curated to ensure we had the perfect vacation experience.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
    stars: 5,
  },
  {
    id: 2,
    name: "James Wilson",
    role: "CEO, TechCorp",
    quote: "The perfect corporate retreat. The facilities are world-class and the staff is incredibly accommodating.",
    subQuote: "From the conference rooms to the fine dining, everything was executed with flawless precision and care.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop",
    stars: 5,
  },
  {
    id: 3,
    name: "Sarah Chen",
    role: "Family Vacationer",
    quote: "A true paradise nestled in nature. The most serene and luxurious stay my family has ever experienced.",
    subQuote: "The kids loved the pool, and we loved the spa. Peppervine truly has something special for everyone.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop",
    stars: 5,
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 3000); // changes every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-24 bg-[#fafafa] flex flex-col items-center font-jakarta overflow-hidden">
      {/* Heading Section */}
      <div className="text-center max-w-2xl mb-10">
        <h2 className="text-4xl md:text-5xl lg:text-[56px] text-zinc-900 leading-[1.1] font-medium">
          Testimonials
        </h2>
        <p className="text-zinc-500 text-[17px] leading-relaxed max-w-md mx-auto">
          See how impactful hospitality makes a difference?
        </p>
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row gap-6 items-center md:items-stretch">

        {/* Left Side: Thumbnails */}
        <div className="flex md:flex-col gap-4 justify-center">
          {testimonials.map((test, idx) => (
            <div
              key={test.id}
              onClick={() => setActiveIndex(idx)}
              className={`relative w-24 h-24 md:w-32 md:h-[136px] rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-500 border-[3px] ${activeIndex === idx
                ? 'border-[#dc2626] scale-105 shadow-xl z-10 grayscale-0'
                : 'border-transparent opacity-50 hover:opacity-100 grayscale hover:grayscale-0'
                }`}
            >
              <img
                src={test.image}
                alt={test.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>

        {/* Right Side: Testimonial Card */}
        <div className="flex-1 w-full relative bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] p-10 md:p-14 overflow-hidden min-h-[420px] flex flex-col justify-center">

          {/* Giant Background Quote Icon */}
          <div className="absolute top-[-40px] text-extrabold right-4 text-[600px] leading-none font-serif text-zinc-50 select-none pointer-events-none opacity-80">
            ”
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative z-10 flex flex-col h-full justify-between"
            >
              <div>
                <h3 className="text-3xl md:text-[38px] font-medium text-zinc-900 leading-[1.25] mb-6 max-w-[90%]">
                  {testimonials[activeIndex].quote}
                </h3>
                <p className="text-zinc-500 text-[17px] leading-relaxed mb-12 max-w-lg">
                  {testimonials[activeIndex].subQuote}
                </p>
              </div>

              <div className="mt-auto">
                <h4 className="text-lg font-bold text-zinc-900 mb-1">{testimonials[activeIndex].name}</h4>
                <p className="text-sm text-zinc-500 mb-8">{testimonials[activeIndex].role}</p>

                <div className="flex items-center justify-between w-full">
                  <div className="border-t-[2px] border-dashed border-zinc-200 flex-1 mr-8"></div>
                  <div className="flex gap-1.5">
                    {[...Array(testimonials[activeIndex].stars)].map((_, i) => (
                      <Star key={i} size={20} className="text-[#dc2626] fill-[#dc2626]" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
