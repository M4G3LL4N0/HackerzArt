import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './middleware.ts',
  ],
  theme: {
    extend: {
      colors: {
        hackerzart: {
          DEFAULT: '#0A0A1A',
          accent: '#FF4D5A',
          secondary: '#00C4FF',
          tertiary: '#9A4DFF',
          surface: '#1A1A2E',
          border: '#2E2E4A',
          muted: '#6E6E8A',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        glow: '0 0 12px rgba(255, 77, 90, 0.3)',
        'glow-secondary': '0 0 12px rgba(0, 196, 255, 0.3)',
      },
    },
  },
  plugins: [],
}

export default config
