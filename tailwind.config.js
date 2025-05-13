/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          default: '#FBF6ED',
          primary: '#FFBB55',
          secondary: '#000',
          red: '#ED5544',
          paragraph: '#222222',
        },
      },
    },
  },
  plugins: [],
};
