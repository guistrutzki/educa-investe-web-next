import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: ['animate-bounce1', 'animate-bounce2', 'animate-bounce3'],
  theme: {
    screens: {
      mobile: '100px',
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    extend: {
      keyframes: {
        bounceDelay: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-0.2rem)' },
        },
      },
      animation: {
        bounce1: 'bounceDelay 1.2s infinite ease-in-out',
        bounce2: 'bounceDelay 1.2s infinite ease-in-out 0.2s',
        bounce3: 'bounceDelay 1.2s infinite ease-in-out 0.4s',
      },
      colors: {
        'green-primary': '#70DF0B',
        'green-light': '#E8FFD3',
        'green-dark': '#0B2417',
      },
    },
  },
  plugins: [],
} satisfies Config
