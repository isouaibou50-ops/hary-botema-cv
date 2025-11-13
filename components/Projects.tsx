"use client";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

interface Project {
  title: string;
  desc: string;
  stack: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "CreatorAI Hub (Private Client)",
    desc: "Full-stack Next.js + Supabase platform integrating AI workflows and analytics.",
    stack: "Next.js, Supabase, Tailwind, OpenAI API",
  },
  {
    title: "ExpoFit (Private Client)",
    desc: "Cross-platform wellness app with Supabase Auth and storage.",
    stack: "Expo, React Native, Supabase",
  },
  {
    title: "InfluenceLaunch (Internal Tool)",
    desc: "Dashboard for creator campaign management and analytics.",
    stack: "Next.js, Supabase, Vercel",
  },
];

export default function Projects() {
  const [controls, ref] = useScrollReveal();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-extrabold text-center mb-12 bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent"
      >
        Featured Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className={`relative rounded-xl p-6 backdrop-blur-md border border-white/20 dark:border-gray-700 shadow-card transform transition duration-500 ${
              hovered === i ? "scale-105 shadow-xl" : ""
            }`}
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))",
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-2 dark:text-white">{p.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{p.desc}</p>
            <p className="text-xs text-muted dark:text-gray-500 italic">{p.stack}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
