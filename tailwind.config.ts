import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#f7f2eb",
        foreground: "#231b3f",
        surface: "#fff8f3",
        deep: "#1f184e",
        azure: "#11b3f1",
        lime: "#9bc927",
        sun: "#e7f199",
        rose: "#e71f99",
        violet: "#a61598"
      },
      boxShadow: {
        glow: "0 24px 60px rgba(166, 21, 152, 0.22)",
        soft: "0 18px 40px rgba(31, 24, 78, 0.12)"
      },
      fontFamily: {
        sans: ["Montserrat", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
        display: ['"Midnight Bangkok"', "Montserrat", "sans-serif"]
      },
      maxWidth: {
        content: "1180px"
      }
    }
  },
  plugins: []
};

export default config;
