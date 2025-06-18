/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#AD6359",
        green: {
          light: "#E3F5E3",
          primary: "#92E3A9",
          second: "#4CAF50",
          dark: "#358438",
        },

        white: {
          second: "#F7F9FA",
          primary: "#FFFFFF",
        },

        gray: {
          light: "#EDEDED",
          primary: "#D1D1D1",
          second: "#757575",
          dark: "#333333",
        },

        default: {
          sucess: "#28A745",
          danger: "#DC3545",
          attention: "#FFC107",
        },
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
