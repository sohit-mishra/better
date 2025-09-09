"use client";

import { motion, Variants } from "framer-motion";

export default function MortgageCalculator() {
  const paragraphs = [
    "A mortgage calculator for home loans can show your true monthly housing costs before you commit to a home loan.",
    "Home shoppers balance a lot of numbers: home prices, loan sizes, down payments, interest rates, property tax rates, mortgage insurance premiums, and so on.",
    "A mortgage payment calculator shows how these variables come together to shape a home's monthly payment.",
    "These tools are invaluable for comparing loan scenarios — and Better makes it easy by doing the heavy lifting for you. With access to an extensive network of investors, Better essentially “shops the market” on your behalf to find competitive rates, saving you the time and stress of lender-hunting. In fact, The Wall Street Journal named Better the ",
  ];

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="flex flex-col items-center justify-center px-6 py-16 bg-gray-50 text-center gap-6 max-w-4xl mx-auto">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-gray-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Mortgage Calculator with PMI & Taxes
      </motion.h1>

      {paragraphs.map((text, index) => (
        <motion.p
          key={index}
          className="text-gray-700 text-base md:text-lg"
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
        >
          {index === 3 ? (
            <>
              {text}
              <span className="font-semibold">Best Lender for Affordability</span> in 2024.
            </>
          ) : (
            text
          )}
        </motion.p>
      ))}
    </section>
  );
}
