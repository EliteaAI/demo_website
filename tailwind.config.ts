import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-yellow': '#ffdd33',
        'brand-orange': '#ff6b35',
        'brand-green':  '#4caf50',
        'brand-dark':   '#1a1a2e',
      },
      fontFamily: {
        display: ['Bangers', 'cursive'],
        body:    ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
