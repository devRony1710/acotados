/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#BDBDBD",
        "main-yellow": "#FFE34F",
        "main-blue": "#2A3362",
      },
    },
  },
  plugins: [],
};
