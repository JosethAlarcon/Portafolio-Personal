/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FC7D40',
          orangeStrong: '#FF5500',
          sky: '#3FD4FD',
          dark: '#07111F',
          darkSoft: '#0B1220',
          white: '#F8FAFC',
          slate: '#94A3B8',
        },
      },
      boxShadow: {
        glow: '0 20px 60px rgba(63, 212, 253, 0.18)',
        card: '0 20px 45px rgba(7, 17, 31, 0.35)',
        orange: '0 18px 40px rgba(252, 125, 64, 0.25)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseSoft: 'pulseSoft 5s ease-in-out infinite',
        shine: 'shine 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.08)' },
        },
        shine: {
          '0%': { transform: 'translateX(-20%) translateY(0)' },
          '100%': { transform: 'translateX(20%) translateY(0)' },
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
