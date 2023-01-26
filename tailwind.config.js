/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      colors: {
        primary: '#D9B04D',
        'darker-primary': '#9D864F',
        'darker-primary-alfa': '#9D864F4c',

        'gray-bg': '#2B2B2B',
        'gray-primary': '#222',
        'gray-primary-alfa': '#222222a3',
        'gray-light': '#E5E5E5',
        white: '#fff',
        black: '#000'
      }
    }
  },
  plugins: [require('@kamona/tailwindcss-perspective')]
}
