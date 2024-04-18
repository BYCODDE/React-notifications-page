/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["CustomFont", "sans-serif"],
      },
      colors: {
        "very-dark-grey-blue": "#333333",
        "blue-1": "#0A327B",
        "red-2": "#F65552",
        // eslint-disable-next-line no-dupe-keys
        "very-dark-grey-blue": "#1C202B",
        "dark-grey-blue": "#5E6778",
        "grey-blue": "#939CAD",
        "light-grey-blue": "#E5EFFA",
        "very-light-grey-blue": "#DDE7EE",
        snow: "#F7FAFD",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
