/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['"Helvetica Neue"', 'Arial', 'sans-serif'], // Adding custom font
      },
      
    },
  },
  plugins: [],
}

