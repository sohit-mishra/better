"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Trustpilot() {
  const videos = [
    {
      name: "Paul",
      url: "https://www.youtube.com/embed/pKy7cNtaJ0c?autoplay=1&mute=0&controls=1&playsinline=1&rel=0&modestbranding=1",
      thumbnail: "/paul.webp",
    },
    {
      name: "Amanda",
      url: "https://www.youtube.com/embed/tF60HQo3vhU?autoplay=1&mute=0&controls=1&playsinline=1&rel=0&modestbranding=1",
      thumbnail: "/Amanda.webp",
    },
    {
      name: "Tiara",
      url: "https://www.youtube.com/embed/Mhkf_1o4v7s?autoplay=1&mute=0&controls=1&playsinline=1&rel=0&modestbranding=1",
      thumbnail: "/tiara.webp",
    },
  ];

  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleThumbnailClick = (index: number) => {
    setActive(index);
    setIsPlaying(false);
  };

  return (
    <motion.section
      className="bg-[#f9f9f6] py-20 px-6 md:px-20 flex flex-col md:flex-row gap-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
     <div className="flex-1 flex flex-col items-center md:items-start gap-6 px-4 sm:px-6 md:px-10  w-full">
  <div className="relative w-full max-w-[400px] aspect-[9/16] md:ml-40 sm:max-w-[360px] md:max-w-[400px] rounded-xl shadow-lg overflow-hidden cursor-pointer">
    {!isPlaying ? (
      <div
        onClick={() => setIsPlaying(true)}
        className="absolute inset-0 flex items-center justify-center bg-black"
      >
        <Image
          src={videos[active].thumbnail}
          alt={`${videos[active].name} thumbnail`}
          fill
          className="object-cover rounded-xl"
        />
        <div className="absolute w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-green-700"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6 4l12 6-12 6V4z" />
          </svg>
        </div>
      </div>
    ) : (
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={videos[active].url}
        title={videos[active].name}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    )}
  </div>

  <div className="flex mt-4 flex-wrap justify-center gap-4 w-full">
    {videos.map((v, i) => (
      <button
        key={i}
        onClick={() => handleThumbnailClick(i)}
        aria-label={`Watch ${v.name}'s video`}
        className={`px-5 py-2 rounded-full transition border ${
          active === i
            ? "border-4 border-green-700 bg-green-50 text-green-700 font-medium"
            : "border-gray-300 hover:border-green-600 text-gray-700"
        }`}
      >
        {v.name}
      </button>
    ))}
  </div>
</div>


      <div className="flex-1 flex flex-col justify-center text-center md:text-left mt-10 md:mt-0 px-4 sm:px-6 md:px-10">
        <h2 className="text-2xl sm:text-3xl md:text-[4vw] font-bold text-gray-900 leading-tight">
          Find out why <br /> we’re better.
        </h2>

        <button className="mt-6 px-6 sm:px-8 py-3 sm:py-4 bg-green-800 text-white rounded-full font-medium hover:bg-green-700 transition w-fit mx-auto md:mx-0">
          See all our stories
        </button>

        <div className="mt-4 flex items-center justify-center md:justify-start gap-2">
          <Image
            src="/trustpilot.svg"
            alt="Trustpilot"
            width={100}
            height={20}
          />
          <span className="text-base text-black pt-2">
            Excellent <span className="font-semibold">4.4 out of 5</span>
          </span>
        </div>
      </div>
    </motion.section>
  );
}
