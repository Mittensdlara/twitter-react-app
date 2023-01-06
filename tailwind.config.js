/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'primaryColor': '#1D9BF0',  
      'secondaryColor': '#393B41',
      'black': '#000000',
    },
    extend: {        
    '8xl': '96rem',
    '9xl': '128rem',},
  },
  plugins: [],
}
