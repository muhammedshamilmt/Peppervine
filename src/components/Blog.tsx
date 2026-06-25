"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CornerBrackets = () => (
  <div className="absolute inset-4 pointer-events-none opacity-80 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-100">
    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white"></div>
    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white"></div>
    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white"></div>
    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white"></div>
  </div>
);

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Wildlife Spotting Tips in Periyar Tiger Reserve",
    tag: "Wildlife",
    tagColor: "#5d7052",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 2,
    title: "A Culinary Journey: Exploring Authentic Kerala Cuisine",
    tag: "Dining",
    tagColor: "#c27056",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    title: "Why Thekkady is the Ultimate Honeymoon Destination",
    tag: "Travel",
    tagColor: "#4a66cc",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
  }
];

export default function Blog() {
  return (
    <section className="w-full bg-white py-24 px-4 md:px-12 flex flex-col items-center font-jakarta">
      <div className="w-full max-w-[1300px] flex flex-col gap-12">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 max-w-2xl"
          >
            <span className="bg-zinc-100 text-zinc-800 text-xs font-bold px-4 py-1.5 rounded-full w-fit tracking-wide">Blog</span>
            <h2 className="text-5xl md:text-[4rem] font-bold tracking-tighter text-zinc-900 leading-[1.05]">
              The Peppervine Journal
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl font-medium mt-1 leading-relaxed">
              Discover the hidden gems of Thekkady, travel tips, and stories<br className="hidden md:block" /> from the heart of Kerala's most loved 4-star resort.
            </p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-zinc-800 transition-colors shadow-lg"
          >
            View all posts
          </motion.button>
        </div>
        {/* 
        Featured Post Card
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full bg-[#f8f9fa] rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-sm border border-zinc-100"
        >
          Left Featured Image
          <div className="w-full md:w-1/2 relative h-[350px] md:h-auto group overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=2000")' }}
            />
            <CornerBrackets />
          </div>

          Right Featured Content
          <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <span className="bg-black text-white text-xs font-bold px-4 py-1.5 rounded-full w-fit mb-6 tracking-wide">Must Read</span>

            <h3 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tighter leading-[1.05] text-zinc-900 mb-6">
              Full-Frame vs. Crop Sensor: Which for Photography?
            </h3>

            <p className="text-zinc-500 text-lg font-medium leading-relaxed mb-16">
              An honest look at the real-world differences between these camera systems to help you choose what's actually right for your photography needs.
            </p>

            <div className="flex justify-between items-center mt-auto pt-2">
              <span className="text-zinc-500 font-semibold text-sm">By August Renner ©</span>
              <span className="bg-[#5c2a3d] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wide">Gear</span>
            </div>
          </div>
        </motion.div> */}

        {/* Sub Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-2">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col gap-5 group cursor-pointer"
            >
              <div className="relative w-full h-[260px] rounded-3xl overflow-hidden bg-zinc-100 shadow-sm">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${post.image})` }}
                />

                <CornerBrackets />

                {/* Center cross/plus icon appearing on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white font-light text-2xl shadow-lg">
                    +
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-start gap-4 px-1">
                <h4 className="text-lg font-bold text-zinc-900 leading-snug group-hover:opacity-70 transition-opacity max-w-[80%]">
                  {post.title}
                </h4>
                <span
                  className="text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wide shrink-0 mt-1 shadow-sm"
                  style={{ backgroundColor: post.tagColor }}
                >
                  {post.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
