"use client";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const [controls, ref] = useScrollReveal();

  return (
    <motion.section
      id="about"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.7 }}
      className="py-20 px-6 max-w-3xl text-center"
    >
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
        About Me
      </h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        I’m a senior full-stack JavaScript engineer with over 5 years of experience building
        performant web and mobile applications using React, Next.js, Expo, and Supabase.
        I specialize in AI-assisted development and rapid product iteration.
      </p>
    </motion.section>
  );
}
