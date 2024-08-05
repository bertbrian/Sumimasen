/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html','./node_modules/preline/dist/*.js'],
  theme: {
    screens : {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors:{
      
      },
      fontFamily:{
        sans: ['Montserrat','sans-serif']
      }
    },
  },
  plugins: [require('preline/plugin')],
}

