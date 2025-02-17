/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  screens: {
    "sm": "360px",
    "md": "768px",
    "lg": "1024px",
  },
  plugins: [],
}
