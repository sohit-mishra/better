"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2014",
    description:
      "After Vishal Garg’s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.",
  },
  {
    year: "2015",
    description:
      "Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).",
  },
  {
    year: "2016",
    description:
      "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.",
  },
  {
    year: "2017",
    description: "Better expands into the real estate market with Better Real Estate.",
  },
  {
    year: "2018",
    description:
      "Better Mortgage partners with Ally Bank to build Ally powered by Better.",
  },
  {
    year: "2019",
    description:
      "Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.",
  },
  {
    year: "2022",
    description:
      "Better Mortgage becomes the first fintech to fund $100B home loans entirely online.",
  },
  {
    year: "2023",
    description: (
      <>
        Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to{" "}
        <a href="/with/one-day-mortgage-terms" className="underline">
          full mortgage Commitment Letter within 24 hours
        </a>{" "}
        vs. typical industry process of 30+ days.
      </>
    ),
  },
  {
    year: "2023",
    description: "Better Mortgage launches the fully digital 3-day HELOC².",
  },
  {
    year: "2023",
    description: "Better Mortgage launches One Day Verified Approval Letter.",
  },
  {
    year: "Today",
    description: (
      <>
        You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.
        <a
          href="/start"
          className="rounded-full bg-[#017848] text-white px-10 py-2 text-base text-center font-bold select-none outline-none transition duration-300 ease-universal hover:bg-accentPrimary focus:bg-accentPrimary active:bg-accentPrimary mt-4 flex w-fit"
        >
          Get started
        </a>
      </>
    ),
  },
];

export default function Timeline() {
  return (
    <section className="m-auto max-w-screen-xl px-4 pb-20">
      <h2 className="font-bold text-textPrimary text-2xl md:text-4xl mb-16 text-center">
        Company timeline
      </h2>

      <div className="relative m-auto max-w-3xl before:absolute before:left-1/2 before:top-0 before:h-full before:w-1 before:bg-[#e8eae6] before:-translate-x-1/2">
        {timeline.map((item, idx) => (
          <motion.div
            key={idx}
            className="relative flex flex-col items-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Year bubble */}
            <div className="inline-block rounded-full px-6 py-2 mb-4 bg-[#017848] text-white font-bold text-lg md:text-xl">
              {item.year}
            </div>

            {/* Description card */}
            <motion.div
              className={`rounded-lg p-5 bg-[#dfe0dc] w-full md:w-[calc(50%-2rem)] shadow-md ${
                idx % 2 === 0
                  ? "md:mr-auto md:text-right"
                  : "md:ml-auto md:text-left"
              }`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-base text-gray-700">{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
