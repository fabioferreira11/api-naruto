/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'purple': '#755CDE',
        'orange': '#F6A560',
        'rose': '#F39E9E',
        'red': '#EB7565',
        'green': '#61C4B7',
        'brown': '#552049',
        'black': '#030303',
        'gray': '#7A746E',
        'beige': '#FFF7F0',
      },
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontSize: {
        large: ['56px'],
        largem: ['26px'],
        medium: ['40px'],
        smal: ['32px'],
        xsmal: ['18px'],
        xsmalm: ['16px'],
      },
      fontWeight: {
        title: ['700'],
        texte: ['500'],
      },
    },
  },
  plugins: [],
}

