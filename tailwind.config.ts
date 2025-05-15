import type {Config} from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          brown: '#8B4513',
          beige: '#F5E6D3',
          green: '#2E7D32',
        },
        secondary: {
          cream: '#FFFAF0',
          dark: '#2C1810',
        },
        header: {
          blue: '#1E3A8A'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;