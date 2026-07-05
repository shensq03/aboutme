import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F4F1",
        card: "#FFFFFF",
        stroke: "#E8E2DA",
        ink: "#1C1C1E",
        muted: "#6B6B6B",
        tertiary: "#A1A1A1",
        blue: "#6C7CFF",
        purple: "#B9A7FF",
        mint: "#7DE2D1",
        orange: "#E6A06C",
        green: "#4E7C6F"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "SF Pro Display", "Helvetica", "sans-serif"]
      },
      boxShadow: {
        soft: "0 16px 40px rgba(28, 28, 30, 0.06)",
        glow: "0 18px 48px rgba(108, 124, 255, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
