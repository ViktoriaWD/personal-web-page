/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      xs: '376px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px'
    },
    extend: {
      colors: {
        primaryColorCharcolGray: 'hsl(0, 0%, 20%)',
        accentColorDodgerBlue: 'hsl(193, 50%, 20%, 1)',
        backgroundWhite: 'hsl(0, 0%, 100%)',
        textGrey: 'hsl(0, 0%, 33%)',
        grey: '#494949',
        green:'#52524f'
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Playfair Display', 'serif'],

      },

    },
  },
  plugins: [],
}

