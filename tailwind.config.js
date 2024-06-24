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
   
    fontFamily: {
      customFont: ['"Courier Prime"','"Montserrat Alternates"', 'sans-serif'],
    },
  },
  plugins: [],
}