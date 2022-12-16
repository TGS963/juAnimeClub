/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["pages/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  safelist: [
    {
      pattern: /^(bg-[^/]+)$/,
      variants: ["hover"],
    },
  ],
  theme: {
    screens: {
      xxs: "240px",
      xs: "320px",
      ...defaultTheme.screens,
    },
    extend: {
      keyframes: {
        scale: {
          "0%": { transform: "scale(0.9)", opacity: 0.5 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
      animation: {
        "scale-in": "scale 0.3s",
      },
    },
  },
};
