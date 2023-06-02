/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'black': '#1F1F1F',
        'grey': '#656565',
        'gray': '#656565',
        'white': '#F6F6F6',
        'blue': {
          'light': '#90E0EF',
          'normal': '#00B4D8',
          'dark': '#0077B6',
          'darkest': '#153967'
        },
        'pink': {
          'light': '#FFCCD5',
          'normal': '#FF4D6D',
          'dark': '#A4133C',
          'darkest': '#590D22'
        },
      },
      borderRadius: {
        '50': '50px'
      },
      spacing: {
        '16': '16px',
        '40': '40px',
        '48': '48px',
        '64': '64px',
        '80': '80px'
      },
      fontSize: {
        'h1': '8rem',
        'h2': '3rem',
        'h3': '2.5rem',
        'p16': '1rem',
      },
      gap: {
        '25': '25px',
        '50': '50px',
      },
      margin: {
        '75': '75px'
      },
      boxShadow:{
        'inner': 'inset 0px 0px 15px 8px rgb(164 19 60 / 0.25) '
      },
      aspectRatio: {
        'event': '6/5'
      }
    },
  },
  plugins: [],
}
