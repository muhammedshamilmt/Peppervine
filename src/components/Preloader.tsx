"use client";

import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete?: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [text, setText] = useState("Experience the love...");
  const [textOpacity, setTextOpacity] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // 1. Text 1 Fade In
    const timer1 = setTimeout(() => setTextOpacity(1), 100);

    // 2. Text 1 Fade Out
    const timer2 = setTimeout(() => setTextOpacity(0), 800);

    // 3. Change Text to Brand Name & Fade In
    const timer3 = setTimeout(() => {
      setText("PEPPERVINE");
      setTextOpacity(1);
    }, 1100);

    // 4. Text 2 Fade Out
    const timer4 = setTimeout(() => setTextOpacity(0), 2000);

    // 5. Start Exit Animation (Stairs go UP)
    const timer5 = setTimeout(() => {
      setIsExiting(true);
    }, 2300);

    // 6. Finish & Unmount
    const timer6 = setTimeout(() => {
      setShow(false);
      if (onComplete) onComplete();
    }, 3300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, [onComplete]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col pointer-events-none overflow-hidden font-jakarta">

      {/* Content Layer */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <h1
          className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-white transition-opacity duration-500 ease-in-out text-center px-4 font-batica"
          style={{ opacity: textOpacity }}
        >
          {text}
        </h1>
      </div>

      {/* Stairs Background Layer */}
      <div className="absolute inset-0 z-10 flex w-full h-full">
        {/* 8 Columns for the stair effect */}
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="relative h-full flex-1 transform transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] bg-primary border-r border-black last:border-r-0"
            style={{
              // Moves the bar UP towards the top of the screen (-100% Y)
              transform: isExiting ? 'translateY(-100%)' : 'translateY(0%)',
              // Staggered delay creates the stairs shape
              transitionDelay: `${index * 0.04}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Preloader;
