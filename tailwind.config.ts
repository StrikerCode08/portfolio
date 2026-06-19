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
          50: '#f2f2f2',
          100: '#e5e5e5',
          200: '#cfcfcf',
          300: '#a8a8a8',
          400: '#7d7d7d',
          500: '#666666',
          600: '#4d4d4d',
          700: '#333333',
          800: '#202020',
          900: '#111111',
        },
      },
      boxShadow: {
        soft: 'none',
      },
    },
  },
  plugins: [],
};

export default config;
