import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="w-full bg-white pt-16 pb-32 pl-10 md:py-24  md:mt-0 relative z-20">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-16 lg:gap-24">
        {/* Left Side: Huge Text */}
        <div className="w-full lg:w-[55%]">
          <h2 className="text-5xl md:text-6xl lg:text-[76px] font-medium text-zinc-900 leading-[1.05] tracking-tight">
            Ready to escape the ordinary and experience true luxury?
          </h2>
        </div>

        {/* Right Side: Text & Button */}
        <div className="w-full lg:w-[45%] flex flex-col items-start lg:items-end text-left lg:text-right">
          <p className="text-zinc-500 text-lg md:text-xl leading-relaxed mb-10 lg:ml-auto max-w-md font-medium">
            Book your stay at Peppervine today and immerse yourself in unparalleled comfort. Discover serene landscapes, world-class dining, and unforgettable memories.
          </p>
          <Link
            href="#contact"
            className="group flex items-center gap-4 bg-[#2E7237] text-white pl-8 pr-2.5 py-2.5 rounded-full font-bold text-[17px] hover:bg-[#368540] transition-all shadow-[0_8px_20px_rgba(46,114,55,0.3)] hover:shadow-[0_8px_25px_rgba(46,114,55,0.4)]"
          >
            Book Your Stay
            <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center group-hover:bg-black/50 transition-colors">
              <ArrowUpRight size={20} strokeWidth={2.5} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
