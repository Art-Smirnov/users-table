/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      light: '#EAEDF0',
      lightSecond: '#F7F7F8',
      gray: '#5F6E7C',
      darkGray: '#202932',
      dark: 'rgba(0, 0, 0, 0.34)',
      blue: '#55A2EE'
    },
    extend: {}
  },
  daisyui: {
    themes: ['light']
  },
  plugins: [require('daisyui')]
};
