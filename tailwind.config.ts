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
          DEFAULT: '#000000',
          accent: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}

export default config
