"use client";

import React from 'react';
import { ArrowUpRight, Heart, Users, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section className="w-full bg-white text-zinc-900 py-32 px-4 md:px-12 -mt-[90px] md:mt-0 flex flex-col items-center justify-center relative h-[80vh] font-jakarta">

      {/* Top Header */}
      <div className="w-full max-w-7xl flex justify-between items-center mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center bg-zinc-100 rounded-full pr-5 p-1 gap-4"
        >
          <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-medium text-lg">01</div>
          <span className="font-medium text-lg">About</span>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          href="#"
          className="flex items-center gap-2 text-lg font-medium hover:opacity-70 transition-opacity"
        >
          Learn more <ArrowUpRight size={20} />
        </motion.a>
      </div>

      {/* Floating Decor (Background) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-32 left-[20%] w-32 h-32 bg-primary/20 rounded-[2rem] -rotate-12 blur-3xl pointer-events-none"
      />

      {/* Main Text Area */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center text-4xl md:text-5xl lg:text-[3rem] leading-[1.2] font-medium tracking-tight relative z-10 mx-auto"
      >
        <motion.span variants={itemVariants} className="inline-block mr-2">We provide exceptional stacation</motion.span>

        <motion.span variants={badgeVariants} className="inline-flex items-center justify-center bg-zinc-100 rounded-full w-12 h-12 md:w-14 md:h-14 mx-2 align-middle overflow-hidden shadow-sm border border-zinc-200">
          <Heart className="text-zinc-700" size={24} />
        </motion.span>

        <motion.span variants={itemVariants} className="inline-block ml-2 mr-2">experience at</motion.span>

        <br className="hidden md:block" />

        <motion.span variants={itemVariants} className="inline-block mr-2">over</motion.span>

        <motion.span variants={badgeVariants} className="inline-flex items-center gap-2 bg-primary text-white px-4 py-1 md:px-5 md:py-1.5 rounded-full mx-2 align-middle shadow-md font-medium text-lg md:text-xl rotate-[-4deg]">
          <Users size={18} className="primary" />
          20+
        </motion.span>

        <motion.span variants={itemVariants} className="inline-block ml-2 mr-2">locations, catering to players of all skill levels. From</motion.span>

        <br className="hidden md:block" />

        <motion.span variants={itemVariants} className="inline-block mr-2">cutting-edge facilities in</motion.span>

        <motion.span variants={badgeVariants} className="inline-flex items-center justify-center bg-primary text-white w-10 h-10 md:w-14 md:h-14 rounded-full mx-2 align-middle shadow-md rotate-[4deg]">
          <MapPin size={20} className="fill-primary" />
        </motion.span>

        <motion.span variants={itemVariants} className="inline-block ml-2 mr-2">bustling cities to picturesque</motion.span>

        <br className="hidden md:block" />

        <motion.span variants={itemVariants} className="inline-block mr-2">fields in serene settings to create the</motion.span>

        <motion.span
          variants={{
            hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 0, y: 30 },
            visible: { clipPath: 'inset(0 0% 0 0)', opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
          }}
          className="text-white font-medium bg-primary px-2 py-2 mb-2 rounded-md inline-block ml-2"
        >
          perfect environment for
        </motion.span>

        <br className="hidden md:block" />

        <motion.span
          variants={{
            hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 0, y: 30 },
            visible: { clipPath: 'inset(0 0% 0 0)', opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
          }}
          className="text-white font-medium bg-primary px-2 py-2 rounded-md inline-block"
        >
          honing your skills and enjoying the game you love.
        </motion.span>
      </motion.div>


    </section>
  );
}
