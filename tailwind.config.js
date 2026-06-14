/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "Arial", "sans-serif"],
      },
      colors: {
        ink: "#111111",
        paper: "#fbfaf8",
        soft: "#efebe5",
      },
    },
  },
  plugins: [],
};
