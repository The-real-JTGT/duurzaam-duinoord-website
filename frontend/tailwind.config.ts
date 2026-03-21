import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/puck.config.tsx",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--dd-bg-rgb) / <alpha-value>)",
        foreground: "rgb(var(--dd-ink-rgb) / <alpha-value>)",
        primary: "rgb(var(--dd-primary-rgb) / <alpha-value>)",
        "primary-container": "rgba(133, 55, 36, 1)",
        secondary: "rgb(var(--dd-secondary-rgb) / <alpha-value>)",
        "secondary-container": "rgb(var(--dd-secondary-soft-rgb) / <alpha-value>)",
        tertiary: "rgba(60, 56, 49, 1)",
        border: "var(--dd-border)",
        muted: "rgb(var(--dd-surface-strong-rgb) / <alpha-value>)",
        "surface-container-lowest": "rgb(var(--dd-paper-rgb) / <alpha-value>)",
        "surface-container-low": "rgb(var(--dd-surface-rgb) / <alpha-value>)",
        "surface-container": "rgba(242, 237, 230, 1)",
        "surface-container-high": "rgb(var(--dd-surface-strong-rgb) / <alpha-value>)",
        "surface-container-highest": "rgba(230, 226, 219, 1)",
        accent: "rgba(197, 142, 114, 1)",
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "serif"],
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      borderRadius: {
        "3xl": "1.75rem",
        "4xl": "2.75rem",
        "5xl": "4rem",
        arch: "200px 200px 0 0",
      },
      boxShadow: {
        paper: "0 12px 30px rgba(61, 38, 27, 0.07)",
        float: "0 22px 60px rgba(61, 38, 27, 0.08)",
        glow: "0 28px 80px rgba(80, 100, 73, 0.12)",
        soft: "0 8px 24px rgba(61, 38, 27, 0.06)",
        "soft-md": "0 16px 36px rgba(61, 38, 27, 0.08)",
        "soft-xl": "0 28px 72px rgba(61, 38, 27, 0.12)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
export default config;
