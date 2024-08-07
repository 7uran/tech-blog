/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'system-ui', '-apple-system', '"Segoe UI"', 'Arial', 'sans-serif'],
        inter: ['Inter', 'system-ui', '-apple-system', '"Segoe UI"', 'Arial', 'sans-serif'],
      },
      colors: {
        'custom-blue': '#3C3FDE',
        'custom-purple': '#AB07AB',
        'custom-teal': '#009B9B',
      },
     
      backgroundSize: {
        'zoom': '110%',

      }
    },
  },
  plugins: [],
}
