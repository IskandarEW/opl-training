/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './{templates,components}/**/*.{twig,js}'
  ],
  theme: {
    extend: {
      fontSize: {
        'card-body': ['3rem', 1.5]
      }
    },
  },
  plugins: [],
}

