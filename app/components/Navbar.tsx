"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';


const navItems = [
  {
    title: "Buy",
    links: [
      { label: "Apply Now", href: "/preapproval/nxt-purchase" },
      { label: "Purchase Rates", href: "/mortgage-rates" },
      {
        label: "Affordability Calculator",
        href: "/how-much-house-can-i-afford",
      },
      { label: "Mortgage Calculator", href: "/mortgage-calculator" },
      { label: "Rent vs Buy Calculator", href: "/rent-vs-buy" },
      { label: "Find an Agent", href: "/find-agent" },
      { label: "VA Loans", href: "/va-loans" },
      { label: "Learning Center", href: "/learning-center" },
    ],
  },
  {
    title: "Refinance",
    links: [
      { label: "Apply Now", href: "/refinance-rates" },
      { label: "Refinance Rates", href: "/refinance-rates" },
      { label: "Cash-Out Refinance Calculator", href: "/refinance-cash-out" },
      { label: "Learning Center", href: "/learning-center" },
    ],
  },
  {
    title: "HELOC",
    links: [
      { label: "Apply Now", href: "/heloc-calculator" },
      { label: "Calculate Your Cash 💵", href: "/heloc-calculator" },
      { label: "HELOC vs Cash-out Refinance", href: "/heloc-vs-cashout" },
      { label: "Learning Center", href: "/learning-center" },
    ],
  },
  {
    title: "Rates",
    links: [
      { label: "Purchase Mortgage Rates", href: "/mortgage-rates" },
      { label: "Refinance Rates", href: "/refinance-rates" },
      { label: "Refinance Cash-Out Rates", href: "/refinance-cash-out-rates" },
      { label: "HELOC Rates", href: "/heloc-rates" },
      { label: "Purchase VA Rates", href: "/va-rates" },
    ],
  },
  {
    title: "Better+",
    links: [
      { label: "Get Insurance", href: "/insurance" },
      { label: "Title and Closing", href: "/title" },
      { label: "Better Attorney Match", href: "/attorney-match" },
      { label: "Learning Center", href: "/learning-center" },
      { label: "Better Agent Match", href: "/agent-match" },
    ],
  },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [phoneOpen, setPhoneOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-white shadow-sm fixed top-0 left-0 z-50"
    >
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link  href="/" className="cursor-pointer">
          <Image
            src="/start/better.svg"
            alt="Better Logo"
            width={120}
            height={40}
            priority
          />
        </Link >

        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          {navItems.map((item) => (
            <li
              key={item.title}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.title)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="hover:text-[#017848] transition">
                {item.title}
              </button>
              <AnimatePresence>
                {openMenu === item.title && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-8 left-0 bg-white shadow-lg rounded-lg py-2 w-64"
                  >
                    {item.links.map((link) => (
                      <Link 
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 hover:bg-gray-100 text-sm"
                      >
                        {link.label}
                      </Link >
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          <div
            className="relative"
            onMouseEnter={() => setPhoneOpen(true)}
            onMouseLeave={() => setPhoneOpen(false)}
          >
            <div className="w-10 h-10 rounded-full border border-[#a7aaa7] flex items-center justify-center cursor-pointer">
              <Image
                src="/start/phone.svg"
                alt="Phone"
                width={20}
                height={20}
              />
            </div>
            <AnimatePresence>
              {phoneOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-12 right-0 bg-white shadow-lg rounded-lg py-2 px-4 w-56 text-sm text-gray-700"
                >
                  📞 Call us anytime at{" "}
                  <Link 
                    href="tel:4155238837"
                    className="text-[#017848] font-semibold"
                  >
                    415-523-8837
                  </Link >
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            href="/account/sign-in"
            className="hidden md:block px-4 py-2 text-gray-700 hover:text-[#017848] font-medium"
          >
            Sign in
          </Link >

          <Link 
            href="/preapproval"
            className="px-6 py-2 bg-[#017848] text-white font-bold rounded-full hover:bg-[#026a3c] transition"
          >
            Continue
          </Link >

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white shadow-lg border-t p-4"
          >
            <ul className="flex flex-col space-y-2 font-medium text-gray-700">
              {navItems.map((item) => (
                <li key={item.title}>
                  <details>
                    <summary className="cursor-pointer py-2">
                      {item.title}
                    </summary>
                    <ul className="ml-4 space-y-2 text-sm">
                      {item.links.map((link) => (
                        <li key={link.href}>
                          <Link  href={link.href}>{link.label}</Link >
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ))}

              <li className="pt-2 text-sm text-gray-600">
                📞 Call us anytime at{" "}
                <Link 
                  href="tel:4155238837"
                  className="text-[#017848] font-semibold"
                >
                  415-523-8837
                </Link >
              </li>

              <li>
                <Link  href="/account/sign-in" className="block py-2">
                  Sign in
                </Link >
              </li>
              <li>
                <Link 
                  href="/preapproval"
                  className="block py-2 bg-[#017848] text-white text-center rounded-full"
                >
                  Continue
                </Link >
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
