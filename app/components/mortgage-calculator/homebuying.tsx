"use client";

import { motion, Variants } from "framer-motion";

export default function HomeBuying() {
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }, 
    },
  };

  return (
    <motion.section
      className="flex flex-col items-center justify-center gap-6 px-6 py-16 bg-gray-50 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-[#292b29]"
        variants={itemVariants}
      >
        Check your homebuying power
      </motion.h1>

      <motion.button
        className="mt-4 px-18 py-5 bg-green-700 text-white font-semibold rounded-md shadow hover:bg-green-800 transition"
        variants={itemVariants}
      >
        See what I qualify for
      </motion.button>

      <motion.p
        className="text-gray-700 text-base md:text-lg max-w-md"
        variants={itemVariants}
      >
        ...in as little as 3 minutes &mdash; <br /> no credit impact
      </motion.p>
    </motion.section>
  );
}
