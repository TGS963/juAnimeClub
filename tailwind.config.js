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
          "0%": {
            transform: "translateX(0%)",
            transform: "translateY(50%)",
            transform: "rotate(-45deg)",

            opacity: 0,
          },
          "50%": { opacity: 1 },
          "100%": {
            transform: "translateX(100%)",

            opacity: 0,
          },
        },
      },
      animation: {
        "scale-in": "scale 1s ease-in",
      },
    },
  },
};
