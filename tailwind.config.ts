/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        },
        fontDisplay: {
          swap: true,
        },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), // <--- add this
  ],
}
