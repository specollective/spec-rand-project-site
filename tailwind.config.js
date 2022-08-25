/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  // plugins: [
  //   require('tw-elements/dist/plugin')
  // ],
  theme: {
    extend: {
      colors: {
        "spec-blue": {
          600: "#1C303D",
        },
        "spec-teal": {
          600: "#507E82",
        },
        "spec-yellow": {
          600: "#F4BE4F",
        },
      },
    },
  },
  plugins: [],
};
