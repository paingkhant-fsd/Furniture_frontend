/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        own: "#3d5d50",
        // Add brand or semantic colors; your main palette lives in index.css
        // e.g. brand: { 50: "...", 500: "...", 900: "..." },
      },
      fontFamily: {
        // e.g. sans: ["Inter", "system-ui", "sans-serif"],
        // e.g. display: ["Your Display Font", "serif"],
      },
      borderRadius: {
        // Matches your --radius in index.css; add more if needed
        // e.g. "4xl": "2rem",
      },
      boxShadow: {
        // e.g. "soft": "0 2px 15px -3px rgb(0 0 0 / 0.07), 0 10px 20px -2px rgb(0 0 0 / 0.04)",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "fade-in-up": "fadeInUp 0.35s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    // Add when needed: npm i @tailwindcss/forms @tailwindcss/typography
    // then: import forms from "@tailwindcss/forms"; import typography from "@tailwindcss/typography";
    // and add: forms, typography
  ],
};
