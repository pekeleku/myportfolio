/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3,125rem",
        xl: "3,4375rem",
        "2xl": "4rem",
      },
    },
    extend: {
      flex: {
        5: "5 5 0%",
        2: "2 2 0%",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#FE8E3E",
        secondary: "#D9D9D9",
        btn: "#FE5B02",
      },
    },
  },
  plugins: [],
};
