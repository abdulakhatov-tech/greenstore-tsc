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
        dark: {
          black: '#1a1a1a',
          green: '#2b8a3e',
          gray: '#5a5a5a',
          bgGray: '#1A202C', // Update this value to your new dark background color
        },
        light: {
          black: '#3D3D3D',
          green: '#46A358',
          gray: '#727272',
          bgGray: '#f5f5f5'
        }
      },
    },
  },
  plugins: [],
}
