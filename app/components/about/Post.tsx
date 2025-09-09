"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function Post() {
  const posts = [
    {
      title: "The LGBTQ+ homeownership story in numbers",
      description:
        "The fight against LGBTQ+ housing discrimination has turned a corner. Learn your rights with the Better.com infographic on LGBTQ+ homeownership.",
      href: "#",
    },
    {
      title: "Vishal Garg, Founder and CEO of Better",
      description:
        "Better.com CEO Vishal Garg has been interested in tech and lending for years. Here’s how he zeroed in on mortgages and made it easier for people to buy a home.",
      href: "#",
    },
    {
      title: "The Year of the Home: 2020 in Review",
      description:
        "In the socially distanced world of 2020, Better helped 88,100+ new clients navigate their homeownership journey with ease, confidence, and a ton of savings.",
      href: "#",
    },
    {
      title: "What is Better Mortgage?",
      description:
        "We launched Better Mortgage because the mortgage industry is broken. That's why we're making homebuying smarter, faster, and better from beginning to end.",
      href: "#",
    },
    {
      title: "Why I Started Better Mortgage",
      description:
        "Most founders have a story they pitch when asked about what their company does — something that ties their overall vision to an existing problem. But mine is pretty straightforward. In fact, you might have your own version of it, too.",
      href: "#",
    },
    {
      title: "Finding Home: Dan and Louise",
      description:
        "They didn’t think homeownership was in the cards. Now they’re living a life of leisure in Florida.",
      href: "#",
    },
    {
      title: "Finding Home: Taisha",
      description:
        "A doctor and single parent, forced to downsize after divorce, navigates debt and damaged credit to provide a safe home for her family.",
      href: "#",
    },
    {
      title: "How AI Mortgage Lending is Transforming the Home Loan Process",
      description:
        "Explore AI mortgage lending, its challenges, risk management, and how AI is transforming the industry with automation, fraud detection, and AI-powered brokers.",
      href: "#",
    },
    {
      title: "Self-employed? Here’s how to get a mortgage",
      description:
        "Here’s what our underwriters take into consideration when reviewing applications from self-employed borrowers.",
      href: "#",
    },
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-20">
      <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
        Related Posts
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="bg-white border border-gray-200 rounded-3xl p-6 shadow-md hover:shadow-lg transition-transform"
          >
            <h2 className="text-xl font-semibold mb-4">{post.title}</h2>
            <p className="text-gray-700 mb-4">{post.description}</p>
            <Link
              href={post.href}
              className="flex items-center gap-2 text-green-700 font-semibold hover:underline"
            >
              Read now
              <Image src="/leftarrow.svg" alt="arrow" width={16} height={16} />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
