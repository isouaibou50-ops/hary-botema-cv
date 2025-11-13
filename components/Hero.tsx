"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-center px-6 md:px-20">
      {/* Left: text */}
      <motion.div
        className="md:w-1/2 flex flex-col gap-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Harry Badimba Botema
        </h1>
        <p className="text-lg md:text-xl text-muted dark:text-gray-400 max-w-lg">
          Senior Full-Stack JavaScript Engineer — React, Next.js, Expo, Supabase & AI Integration
        </p>
        <div className="flex gap-4 mt-6">
          <a
            href="/Harry_Botema_CV.pdf"
            target="_blank"
            className="px-6 py-3 bg-gradient-to-r from-accent to-purple-400 text-white rounded-xl font-medium shadow-xl transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            View CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-accent text-accent dark:text-accent rounded-xl font-medium transform transition duration-300 hover:bg-accent hover:text-white hover:-translate-y-1"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>

      {/* Right: decorative blob */}
      <motion.div
        className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tr from-accent to-purple-400 rounded-full opacity-40 blur-3xl animate-blob" />
      </motion.div>
    </section>
  );
}
