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
      spacing: {
        '40': '40px',
        '48': '48px'
      },
      fontSize: {
        'h1': '8rem',
        'h2': '3rem',
        'h3': '2.5rem',
        'p16': '1rem',
      }
    },
  },
  plugins: [],
}
