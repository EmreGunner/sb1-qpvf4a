/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#84bb75',
        secondary: '#5d8a54',
        background: '#ffffff',
        text: '#000000',
        accent: '#f0f7ed',
      },
    },
  },
  plugins: [],
}