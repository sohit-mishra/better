"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setActive(true);
    setTimeout(() => {
      alert("Button clicked!");
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}   
      transition={{ duration: 0.8, ease: "easeOut" }} 
      className="fixed top-0 left-0 w-full bg-white z-50 sm:px-0"
    >
      <div className="max-w-7xl flex items-center justify-between py-6 mx-auto shadow-[0_6px_4px_#e8eae6] px-4">
        <Image
          src="/start/logo.svg"
          alt="Better Mortgage Logo"
          width={80}
          height={40}
          priority
        />

        <button
          ref={buttonRef}
          onClick={handleClick}
          className={`flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-800 cursor-pointer rounded-lg px-3 py-2
          ${active ? "border-4 border-[#004733]" : "border border-transparent"}`}
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#cce9d3]">
            <Image
              src="/start/phone.svg"
              alt="Phone Icon"
              width={20}
              height={20}
            />
          </div>
          <span className="hidden sm:inline text-[#292e36] font-bold text-base">
            Need help? Call 415-523-8837
          </span>
        </button>
      </div>
      <div className="flex justify-center gap-2 -mt-4">
        <Image src="/start/home.svg" alt="Home Icon" width={48} height={48} />
      </div>
    </motion.div>
  );
}
