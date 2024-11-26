/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
    },
    colors: {
      primary: '#8A19D6',
      white: '#fff',
      gray: "#dcdcdc"
    }
  },
  plugins: [],
};
