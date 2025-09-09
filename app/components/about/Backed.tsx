"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function Backed() {
  const logos = [
    { src: "/Backed/SoftBank.svg", alt: "SoftBank", href: "https://group.softbank/en/philosophy" },
    { src: "/Backed/ally.svg", alt: "Ally", href: "https://www.ally.com" },
    { src: "/Backed/citi.svg", alt: "Citi", href: "https://www.citi.com" },
    { src: "/Backed/pinganbank.svg", alt: "Ping An Bank", href: "https://bank.pingan.com/english/index.shtml" },
    { src: "/Backed/goldman.svg", alt: "Goldman Sachs", href: "https://www.goldmansachs.com" },
    { src: "/Backed/kbcp.svg", alt: "KPCB", href: "https://www.kpcb.com" },
    { src: "/Backed/americanexpress.svg", alt: "American Express", href: "https://www.americanexpress.com/" },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const logoVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <motion.section
      className="px-6 md:px-20 py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <h2 className="font-bold text-textPrimary leading-heading tracking-normal text-xl md:text-2xl text-center">
        Backed by
      </h2>
      <motion.div className="mt-20 flex flex-wrap justify-around items-center gap-10 max-w-screen-2xl mx-auto">
        {logos.map((logo, index) => (
          <motion.a
            key={index}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={logoVariants}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={80}
              className="object-contain"
            />
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
}
