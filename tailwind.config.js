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
        infoGray: '#A7A7A5',
      }
    },
  },
  plugins: [],
}

