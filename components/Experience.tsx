"use client";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Experience() {
  const [controls, ref] = useScrollReveal();

  const experiences = [
    {
      role: "Senior Frontend Developer / AI Automation Engineer",
      company: "Ai Drip – Cape Town",
      period: "Jan 2024 – Present",
      details:
        "Built full-stack apps with React, Next.js; integrated AI automation via V0, Lovable, and n8n.",
    },
    {
      role: "Frontend Developer (Private Clients)",
      company: "Freelance / Remote",
      period: "2020 – 2023",
      details:
        "Delivered full-stack web and mobile apps for private clients under NDA using Next.js, Expo, and Supabase.",
    },
  ];

  return (
    <motion.section
      id="experience"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.7 }}
      className="py-20 px-6 max-w-4xl"
    >
      <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
        Experience
      </h2>
      {experiences.map((e) => (
        <div
          key={e.role}
          className="mb-8 p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-card hover:shadow-xl transition transform duration-300 hover:-translate-y-1"
        >
          <h3 className="text-xl font-semibold">{e.role}</h3>
          <p className="text-gray-500">{e.company}</p>
          <p className="text-sm text-gray-400 mb-2">{e.period}</p>
          <p className="text-gray-600 dark:text-gray-400">{e.details}</p>
        </div>
      ))}
    </motion.section>
  );
}
