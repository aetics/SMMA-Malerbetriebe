/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#f97316',
          light:   '#fb923c',
          dark:    '#ea580c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        blob: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%':     { transform: 'translate(40px,-30px) scale(1.08)' },
          '66%':     { transform: 'translate(-30px,20px) scale(0.95)' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        blob:     'blob 12s ease-in-out infinite',
        'blob-slow': 'blob 18s ease-in-out infinite',
        'fade-up': 'fade-up .6s cubic-bezier(.16,1,.3,1) both',
      },
    },
  },
  plugins: [],
};
