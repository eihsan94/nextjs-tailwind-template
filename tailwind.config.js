//  the file for  edit the tailwind config
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'], // tree shakable feature for removing unneeded css
  darkMode: 'class', // or 'media' or 'class' // media is for device dark mode option class is for toggle dark mode feature
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
