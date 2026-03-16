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
        background: "#F9F8F4", // Warm Alabaster / Rice Paper
        foreground: "#2D3A31", // Deep Forest Green
        primary: "#8C9A84", // Sage Green
        muted: "#DCCFC2", // Soft Clay / Mushroom
        border: "#E6E2DA", // Stone
        accent: "#C27B66", // Terracotta
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Source Sans 3"', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2.5rem',
        'arch': '200px 200px 0 0',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(45, 58, 49, 0.05)',
        'soft-md': '0 10px 15px -3px rgba(45, 58, 49, 0.05)',
        'soft-xl': '0 25px 50px -12px rgba(45, 58, 49, 0.15)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
