/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sketch: ['Caveat', 'cursive'],
        arcade: ['VT323', 'monospace'],
        cormorant: ['Cormorant Garamond', 'serif']
      },
      screens: {
        '3xl': '1600px',
        '4xl': '2000px',
        '5xl': '2400px'
      }
    },
  },
  plugins: [],
}
