/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["*.html", "*/index.html", "*/**/index.html"],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'mid': '645px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    keyframes: {
      'open-menu': {
        '0%': {transform: 'scaleY(0)'},
        '80%': {transform: 'scaleY(1.2)'},
        '100%': {transform: 'scaleY(1)'},
      },
    },
    animation: {
      'open-menu': 'open-menu 0.5s ease-in-out forwards',
    },
   
    fontFamily: {
      customFont: ['"Courier Prime"','"Montserrat Alternates"', 'sans-serif'],
    },
  },
  plugins: [],
}