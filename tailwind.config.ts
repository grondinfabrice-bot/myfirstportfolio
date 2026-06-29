import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#181818",
        paper: "#FFF7E8",
        fog: "#E8DCC8",
        basil: "#2F7D4F",
        tomato: "#E83F32",
        slate: "#27384A",
        cream: "#FFFDF7",
        graphite: "#3B332B",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(24, 24, 24, 0.08)",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
