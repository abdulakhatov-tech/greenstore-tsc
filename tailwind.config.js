/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables dark mode support using a class
  theme: {
    extend: {
      colors: {
        black: '#3D3D3D',
        green: '#46A358',
        gray: '#727272',
        bgGray: '#f5f5f5',
      },
      placeholderColor: {
        'custom-gray': '#727272',
        'custom-green': '#46A358',
      },
    },
  },
  plugins: [],
}
