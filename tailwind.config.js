/** @type {import('tailwindcss').Config} */
import daisyui0 from 'daisyui';

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      light: '#EAEDF0',
      lightSecond: '#F7F7F8',
      anotherLight: '#F8F9F9',
      gray: '#5F6E7C',
      darkGray: '#202932',
      darkerGray: 'rgba(32, 41, 50, 0.03)',
      dark: 'rgba(0, 0, 0, 0.34)',
      blue: '#55A2EE',
      green: '#D2FFCE',
      red: '#FEDBDB',
      yellow: '#FEF0DB'
    },
    extend: {
      boxShadow: {
        m: '0px 0px 20px 0px rgba(37, 45, 52, 0.10)'
      }
    }
  },
  daisyui: {
    themes: ['light']
  },
  plugins: [daisyui0]
};
