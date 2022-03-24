const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom':['Gotham', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}