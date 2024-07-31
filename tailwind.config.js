/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#3D3D3D',
        green: '#46A358',
        gray: '#727272',
        bgGray: '#f5f5f5'
      },
    },
  },
  plugins: [],
}