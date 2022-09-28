/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{html,scss,ts}'],
  theme: {
    extend: {
      borderRadius: {
        'phone': '3.25rem',
        'phone-screen': '2.8rem'
      },
      aspectRatio: {
        'phone': '9 / 19.5',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
