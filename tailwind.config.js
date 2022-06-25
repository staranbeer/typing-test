/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monofett: ["Monofett", "cursive"],
        rubic: ["Rubik Mono One", "sans", "serif"],
      },
    },
  },
  plugins: [],
};
