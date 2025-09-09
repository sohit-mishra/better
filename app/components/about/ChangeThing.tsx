"use client";

import { motion } from "framer-motion";

export default function ChangeThing() {
  return (
    <motion.div
      className="bg-[#017848] w-full py-20 px-6 md:px-20 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          How we’re changing things
        </h1>

        <p className="mb-4 text-lg md:text-[18px]">
          Homeownership is a huge part of our economy. Housing overall is a $33
          trillion business, and mortgages account for $15 trillion. Yet home
          finance operates in the same way it has for decades — through opaque
          systems and expensive intermediaries whose interests are misaligned with
          consumers’.
        </p>

        <p className="text-lg md:text-[18px]">
          That’s why Better.com is redefining the homeownership process from the
          ground up. We’re using technology to make it faster and more efficient,
          and humans to help make it friendly and enjoyable.
        </p>
      </div>
    </motion.div>
  );
}
