/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  plugins: [require("tw-elements/dist/plugin")],
  theme: {
    screens: {
      'xs': '355px',
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        'hero-img': "url('/HeroImage.svg')",
      },
      colors: {
        "spec-black": {
          600: "#1C1C1C",
        },
        "spec-white": {
          600: "#FEFFFF",
        },
        // "spec-black": {
        //   600: "#1C303D",
        // },
        "spec-white": {
          600: "#FEFFFF",
        },
        "spec-teal": {
          600: "#4A7578",
        },
        "spec-yellow": {
          600: "#F4BE4F",
        },
        "spec-turquoise": {
          600: "#0C9FAA",
        },
        "spec-grey": {

          600: "#405762",
      },
      fontFamily: {
        Poppins: ['Poppins'],
        inter: ['Inter']
      }
    },
  },
  plugins: [],
}};

