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
          "0%": { transform: "translateX(0%)", opacity: 0.5 },
          "50%": { transform: "translateX(5rem)", opacity: 1 },
          "100%": { transform: "translateX(10rem)", opacity: 0.5 },
        },
      },
      animation: {
        "scale-in": "scale 1s ease-in infinite",
      },
    },
  },
};
