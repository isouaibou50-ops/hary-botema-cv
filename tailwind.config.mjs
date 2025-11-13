/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#ffffff",
          dark: "#0f172a",
        },
        text: {
          light: "#0f172a",
          dark: "#f1f5f9",
        },
        accent: "#7c3aed",
        muted: "#64748b",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
