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
      }, backgroundImage: {
        'post-card-image': "url('https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_29247013_xl-2015-2-768x512.jpg')",

      }
    },
  },
  plugins: [],
}
