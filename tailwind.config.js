module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'bg': '#000814',
        'primary': '#ffc300',
      },
      fontFamily: {
        'oswald': ['oswald'],
        'open-sans': ['open sans'],
      },
      fontSize: {
        'xxs': '.625rem',
        'smaller': '0.75rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}