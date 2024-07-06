/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["*"],
  theme: {
    screens: {
      xs: "480px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      
      colors: {
        mainColor: "#F44335",
        mainwhiteColor: "#FAFAFA",
        redColor: "#F9CCC7",
        textColor: "#072125",
        numberColor: "#00FF84",
        bgColor: "#02040B",
        boxColor: "#2D3142",
      },
      fontFamily: {
        Jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
    },

    container: {
      center: true,
      DEFAULT: "10px",
    },
  },
  plugins: [],
};
