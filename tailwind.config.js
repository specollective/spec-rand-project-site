/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spec-blue': {
          600: '#1C303D',
        },
        'spec-teal': {
          600: '#507E82',
        },
      }
    },
  },
  plugins: [],
}
