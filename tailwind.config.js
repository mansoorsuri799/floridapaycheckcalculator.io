/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['var(--font-sora)', 'var(--font-outfit)', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#FFF7EC',
          deep: '#FFE8D0',
          soft: '#FFFFFF',
          glow: '#FF7A2F',
        },
        mist: '#FFF1E0',
        blush: '#FFF7EC',
        ink: '#1C2434',
        pink: {
          DEFAULT: '#FF7A2F',
          soft: '#FF9A5C',
          deep: '#E56218',
        },
        coral: {
          DEFAULT: '#FF7A2F',
          deep: '#E56218',
        },
        violet: {
          DEFAULT: '#FF7A2F',
          soft: '#FF9A5C',
          deep: '#E56218',
        },
        lilac: '#FFB27A',
        teal: {
          DEFAULT: '#0E7490',
          deep: '#0B5F75',
        },
        sky: '#38BDF8',
        gold: '#F59E0B',
        primary: '#FFF7EC',
        secondary: '#FFFFFF',
        accent: '#FF7A2F',
        sunrise: '#0E7490',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'soft-pulse': {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'soft-pulse': 'soft-pulse 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
    },
  },
  plugins: [],
}
