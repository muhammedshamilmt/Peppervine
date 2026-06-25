"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Zap, ArrowUpRight, Star } from 'lucide-react';

export default function Packages() {
  const [activeTab, setActiveTab] = useState('standard');

  const packages = {
    standard: {
      title: "Thekkady Weekend Escape",
      desc: "Perfect for a quick escape. Enjoy priority access to our amenities, complimentary breakfast, and a seamlessly relaxing experience.",
      price: "$1,200",
      period: "/stay",
      features: [
        "2 Nights in a Deluxe Ocean-View Suite",
        "Complimentary gourmet daily breakfast",
        "1-hour couples massage at our luxury spa",
        "Welcome drinks & fresh fruit basket on arrival",
        "Flexible check-in and late checkout (up to 2 PM)",
        "Free cancellation up to 48 hours prior",
        "Access to private beach and infinity pool",
        "High-speed Wi-Fi & 24/7 room service"
      ]
    },
    premium: {
      title: "Peppervine Honeymoon Special",
      desc: "The pinnacle of our offerings. An extended stay with unlimited access to all facilities, private dining, and dedicated concierge.",
      price: "$3,500",
      period: "/stay",
      features: [
        "5 Nights in a Premium Panoramic Suite",
        "All-inclusive dining & unlimited premium drinks",
        "Daily spa, wellness access & yoga sessions",
        "Private luxury airport transfers included",
        "Dedicated 24/7 personal butler service",
        "Exclusive guided local tours & experiences",
        "Priority reservations at all resort restaurants",
        "Complimentary late checkout (up to 4 PM)"
      ]
    }
  };

  const currentPackage = packages[activeTab as keyof typeof packages];

  return (
    <section className="w-full bg-white py-24 px-4 md:px-12 flex justify-center font-jakarta">
      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row gap-16 lg:gap-12 justify-between">

        {/* Left Side */}
        <div className="flex flex-col justify-between w-full lg:w-[45%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold  uppercase text-zinc-500 mb-8 block">OUR PACKAGES</span>
            <h2 className="text-5xl md:text-5xl lg:text-[4rem] font-medium tracking-tight text-zinc-900 leading-[1.05] ">
              Exclusive Thekkady<br />Resort Packages
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-16 lg:mt-32"
          >
            <p className="text-zinc-800 font-medium text-sm md:text-base leading-relaxed max-w-sm mb-8">
              "Immerse yourself in the tranquility of nature with our meticulously crafted stay packages at Peppervine, designed for couples, families, and nature lovers."
            </p>
            <div className="flex items-center gap-5">
              <div className="flex -space-x-3">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" alt="Client 1" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" alt="Client 2" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" alt="Client 3" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" alt="Client 4" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center text-[#2E7237]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" className="text-[#2E7237]" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-zinc-400">Trusted by clients worldwide</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col w-full lg:w-[55%]">

          {/* Toggles */}
          <div className="flex self-start lg:self-end gap-2 mb-6">
            <button
              onClick={() => setActiveTab('standard')}
              className={`font-semibold px-4 py-2 rounded-md flex items-center gap-2 text-sm transition-colors ${activeTab === 'standard' ? 'bg-[#2E7237] text-white' : 'bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50'}`}
            >
              <RefreshCw size={14} strokeWidth={2.5} /> Standard
            </button>
            <button
              onClick={() => setActiveTab('premium')}
              className={`font-semibold px-4 py-2 rounded-md flex items-center gap-2 text-sm transition-colors ${activeTab === 'premium' ? 'bg-[#2E7237] text-white' : 'bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50'}`}
            >
              <Zap size={14} strokeWidth={2.5} /> Premium Package
            </button>
          </div>

          {/* Pricing Card */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="border border-zinc-200 p-8 md:p-10 bg-white"
          >
            <h3 className="text-[2.4rem] font-medium text-zinc-900 mb-4 tracking-tight">{currentPackage.title}</h3>
            <p className="text-zinc-500 font-medium leading-relaxed mb-10 max-w-lg">
              {currentPackage.desc}
            </p>

            <div className="flex items-end gap-1 mb-8">
              <span className="text-5xl md:text-[4rem] font-medium text-zinc-900 tracking-tight leading-none">{currentPackage.price}</span>
              <span className="text-2xl font-medium text-zinc-500 mb-1">{currentPackage.period}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-12">
              <button className="bg-[#2E7237] text-white font-semibold px-6 py-3 text-sm flex items-center justify-center gap-2 hover:bg-[#368540] transition-colors w-fit shadow-sm">
                Reserve your spot <ArrowUpRight size={16} />
              </button>
              <span className="text-zinc-500 text-sm font-medium">2 spots open for next month</span>
            </div>

            <div className="w-full h-[1px] bg-zinc-200 mb-8"></div>

            <h4 className="text-zinc-400 text-sm font-medium mb-6">What's included</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
              {currentPackage.features.map((feature, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-zinc-500 font-light">+</span>
                  <span className="text-sm font-medium text-zinc-700 leading-snug">{feature}</span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
