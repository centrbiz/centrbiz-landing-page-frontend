import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cb: {
          primary: "#1E63B5",
          tech: "#1B84D6",
          teal: "#27B3A8",
          green: "#43B05C",
          light: "#F8FAFC",
          text: "#0F172A",
          muted: "#64748B",
          border: "#E5E7EB",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.08)",
        card: "0 8px 24px rgba(15, 23, 42, 0.06)",
      },
      backgroundImage: {
        "cb-gradient": "linear-gradient(120deg, #1E63B5 0%, #1B84D6 35%, #27B3A8 65%, #43B05C 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
