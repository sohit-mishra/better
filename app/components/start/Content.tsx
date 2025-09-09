"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function StartPage() {
  const handleClick = () => {
    setTimeout(() => {
      alert("Button clicked!");
    }, 2000);
  };

  const buttons = [
    { label: "Buying a home", icon: "/start/buyhome.svg" },
    { label: "Refinancing my mortgage", icon: "/start/mortage.svg" },
    { label: "Get cash from my home", icon: "/start/cash-out.svg" },
  ];

  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const },
  };

  return (
    <main className="max-w-4xl mx-auto flex flex-col items-center justify-center mt-32 min-h-screen px-6 md:px-40 py-12">
      <motion.h1
        initial={slideInLeft.initial}
        animate={slideInLeft.animate}
        transition={slideInLeft.transition}
        className="text-2xl md:text-[38px] font-bold mb-12 text-black text-center p-2"
      >
        Hi, I&apos;m Betsy! <br /> What can I help you with?
      </motion.h1>

      <div className="flex flex-col gap-6 w-full mb-12">
        {buttons.map((btn, idx) => (
          <motion.button
            key={idx}
            onClick={handleClick}
            initial={slideInLeft.initial}
            animate={slideInLeft.animate}
            transition={{ ...slideInLeft.transition, delay: idx * 0.2 }}
            className="flex items-center gap-3 text-lg font-bold text-[#292e36] 
              border-0 hover:text-green-800 rounded-lg px-6 py-4 w-full 
              transition-all shadow-[inset_0_0_0_1px_#004733] hover:shadow-[inset_0_0_0_4px_#004733]"
          >
            <Image src={btn.icon} alt={btn.label} width={32} height={32} />
            {btn.label}
          </motion.button>
        ))}
      </div>

      <motion.div
        initial={slideInLeft.initial}
        animate={slideInLeft.animate}
        transition={{ ...slideInLeft.transition, delay: 0.6 }}
        className="flex flex-col md:flex-row gap-10 text-center justify-center items-center w-full"
      >
        <div className="flex flex-col">
          <h2 className="text-4xl text-[#292e36] font-medium">$100B</h2>
          <p className="text-gray-600">home loans funded entirely online</p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-4xl text-[#292e36] font-medium">400K</h2>
          <p className="text-gray-600 p-0">
            Customers who chose a Better Mortgage
          </p>
        </div>
      </motion.div>

      <motion.p
        initial={slideInLeft.initial}
        animate={slideInLeft.animate}
        transition={{ ...slideInLeft.transition, delay: 0.8 }}
        className="pt-10 pb-5"
      >
        After a few questions, you&apos;ll unlock:
      </motion.p>

      <div className="flex flex-col md:flex-col gap-2 text-center">
        {[
          { icon: "/start/rates.svg", text: "Custom mortgage rates" },
          { icon: "/start/offer.svg", text: "Exclusive offers" },
          { icon: "/start/dashboard.svg", text: "A personalized dashboard" },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={slideInLeft.initial}
            animate={slideInLeft.animate}
            transition={{ ...slideInLeft.transition, delay: 0.9 + idx * 0.2 }}
            className="flex items-center gap-2 justify-center"
          >
            <Image
              src={item.icon}
              alt={item.text}
              width={64}
              height={64}
              className="w-5 h-5"
            />
            <p className="text-lg font-medium">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
