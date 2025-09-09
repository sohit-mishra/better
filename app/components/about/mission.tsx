"use client";

import { motion } from "framer-motion";

export default function Mission() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4 mt-40">
      <motion.h1
        className="text-[#017848] text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Our mission
      </motion.h1>

      <motion.p
        className="text-2xl sm:text-4xl md:text-6xl px-4 md:px-48 mt-5 text-black "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        We’re making homeownership simpler, faster — and most importantly, more accessible for all Americans.
      </motion.p>
    </div>
  );
}
