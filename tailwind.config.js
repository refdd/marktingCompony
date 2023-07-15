/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Sarabun: ["Sarabun", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        mainColor: "#38352c",
        secondColor: "#ba8e21",
        textColor: "#313131",
        textPurple: "#704f88",
        MainYeloow: "#FFD440",
        secandTextColor: "#462472",
        shadowColorMain: "#9e6eae5e",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
