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
        ink: "#121212",
        paper: "#f7f4ed",
        fog: "#ece7dc",
        moss: "#65735c",
        clay: "#bd6f4d",
        teal: "#0f766e",
        graphite: "#2d2d2d",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(18, 18, 18, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
