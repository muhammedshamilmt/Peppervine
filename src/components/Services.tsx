"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Flower2, Droplet, Bell, Dumbbell, MapPin } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    title: "Fine Dining",
    desc: "Savor exquisite dishes prepared by our master chefs using the finest locally-sourced ingredients.",
    icon: Utensils,
  },
  {
    id: 2,
    title: "Spa & Wellness",
    desc: "Rejuvenate your body and mind with our world-class massage therapies and personalized treatments.",
    icon: Flower2,
  },
  {
    id: 3,
    title: "Infinity Pool",
    desc: "Take a refreshing dip or lounge by our stunning temperature-controlled pool offering panoramic views.",
    icon: Droplet,
  },
  {
    id: 4,
    title: "Room Services",
    desc: "Enjoy absolute privacy with our 24/7 personalized in-room dining and dedicated concierge.",
    icon: Bell,
  },
  {
    id: 5,
    title: "Fitness Center",
    desc: "Stay active during your stay with our state-of-the-art gym equipment and personal trainers.",
    icon: Dumbbell,
  },
  {
    id: 6,
    title: "Concierge Desk",
    desc: "Let our expert team arrange your local tours, transportation, and special event reservations.",
    icon: MapPin,
  }
];

export default function Services() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-12 flex flex-col items-center font-jakarta">
      <div className="w-full max-w-[1200px] flex flex-col items-center gap-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-500 font-bold text-sm tracking-widest uppercase"
          >
            Experience
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tighter text-zinc-900 leading-[1.05]"
          >
            Premium Resort Services in Thekkady
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 text-lg md:text-xl mt-2 font-medium leading-relaxed"
          >
            Discover world-class hospitality, fine dining, and rejuvenating wellness experiences at Peppervine Resort.
          </motion.p>
        </div>

        {/* Services Grid mimicking the seamless bordered layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full border-t border-l border-zinc-100 mt-4"
        >
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="flex flex-col items-center text-center gap-4 p-8 lg:p-10 border-b border-r border-zinc-100 hover:bg-zinc-50 transition-colors duration-500 group"
              >
                <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-800 group-hover:scale-110 transition-transform duration-500">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold text-zinc-900 tracking-tight">{service.title}</h3>
                  <p className="text-zinc-500 font-medium leading-relaxed text-sm">
                    {service.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </motion.div>

      </div>
    </section>
  );
}
