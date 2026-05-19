import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular'],
      },
      colors: {
        ink: {
          50: '#faf8f6',
          100: '#f0ebe4',
          200: '#e0d4c7',
          300: '#cbb4a0',
          400: '#b58d67',
          500: '#a4795a',
          600: '#8f6449',
          700: '#76523b',
          800: '#5a3f2e',
          900: '#3d2820',
        },
        glow: {
          300: '#e8c5a0',
          400: '#d6a77a',
          500: '#c48860',
        },
        accent: {
          400: '#d6a77a',
          500: '#b58d67',
        },
      },
      boxShadow: {
        soft: '0 10px 40px rgba(15, 23, 42, 0.25)',
        glow: '0 0 40px rgba(52, 200, 255, 0.35)',
      },
      backgroundImage: {
        grid: 'linear-gradient(transparent 0, transparent 31px, rgba(120,120,140,0.25) 31px, rgba(120,120,140,0.25) 32px)',
        aurora: 'radial-gradient(circle at 20% 20%, rgba(52, 200, 255, 0.25), transparent 40%), radial-gradient(circle at 80% 10%, rgba(247, 185, 85, 0.2), transparent 38%), radial-gradient(circle at 60% 80%, rgba(88, 101, 181, 0.3), transparent 45%)',
      },
    },
  },
  plugins: [],
};

export default config;
