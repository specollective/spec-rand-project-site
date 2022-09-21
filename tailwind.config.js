/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{html,js}', 
    './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  theme: {
    extend: {
      colors: {
        "spec-black": {
          600: "#1C303D",
        },
        "spec-white": {
          600: "#FEFFFF",
        },
        "spec-teal": {
          600: "#507E82",
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
      },
      fontFamily: {
        Poppins: ['Poppins'],
        inter: ['Inter']
      }
    },
  },
  plugins: [],
};
