"use client";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) setTheme(saved);
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches) setTheme("dark");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  if (!mounted) return null;

  return (
    <>
      <header className="flex justify-between items-center px-8 py-6 border-b border-gray-200 dark:border-gray-800">
        <h1 className="font-bold text-xl">Altrotechai</h1>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-accent hover:shadow-lg transition transform duration-300 hover:-translate-y-1"
        >
          {theme === "dark" ? (
            <SunIcon className="w-6 h-6 text-yellow-400" />
          ) : (
            <MoonIcon className="w-6 h-6 text-purple-500" />
          )}
        </button>
      </header>
      {children}
      <footer className="text-center py-8 text-sm text-muted dark:text-gray-500">
        © {new Date().getFullYear()} Harry Badimba Botema
      </footer>
    </>
  );
}
