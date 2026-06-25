'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const isContactPage = pathname === '/contact';

  // Text colors:
  // - Always dark on mobile (since bg is always white)
  // - On desktop, dark if scrolled (white pill) OR not on the dark contact hero.
  const isDarkTextDesktop = isScrolled || !isContactPage;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4 md:pt-6 pointer-events-none">

      {/* Navbar Container */}
      <nav
        className={`pointer-events-auto relative w-full max-w-[1400px] mx-auto flex items-center justify-between transition-all duration-300 z-50
          ${isScrolled
            // Scrolled: Floating pill on ALL screens (rounded, not touching ends)
            ? 'bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-[1rem] px-6 md:px-8 py-4'
            // Not scrolled: Mobile is still a white pill. Desktop is transparent & edge-to-edge.
            : 'bg-white rounded-[1rem]  px-6 py-4 md:bg-transparent md:shadow-none md:rounded-none md:px-4 md:py-2'
          }
        `}
      >

        {/* Logo */}
        <Link href="/" className="flex items-center z-50 group">
          <img
            src="/assets/logomain.png"
            alt="Peppervine Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Home', path: '#' },
            { name: 'About Us', path: '#' },
            { name: 'Rooms', path: '#' },
            { name: 'Facilities', path: '#' },
            { name: 'Contact', path: '#' }
          ].map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`font-medium text-[15px] transition-colors ${isActive
                  ? (isDarkTextDesktop ? 'text-zinc-900' : 'text-white')
                  : (isDarkTextDesktop ? 'text-zinc-600 hover:text-zinc-900' : 'text-white/80 hover:text-white')
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <button className={`px-6 py-2.5 rounded-full font-medium text-[15px] transition-all shadow-md ${!isDarkTextDesktop
            ? 'bg-white text-zinc-900 hover:bg-white/90'
            : 'bg-primary text-primary-foreground hover:bg-primary-hover'
            }`}>
            Book Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-zinc-900 hover:text-zinc-600 transition-colors focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Dropdown */}
      <div className={`fixed inset-0 bg-[#fcfcfd] z-40 flex flex-col pt-32 px-6 transition-transform duration-300 md:hidden pointer-events-auto overflow-y-auto pb-10 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="flex flex-col gap-6 mt-4">
          {[
            { name: 'Home', path: '#' },
            { name: 'About Us', path: '#' },
            { name: 'Rooms', path: '#' },
            { name: 'Facilities', path: '#' },
            { name: 'Contact', path: '#' }
          ].map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-[32px] font-bold tracking-tight transition-colors ${pathname === link.path ? 'text-zinc-900' : 'text-zinc-500'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-auto pt-12">
            <button className="w-full bg-primary text-primary-foreground px-6 py-4 rounded-full font-bold text-lg shadow-md hover:bg-primary-hover transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
