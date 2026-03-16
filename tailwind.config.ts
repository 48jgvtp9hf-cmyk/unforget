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
        volt: "#CEFF00",
        "volt-lt": "#DAFF40",
        "volt-dim": "rgba(206,255,0,0.12)",
        bg: "#0A0A0A",
        surface: "#141414",
        "surface-2": "#1A1A1A",
        ink: "#FFFFFF",
        "ink-dim": "rgba(255,255,255,0.5)",
        "ink-ghost": "rgba(255,255,255,0.06)",
        border: "rgba(255,255,255,0.08)",
        "border-md": "rgba(255,255,255,0.15)",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.05em",
        tighter: "-0.04em",
        tight: "-0.03em",
      },
      animation: {
        blink: "blink 2s ease-in-out infinite",
        "slide-in": "slideIn 0.5s ease forwards",
        "bar-pulse": "barPulse 1.5s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease forwards",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        slideIn: {
          from: { opacity: "0", transform: "translateX(16px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        barPulse: {
          "0%, 100%": { background: "rgba(206,255,0,0.12)" },
          "50%": { background: "#CEFF00" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
