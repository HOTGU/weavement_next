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
        "accent-hover": "rgba(166,25,46,0.3)",
        "secondary-color": "rgba(192, 156, 131, 0.2)",
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
        racingSans: ["var(--font-racingSans)"],
        notoSans: ["var(--font-notoSans)"],
      },
      aspectRatio: {
        thumb: "5 / 3",
        "phone-thumb": "4 / 3",
      },
      maxWidth: {
        screen: "1440px",
      },
    },
  },
  plugins: [],
};
