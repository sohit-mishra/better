"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link';


export default function Footer() {
  return (
    <motion.footer
      className="bg-white text-gray-800 px-6 md:px-40 py-12 mt-10"
      initial={{ y: 50, opacity: 0 }}   
      whileInView={{ y: 0, opacity: 1 }}   
      viewport={{ once: true, amount: 0.3 }} 
      transition={{ duration: 0.8, ease: "easeOut" as const }} 
    >
      <Image
        src="/start/better.svg"
        alt="Better Logo"
        width={120}
        height={40}
      />

      <div className="flex flex-col md:flex-row justify-between gap-10 my-8">
        <div className="flex-1">
          <p className="mt-4 text-base leading-relaxed">
            Better Mortgage Corporation is a direct lender dedicated to
            providing a fast, transparent digital mortgage experience backed by
            superior customer support.
          </p>
        </div>

        <div className="flex-1 text-sm space-y-4 px-0 md:px-8">
          <h3 className="font-bold text-xl mb-2">Contact-us</h3>
          <ul className="space-y-4 text-base mt-4">
            {[
              { text: "Schedule a conversation", href: "#" },
              { text: "hello@better.com", href: "mailto:hello@better.com" },
              { text: "415-523-8837", href: "tel:4155238837" },
              { text: "FAQ", href: "#" },
              { text: "Resources", href: "#" },
            ].map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="relative text-grey-700 hover:text-black-600 transition-colors duration-300
                             after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] 
                             after:bg-black after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 text-sm space-y-4 px-0 md:px-8">
          <h3 className="font-bold text-xl mb-2">Legal & Policies</h3>
          <ul className="space-y-4 text-base mt-4">
            {[
              "Legal",
              "NMLS Consumer Access",
              "Privacy Policy",
              "Terms of Use",
              "Disclosures & Licensing",
              "Affiliated Business",
            ].map((item, idx) => (
              <li key={idx}>
                <Link
                  href="#"
                  className="relative text-grey-700 hover:text-black-600 transition-colors duration-300
                             after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] 
                             after:bg-black after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 mt-4">
            <Image
              src="/start/houseLender.svg"
              alt="Social 1"
              width={30}
              height={30}
            />
            <Image
              src="/start/bussiness.svg"
              alt="Social 2"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-300" />

      <div className="mx-auto text-[14px] text-gray-500 space-y-2 pb-50">
        <p>
          © 2025 Better Home & Finance Holding Company and/or its affiliates.
          Better is a family of companies. Better Mortgage Corporation provides
          home loans; Better Real Estate, LLC and Better Real Estate California
          Inc License #02164055 provides real estate services; Better Cover, LLC
          sells insurance products; and Better Settlement Services provides
          title insurance services; Better Connect, LLC dba Better Attorney
          Match provides real estate attorney connection services; and Better
          Inspect, LLC provides home inspection services. All rights reserved.
        </p>
        <p>
          Home lending products offered by Better Mortgage Corporation. Better
          Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade
          Center, 80th Floor, New York, NY 10007. Loans made or arranged
          pursuant to a California Finance Lenders Law License. Not available in
          all states. Equal Housing Lender. NMLS Consumer Access
        </p>
      </div>
    </motion.footer>
  );
}
