/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "#FFE7C3",
        headerText: "#5F2B1F",
      },
    },
  },
  plugins: [],
};
