import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'hot-pink': '#FF2F92',
        'rose-pink': '#FF6FAE',
        'mint-green': '#8FD3A8',
        'soft-green': '#6BCF9B',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #FF2F92 0%, #6BCF9B 100%)',
        'gradient-hero': 'linear-gradient(120deg, #FF2F92 0%, #FF6FAE 50%, #8FD3A8 100%)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(255, 47, 146, 0.05) 0%, rgba(111, 207, 155, 0.05) 100%)',
      },
      boxShadow: {
        'custom-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'custom-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'custom-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'custom-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'custom-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'pink-glow': '0 4px 12px rgba(255, 47, 146, 0.3)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      spacing: {
        '4xl': '80px',
        '3xl': '64px',
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float-dot': 'floatDot 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.25s ease',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '1' },
          '50%': { transform: 'translate(-50%, -50%) scale(1.05)', opacity: '0.8' },
        },
        floatDot: {
          '0%, 100%': { transform: 'translateY(-50%) translateX(0)' },
          '50%': { transform: 'translateY(-50%) translateX(-10px)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
