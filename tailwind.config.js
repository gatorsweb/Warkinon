/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors:{
      primary: '#756BEE',
      secondary: '#39364E'
    },
    fontFamily:{
      'work-sans': "Work Sans, sans-serif",
      'inter': "Inter, sans-serif",
      'outfit': "Outfit, sans-serif",
      'poppins': "Poppins, sans-serif",
    },
    extend: {
      container:{
        center: true,
        padding: '20px'
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}