import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0D2B4E",
          hover: "#1A4580",
          light: "#E8F0FA",
        },
        plate: {
          yellow: "#FFC300",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: [
          "var(--font-jakarta)",
          "var(--font-inter)",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(15, 23, 42, 0.06)",
        card: "0 12px 40px -8px rgba(15, 23, 42, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
