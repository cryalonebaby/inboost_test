/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navGray: '#DADADA',
        btnWhite: '#FAFAFA',
        btnGray: '#9CA3AF',
        selectedGray: '#E1E1DF',
        bgGray: '#FAFAF8',
        primaryBlack: '#222220',
        infoGray: '#D2D2D2',
      }
    },
  },
  plugins: [],
}

