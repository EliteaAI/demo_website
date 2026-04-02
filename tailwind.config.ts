import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // brand-* tokens
        'brand-yellow': '#ffdd33',
        'brand-orange': '#ff6b35',
        'brand-green': '#4caf50',
        'brand-dark': '#1a1a2e',
        // apex-* aliases (same values)
        'apex-yellow': '#ffdd33',
        'apex-orange': '#ff6b35',
        'apex-green': '#4caf50',
        'apex-dark': '#1a1a2e',
      },
      fontFamily: {
        display: ['Bangers', 'cursive'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
