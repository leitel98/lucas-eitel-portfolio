import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        royal: {
          50: '#f7f5fa',
          100: '#edeaf4',
          200: '#d6cfe8',
          300: '#b1a6d3',
          400: '#8675bb',
          500: '#6754a3',
          600: '#544188',
          700: '#46356f',
          800: '#3c2f5d',
          900: '#362b4f',
          950: '#0e0b14',
        },
      },
    },
    fontFamily: {
      sans: ['rosario', 'sans-serif'],
    },
  },
  plugins: [nextui()],
};

// Export the Tailwind CSS configuration
export default config;
