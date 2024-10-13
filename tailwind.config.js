/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.html", "./node_modules/preline/dist/*.js"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {
      colors: {},
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
    animation: {
      marquee: "marquee 15s linear infinite",
    },
    keyframes: {
      marquee: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-150%)" },
      },
    },
  },
  plugins: [require("preline/plugin")],
};
