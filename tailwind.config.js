const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
    },
    extend: {
      colors: {
        "accent-color": "#7B191E",
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
        racingSans: ["var(--font-racingSans)"],
      },
      aspectRatio: {
        thumb: "2 / 1",
        "phone-thumb": "4 / 3",
      },
    },
  },
  plugins: [],
};
