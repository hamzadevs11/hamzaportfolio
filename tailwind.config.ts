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
        background: "#0F0F10",
        surface: "#1A1A1C",
        text: "#F5F5F5",
        muted: "#A1A1AA",
        accent: "#F59E0B",
      },
      fontFamily: {
        sans: ["var(--font-satoshi)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
