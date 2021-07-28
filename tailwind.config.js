const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Prompt', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        gray: colors.blueGray,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
