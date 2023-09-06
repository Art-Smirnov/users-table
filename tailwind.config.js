/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      light: '#EAEDF0'
    },
    extend: {}
  },
  daisyui: {
    themes: ['light']
  },
  plugins: [require('daisyui')]
};
