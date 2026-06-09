import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        lagoon: {
          50: '#ecfeff',
          100: '#cffafe',
          300: '#67e8f9',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490'
        },
        gold: '#d6a756',
        midnight: '#071f34'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Playfair Display', 'serif']
      },
      boxShadow: {
        luxury: '0 24px 70px rgba(7,31,52,0.16)',
        glow: '0 0 34px rgba(6,182,212,0.32)'
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, rgba(6,182,212,0.92), rgba(7,31,52,0.98))'
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        fadeUp: 'fadeUp .8s ease both'
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } }
      }
    }
  },
  plugins: []
};
export default config;
