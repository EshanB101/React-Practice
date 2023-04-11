/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: process.env.TAILWIND_MODE,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {},
  },
  plugins: [],
}

