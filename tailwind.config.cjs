/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'source-code':['"Source Code Pro"', 'monospace'],
        'poppins':['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}
