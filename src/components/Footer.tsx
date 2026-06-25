"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const socialIcons = [
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" key="fb"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" key="ig"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" key="tw"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" key="li"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
];

export default function Footer() {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <section className="w-full relative  overflow-hidden font-jakarta  ">
      {/* Footer Card */}
      <motion.div
        className="w-full  mx-auto bg-primary rounded-t-[2rem]  p-10 md:p-16 lg:p-24 shadow-2xl relative z-10  overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">

          {/* Column 1: Brand & Info */}
          <div className="w-full lg:w-[35%] flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-bold tracking-tight text-white">Peppervine</span>
            </div>

            <p className="text-white/80 text-[15px] font-medium leading-relaxed mb-8 max-w-[300px]">
              Peppervine is your ultimate luxury escape. We exist to provide unparalleled comfort and unforgettable experiences.
            </p>

            <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-200 text-white text-sm font-medium hover:text-black hover:bg-white transition-colors mb-8">
              <Mail size={16} />
              hello@peppervine.com
            </button>

            <div className="flex items-center gap-3">
              {socialIcons.map((icon, idx) => (
                <button key={idx} className="w-10 h-10 rounded-xl border border-zinc-200 flex items-center justify-center text-white/80 hover:text-white hover:border-zinc-300 transition-colors">
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="w-full lg:w-[65%] grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">

            {/* Menu */}
            <div className="flex flex-col">
              <h4 className="text-white font-bold mb-6 text-base">Explore</h4>
              <ul className="flex flex-col gap-4">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'About Us', href: '#about' },
                  { name: 'Rooms', href: '#rooms' },
                  { name: 'Facilities', href: '#facilities' },
                  { name: 'Contact', href: '#contact' }
                ].map(item => (
                  <li key={item.name}>
                    <a href={item.href} className="text-white/80 hover:text-white font-medium transition-colors text-[15px]">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col">
              <h4 className="text-white font-bold mb-6 text-base">Legal</h4>
              <ul className="flex flex-col gap-4">
                {[
                  { name: 'Privacy Policy', href: '#' },
                  { name: 'Terms of Service', href: '#' },
                  { name: 'Cookie Policy', href: '#' }
                ].map(item => (
                  <li key={item.name}>
                    <a href={item.href} className="text-white/80 hover:text-white font-medium transition-colors text-[15px]">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location */}
            <div className="flex flex-col">
              <h4 className="text-white font-bold mb-6 text-base">Contact & Location</h4>
              <ul className="flex flex-col gap-4">
                {[
                  { icon: MapPin, text: '123 Peppervine Avenue' },
                  { icon: null, text: 'Munnar, Kerala 12345' },
                  { icon: Phone, text: '+91 123 456 7890' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-white/80 font-medium text-[15px]">
                    {item.icon && <item.icon size={16} />}
                    <span className={!item.icon ? 'ml-6' : ''}>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* HUGE PEPPERVINE TEXT AT THE BOTTOM */}
        <div
          className="mt-10 sm:mt-14 w-full flex justify-center items-end pointer-events-none select-none relative z-0"
          style={{ height: '10vw', minHeight: '80px' }}
        >
          <h1
            className="text-[14vw] font-black leading-[0.75] tracking-tighter text-zinc-300 absolute bottom-[-4vw] sm:bottom-[-2vw]"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 95%)',
              maskImage: 'linear-gradient(to bottom, black 40%, transparent 95%)'
            }}
          >
            PEPPERVINE
          </h1>
        </div>
      </motion.div>
    </section>
  );
}
