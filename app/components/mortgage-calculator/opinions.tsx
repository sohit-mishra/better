"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function Opinions() {
  const opinions = [
    {
      question: "Should I wait for a better market?",
      answer:
        "If you’re buying a home, focus on what works for your budget and lifestyle right now instead of waiting for the ‘perfect’ market. There are programs that can make things more affordable, and if rates drop later, you can always refinance.",
      name: "River Robertson",
      title: "Loan Consultant",
      nmls: "NMLS #1698258",
      image: "/men1.jpeg",
    },
    {
      question: "Is it true rates will drop?",
      answer:
        "We’ve been hearing that for 3+ years, and many buyers have missed out on their dream home waiting for that ‘magic moment.’ Nobody has a crystal ball—if the home and payment fit your budget, it’s the right time.",
      name: "David Schultz",
      title: "Loan Consultant",
      nmls: "NMLS #1952787",
      image: "/men2.jpeg",
    },
    {
      question: "How should buyers handle scary market headlines?",
      answer:
        "Often, the media headlines are inaccurate and sensationalized. Connect with a licensed loan officer who can help you sort through the noise and give you personalized advice based on your unique situation.",
      name: "Libby Owens",
      title: "Senior Loan Consultant",
      nmls: "NMLS #2089666",
      image: "/men3.jpeg",
    },
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
      },
    }),
  };

  return (
    <section className="flex flex-col items-start justify-center gap-2 px-6 py-16 bg-gray-50 max-w-8xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-left md:mx-60 sm:mx-0">
        Expert Opinions
      </h2>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {opinions.map((opinion, index) => (
          <motion.article
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="bg-white rounded-lg p-6 md:p-8 flex flex-col items-start"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 text-left">
              {opinion.question}
            </h3>
            <blockquote className="text-gray-700 text-base md:text-base mb-6 text-left">
              {opinion.answer}
            </blockquote>

            <div className="flex items-center gap-4 mt-4">
              <Image
                src={opinion.image}
                alt={opinion.name}
                width={64}
                height={64}
                className="rounded-full object-cover"
              />
              <div className="flex flex-col">
                <p className="text-gray-900 font-semibold">{opinion.name}</p>
                <p className="text-gray-700 text-sm">{opinion.title}</p>
                <p className="text-gray-500 text-xs">{opinion.nmls}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
