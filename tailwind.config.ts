import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'apex-yellow': '#ffdd33',
        'apex-orange': '#ff6b35',
        'apex-green':  '#4caf50',
        'apex-dark':   '#1a1a1a',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
} satisfies Config
