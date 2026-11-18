/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1325',
          navyLight: '#162238',
          slate: '#1E293B',
          amber: '#D97706',
          amberLight: '#F59E0B',
          amberDark: '#B45309',
          wood: '#9A5B2D',
          woodLight: '#C4824F',
          timber: '#3E2723',
          cream: '#FDFBF7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Outfit', 'Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 10px 30px -5px rgba(217, 119, 6, 0.15)',
        'elevated': '0 20px 40px -15px rgba(11, 19, 37, 0.25)',
      }
    },
  },
  plugins: [],
}
