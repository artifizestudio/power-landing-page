/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#706FE5",
        secondary: "#1E1F4B",
        text: "#2E3E5C",
        accent: "#FCFCFE",
      },
    },
  },
  plugins: [],
};
