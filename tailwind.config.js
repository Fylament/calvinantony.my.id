module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'sage-green': '#9AAB89',
      },
      fontFamily: {
        'oswald': ['oswald', 'serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}