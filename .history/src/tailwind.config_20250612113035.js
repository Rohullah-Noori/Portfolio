/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Poppins", "sans-serif"],
      },
      colors: {
       gray:{
        300: "#333333",
       }
      },
  },
};
