import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        hackerzart: {
          DEFAULT: '#080814',
          accent: '#FF4D5A',
          secondary: '#00C4FF',
          tertiary: '#9A4DFF',
          surface: '#1A1A2E',
          border: '#2E2E4A',
          muted: '#6E6E8A',
          gradient: {
            start: '#0A0A1A',
            end: '#1A0A1A',
            center: '#2A0A2A',
          },
          styles: {
            hacker: '#00FF9D',
            keygen: '#FF4D9D',
            gothic: '#C84DFF',
            baroque: '#FFB84D',
            terminal: '#4D9DFF',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      boxShadow: {
        glow: '0 0 12px rgba(255, 77, 90, 0.3)',
        'glow-secondary': '0 0 12px rgba(0, 196, 255, 0.3)',
        'ascii-glow': '0 0 24px rgba(0, 196, 255, 0.2)',
        'ascii-inner': 'inset 0 0 12px rgba(0, 196, 255, 0.1)',
      },
      animation: {
        'ascii-flicker': 'flicker 2s ease-in-out infinite',
        'ascii-shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.95' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}

export default config
