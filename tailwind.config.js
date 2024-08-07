/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "90vw": "90vw",
      },
      colors: {
        "custom-green": "#379777",
      },
    },
  },
  plugins: [],
};
