"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Status() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <motion.div
      className="flex flex-col md:flex-row max-w-6xl mx-auto my-20 items-center gap-8 px-6 md:px-20 h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4">The status quo is broken</h1>
        <p className="mb-4 text-lg">
          The traditional processes around homeownership are opaque and
          stressful. Fees aren’t transparent and some are simply outrageous in
          size. Traditional mortgage lending is rife with unnecessary fees and
          slow, painful processes. It’s a system set up to benefit insiders —
          not you. Better.com CEO, Vishal Garg, set out to change that.
        </p>
        <button className="px-6 py-3 bg-green-800 text-white rounded-full hover:bg-green-700 transition focus:outline-none">
          Read Vishal’s story
        </button>
      </div>

      <div
        className="flex-1 relative w-full max-w-md h-[600px] sm:h-[500px] md:h-[500px] lg:h-[500px] cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src="/vishal.jpg"
          alt="Vishal Garg"
          fill
          className="rounded-xl object-cover shadow-lg"
          priority
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute"
            style={{ left: "45%", top: "35%" }}
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="10 8 16 12 10 16 10 8"></polygon>
          </svg>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/1KjYlLBM9j4?autoplay=1"
              title="Vishal Garg Video"
              className="w-full h-full rounded-xl shadow-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </motion.div>
  );
}
