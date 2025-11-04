/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#002A60',
        secondary: '#00B3B3',
        text: '#2E2E2E',
        background: '#FFFFFF',
        muted: '#F4F4F4'
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
