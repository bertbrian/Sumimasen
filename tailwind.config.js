/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './*.html',
    './node_modules/preline/dist/*.js',
  ],
  theme: {
    screens : {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
    },
    extend: {
      colors:{
      
      },
      fontFamily:{
        sans: ['Montserrat','sans-serif']
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

