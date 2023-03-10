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
          },
          "40%": {
            transform: "translateX(0%)",
          },
          "60%": {
            transform: "translateX(-11rem)",
          },
          "80%": {
            transform: "translateX(-11rem)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        blink: {
          "0%": {
            background: "#50C878",
          },
          "50%": {
            background: "#FFF000",
          },
          "0%": {
            background: "#50C878",
          },
        },
      },
      animation: {
        "scale-in": "scale 3s ease-in-out",
        blink: "blink 2s ease-in-out infinite",
      },
    },
  },
};
