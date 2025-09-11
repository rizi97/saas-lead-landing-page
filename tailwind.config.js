/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{css,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-teal': {
          '100': '#E0F2F1',
          '200': '#B2DFDB',
          '300': '#80CBC4',
          '400': '#4DB6AC',
          '500': '#26A69A',
          '600': '#009688',
          '700': '#00897B',
          '800': '#00796B',
          '900': '#00695C',
        },
      },
    },
  },
  plugins: [],
}
