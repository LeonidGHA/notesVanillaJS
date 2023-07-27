/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./main.js"],
  theme: {
    extend: {
      gridTemplateColumns: {
        14: "repeat(14, minmax(0, 1fr))",
      },
    },
    plugins: [],
  },
};
