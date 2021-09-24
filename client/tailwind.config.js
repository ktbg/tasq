module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkPurple: '#9E8CD1',
        tasqGrey: '#F7F6F6',
        tasqBorder: '#D8D4D6',
        tasqDelete: '#E0635E',
        tasqHover: '#e1e0e0',
        tasqDeleteHover: '#B7504c',
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
