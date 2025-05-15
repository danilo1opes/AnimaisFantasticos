/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'monospace'],
        serifLogo: ['"Playfair Display SC"', 'serif'],
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        brand: {
          white: '#fff',
          default: '#FBF6ED',
          primary: '#FFBB55',
          secondary: '#000',
          red: '#ED5544',
          redSix: '#dc2626',
          paragraph: '#222222',
        },
      },
    },
  },
  plugins: [],
};
