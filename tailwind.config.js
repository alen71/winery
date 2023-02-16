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
        'gray-primary': '#1c1c1c',
        'gray-primary-alfa': '#1c1c1ca3',
        'gray-light': '#E5E5E5',
        lines: '#3E3C34',
        white: '#fff',
        black: '#000'
      },
      fontFamily: {
        sans: ['var(--font-jeko)']
      },
      borderWidth: {
        1: '1px'
      }
    }
  },
  plugins: []
}
