"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FooterTop() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.footer
      className="bg-white text-gray-800 px-6 md:px-20 lg:px-40 py-12 mt-10 border-t border-gray-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-5 gap-12"
        variants={containerVariants}
      >
        <motion.div className="md:col-span-2" variants={itemVariants}>
          <h2 className="text-green-700 text-3xl font-bold">Better</h2>
          <p className="mt-3 text-[18px]">
            Better is a family of companies serving all your homeownership
            needs.
          </p>

          <div className="mt-6 space-y-4 text-lg text-[#4a4d4a]">
            {[
              {
                title: "Mortgage",
                text: "Apply 100% online, with expert customer support.",
              },
              {
                title: "Real Estate",
                text: "Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.",
              },
              {
                title: "Cover",
                text: "Shop, bundle, and save on insurance coverage for home, auto, life, and more.",
              },
              {
                title: "Inspect",
                text: "Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our inspection guarantee.",
              },
              {
                title: "Settlement Services",
                text: "Get transparent rates when you shop for title insurance all in one convenient place.",
              },
            ].map((section, i) => (
              <motion.div key={i} variants={itemVariants}>
                <h3 className="font-semibold text-green-700 text-[18px]">
                  Better <span className="text-[#adb0ac]"> {section.title}</span>
                </h3>
                <p>{section.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="md:col-span-1" variants={itemVariants}>
          <h3 className="font-bold mb-4 text-xl">Resources</h3>
          <ul className="space-y-3 text-[18px] text-[#4a4d4a]">
            {[
              "Home affordability calculator",
              "Mortgage calculator",
              "Free mortgage calculator",
              "Mortgage calculator with taxes",
              "Mortgage calculator with PMI",
              "Rent vs buy calculator",
              "HELOC payment calculator",
              "HELOC vs cash-out refinance calculator",
              "Buy a home",
              "Sell a home",
              "Get home inspection",
            ].map((item, i) => (
              <li key={i}>
                <a href="#" className="hover:text-green-700 no-underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="md:col-span-1" variants={itemVariants}>
          <h3 className="font-bold mb-4 text-xl">Company</h3>
          <ul className="space-y-3 text-[18px] text-[#4a4d4a]">
            {[
              "About Us",
              "Careers",
              "Media",
              "Partner With Us",
              "Learning center",
              "FAQs",
              "Investor Relations",
            ].map((item, i) => (
              <li key={i}>
                <a href="#" className="hover:text-green-700 no-underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="md:col-span-1" variants={itemVariants}>
          <h3 className="font-bold mb-4 text-xl">Contact Us</h3>
          <ul className="space-y-3 text-[18px] text-[#4a4d4a]">
            <li>
              <a
                href="mailto:hello@better.com"
                className="hover:text-green-700"
              >
                hello@better.com
              </a>
            </li>
            <li>
              <a href="tel:4155238837" className="hover:text-green-700">
                415-523-8837
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-700">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-700">
                Glossary
              </a>
            </li>
          </ul>

          <h3 className="font-bold mt-6 mb-3 text-xl">Legal</h3>
          <ul className="space-y-3 text-[18px] text-[#4a4d4a]">
            {[
              "NMLS Consumer Access",
              "Privacy Policy",
              "Terms of Use",
              "Disclosures & Licensing",
              "Affiliated Business",
              "Browser Disclaimer",
            ].map((item, i) => (
              <li key={i}>
                <a href="#" className="hover:text-green-700 no-underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <motion.div className="flex gap-4 mt-6" variants={itemVariants}>
            <Image
              src="/start/houseLender.svg"
              alt="Equal Housing Lender"
              width={40}
              height={40}
            />
            <Image
              src="/start/bussiness.svg"
              alt="Equal Opportunity Housing"
              width={40}
              height={40}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}
