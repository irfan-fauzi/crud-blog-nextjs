module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1080px',
        kl: '1200px'
      }
    },
    fontFamily: {
      'raleway': ['Raleway', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
