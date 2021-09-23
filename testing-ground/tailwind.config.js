const config = require("@vivitek/toolbox/vivi-tailwind-config.json")

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      ...config
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
