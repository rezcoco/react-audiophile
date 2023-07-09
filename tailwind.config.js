/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cBrown: '#D87D4A',
        cDark: '#101010',
        cGray: '#f1f1f1',
        cWhite: '#fafafa',
        cLightBrown: '#fbaf85',
        cBodyText: '#c4c4c4',
        cDarkGray: '#898989'
      },
      backgroundImage: {
        'hero-desktop': 'url("/assets/home/desktop/image-hero.jpg")',
        'hero-tablet': 'url("/assets/home/tablet/image-header.jpg")',
        'hero-mobile': 'url("/assets/home/mobile/image-header.jpg")'
      }
    },
  },
  plugins: [],
}