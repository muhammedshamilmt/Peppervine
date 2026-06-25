"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';

const faqs = [
  {
    question: "What makes Peppervine one of the best Resorts in Thekkady?",
    answer: "Peppervine stands out for its exceptional blend of modern luxury and deep connection to nature. We offer world-class hospitality, premium amenities, a multi-cuisine restaurant, and an award-winning spa, all while being perfectly situated near the Periyar Tiger Reserve."
  },
  {
    question: "Can I expect scenic views from the Peppervine Resort?",
    answer: "Absolutely. Our resort is uniquely designed to offer panoramic views of the lush green landscapes, spice plantations, and the majestic mountains of Thekkady right from the comfort of your room."
  },
  {
    question: "What types of rooms are available at Peppervine Resort in Kumily?",
    answer: "We offer a variety of luxurious accommodations including Deluxe Rooms, Premium Rooms, and expansive Suites. Each room is meticulously designed with modern aesthetics and premium comforts to ensure a relaxing stay."
  },
  {
    question: "Is Peppervine suitable for couples looking for privacy and tranquillity?",
    answer: "Yes, Peppervine is an idyllic sanctuary for couples. Our secluded location, private balconies, serene spa treatments, and candlelit dining options provide the perfect atmosphere for romance and peace."
  },
  {
    question: "Is the Peppervine Resort in Kumily suitable for families?",
    answer: "Peppervine is extremely family-friendly. We offer spacious family suites, a beautiful swimming pool, indoor games, and customized nature walks that children and adults can enjoy together."
  },
  {
    question: "Is Peppervine the best choice for a honeymoon in Thekkady?",
    answer: "Yes, our resort is highly sought after by honeymooners. We provide special honeymoon packages that include flower decorations, romantic private dinners, couple spa therapies, and much more to make your honeymoon unforgettable."
  },
  {
    question: "What makes Peppervine different from other 4-star Resorts in Thekkady?",
    answer: "What truly sets us apart is our personalized service and modern contemporary architecture blended seamlessly with the tropical landscape. Our attention to detail ensures that every guest experiences the highest standard of 4-star luxury."
  },
  {
    question: "What types of luxurious accommodations does Peppervine offer?",
    answer: "Our luxurious accommodations range from well-appointed Deluxe rooms with nature views to our lavish Peppervine Suites, which feature separate living areas, premium toiletries, plush bedding, and unmatched scenic vistas."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full rounded-[3rem] px-6 md:px-12 py-16 md:py-20 max-w-[1400px] mx-auto -mt-[90px] md:mt-12 mb-12 relative overflow-hidden font-jakarta">
      {/* Background subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[600px] bg-gradient-radial from-zinc-100/80 via-zinc-50/40 to-transparent opacity-80 blur-3xl pointer-events-none"></div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10">
        {/* Left Column */}
        <div className="w-full lg:w-[40%] flex flex-col">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2.5 h-2.5 rounded-full bg-[#2E7237]"></div>
            <span className="text-[15px] text-zinc-500 font-bold tracking-wide">FAQs</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-medium text-zinc-900 leading-[1.15] tracking-tight mb-12">
            Frequently Asked<br />Questions
          </h2>

          {/* Booking Card */}
          <div className="bg-white rounded-[2rem] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-zinc-100 relative overflow-hidden mt-auto">
            <div className="absolute -right-12 -top-12 w-40 h-40 bg-gradient-to-br from-[#2E7237]/20 to-transparent rounded-full blur-2xl opacity-60 pointer-events-none"></div>

            <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border-[3px] border-white shadow-md relative z-10 bg-zinc-100">
              <img src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=150&auto=format&fit=crop" alt="Concierge" className="w-full h-full object-cover" />
            </div>

            <h3 className="text-2xl md:text-[28px] font-medium text-zinc-900 mb-4 tracking-tight relative z-10">
              Need more help?
            </h3>

            <p className="text-[15px] text-zinc-500 leading-[1.6] mb-8 relative z-10 max-w-[280px] font-medium">
              If you have any questions, just contact our concierge team before booking your stay with us.
            </p>

            <button className="w-full py-4 bg-[#2E7237] hover:bg-[#368540] text-white rounded-[1.25rem] font-bold text-[15px] transition-colors shadow-lg shadow-[#2E7237]/20 relative z-10">
              Contact Concierge
            </button>
          </div>
        </div>

        {/* Right Column (Accordion) */}
        <div className="w-full lg:w-[60%] flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-[1.25rem] p-5 md:p-6 cursor-pointer border border-zinc-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                onClick={() => toggleOpen(idx)}
              >
                <div className="flex justify-between items-center gap-6">
                  <h3 className="text-[16px] md:text-[18px] font-medium text-zinc-800 tracking-tight leading-snug">
                    {faq.question}
                  </h3>
                  <div className="shrink-0 text-zinc-800">
                    {isOpen ? <X size={20} strokeWidth={2} /> : <Plus size={20} strokeWidth={2} />}
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-[15px] text-zinc-500 leading-relaxed max-w-[95%] font-medium">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
