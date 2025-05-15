/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1B2B44',
        'brand-brown': {
          light: '#D4BEA9',
          DEFAULT: '#A67C52',
          dark: '#734D26'
        },
        'brand-green': {
          light: '#7DA87B',
          DEFAULT: '#5B8A58',
          dark: '#3F6F3C'
        },
        'brand-cream': '#F5F1EA',
        'brand-black': '#1A1817'
      }
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Playfair Display', 'Georgia', 'serif']
    }
  },
  plugins: [],
}