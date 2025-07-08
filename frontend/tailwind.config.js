/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'albert': ['Albert Sans', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'vivaldi': ['Vivaldi', 'cursive'],
        'cormorant': ['Cormorant', 'serif'],
      },
      colors: {
        emerald: {
          900: '#064e3b',
        },
        amber: {
          300: '#fcd34d',
        }
      }
    },
  },
  plugins: [],
}