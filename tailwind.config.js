/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["*.html", "*/index.html", "*/**/index.html"],
  theme: {
    extend: {
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
        typing: 'typing 4s steps(40, end) forwards, blink-cursor 0.75s step-end infinite 3s',
        spin: 'spin 1s linear',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'open-menu': {
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(1.2)'},
          '100%': {transform: 'scaleY(1)'},
        },
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
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
      colors: {
        'text': '#ffffff',
        'background': '#000000',
        'primary': '#030326',
        'secondary': '#f7f7f7',
        'accent': '#a29ee5',
       },
       
    },
    
  },
  plugins: [
  ],
}