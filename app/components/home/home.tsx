"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="w-full mx-auto mt-15 px-6 pt-20 pb-0 bg-[#04593c] text-center flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-6xl lg:text-[78px] text-white font-bold leading-tight mb-6"
      >
        The first <br />
        <span className="bg-[linear-gradient(116deg,_#00FF80_16.51%,_#A987FF_54.85%,_#EA06FF_94.62%)] bg-clip-text text-transparent">
          AI-powered
        </span>{" "}
        Mortgage
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-2xl lg:text-3xl text-white mb-6 max-w-4xl"
      >
        Our tech unlocks lower rates, higher chances of approval, and a
        lightning-fast process from approval to closing. Over $100 billion
        funded.
      </motion.p>

      <motion.a
        href="/preapproval"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="inline-block bg-[#1ee07f] text-[#004733] font-bold rounded-full px-8 py-4 mt-4 hover:bg-[#00c96a] transition text-lg"
      >
        Start my pre-approval
      </motion.a>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-sm text-white mt-2"
      >
        ⏱ 3 min | No hard credit check
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-10 w-full flex justify-center"
      >
        <Image
          src="/home.webp"
          alt="Better Mortgage Home"
          width={1000}
          height={600}
          className="rounded-lg w-full max-w-4xl h-auto"
          priority
        />
      </motion.div>
    </main>
  );
}
