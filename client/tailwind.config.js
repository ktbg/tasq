module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkPurple: '#9E8CD1',
        tasqGrey: '#F8F7F7',
        tasqBorder: '#D8D4D6',
        tasqDelete: '#E0635E',
      },
      width: {
        '375': '375px',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
    },
  },
  plugins: [],
}
