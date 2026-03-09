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
          navy: "#0A3F8F",
          tech: "#1B84D6",
          sky: "#6FD4FF",
          teal: "#27B3A8",
          green: "#43B05C",
          lime: "#8FD14F",
          mint: "#DDF7EA",
          azure: "#E6F4FF",
          sand: "#F6FBF5",
          light: "#F8FAFC",
          surface: "#FFFFFF",
          text: "#0F172A",
          muted: "#64748B",
          border: "#E5E7EB",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.08)",
        card: "0 8px 24px rgba(15, 23, 42, 0.06)",
        lift: "0 24px 80px rgba(10, 63, 143, 0.14)",
      },
      backgroundImage: {
        "cb-gradient": "linear-gradient(120deg, #1E63B5 0%, #1B84D6 35%, #27B3A8 65%, #43B05C 100%)",
        "cb-radial": "radial-gradient(circle at top left, rgba(30, 99, 181, 0.2), transparent 40%), radial-gradient(circle at bottom right, rgba(67, 176, 92, 0.16), transparent 36%)",
      },
    },
  },
  plugins: [],
};

export default config;
