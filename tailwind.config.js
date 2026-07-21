/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './pages/gid.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        gray: {
          50: '#FCFBF7',
          100: '#F7F6F0',
          200: '#E5E4D8',
          300: '#',
          400: '#',
          500: '#',
          600: '#',
        },
        primaryLight: {
          50: '#F5D8DD',
          100: '#E0B8BF',
          200: '#D19DA6',
          300: '#994554',
        },
        secondaryLight: {
          50: '#D8D3E5',
          100: '#B2A9CF',
          200: '#8A7FB5',
          300: '#564599',
        },
        tertiary: {
          50: '#C3D3E5',
          100: '#9DBCE0',
          200: '#7AA0CC',
        },
        primaryDark: {
          50: '#FAF0C8',
          100: '#EDDC97',
          200: '#DBC465',
        },
        secondaryDark: {
          50: '#F2DBCE',
          100: '#EBB090',
          200: '#DB8F65',
        },
      },

      fontFamily: {
        display: ['"Baloo Thambi 2"', 'cursive'],
        mono: ['"Courier Prime"', 'monospace'],
        sans: ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
