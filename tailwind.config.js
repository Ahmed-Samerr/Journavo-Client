/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      animation: {
        'fade-in-left': 'fadeInLeft 1s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-fast': 'fadeInFast 0.6s ease-out',
      },
      keyframes: {
        fadeInLeft: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInFast: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
