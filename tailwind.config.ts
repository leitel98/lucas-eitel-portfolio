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
          50: '#fbf6fe',
          100: '#f5eafd',
          200: '#edd9fb',
          300: '#dfbbf7',
          400: '#cb90f0',
          500: '#b765e7',
          600: '#a246d7',
          700: '#8330b0',
          800: '#762f9a',
          900: '#61277c',
          950: '#43105b',
        },
        lemon: {
          50: '#fafcea',
          100: '#f1f8c9',
          200: '#e7f296',
          300: '#dfea5a',
          400: '#dbe22d',
          500: '#d3d11f',
          600: '#ab9e17',
          700: '#917c17',
          800: '#79621a',
          900: '#67521c',
          950: '#3c2c0c',
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
