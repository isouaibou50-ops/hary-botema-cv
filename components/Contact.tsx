"use client";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  const [controls, ref] = useScrollReveal();

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 text-center max-w-2xl"
    >
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
        Get in Touch
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        I’m open to discussing new projects, collaborations, and AI-driven product ideas.
      </p>
      <a
        href="mailto:altrotechai@gmail.com"
        className="px-6 py-3 bg-accent text-white rounded-md font-medium shadow-card transform transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        altrotechai@gmail.com
      </a>
    </motion.section>
  );
}
