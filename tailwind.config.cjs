/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      base: ['"Montserrat"', 'Helvetica'],
    },
    extend: {
      backgroundImage: {
        'gradient-conic':
          'conic-gradient(var(--conic-position), var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
