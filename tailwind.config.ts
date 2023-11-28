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
        electric: {
          50: '#fbf4ff',
          100: '#f7e9fe',
          200: '#eed2fc',
          300: '#e3aef9',
          400: '#d47df5',
          500: '#bf4ce9',
          600: '#a22bca',
          700: '#8b21aa',
          800: '#731d8b',
          900: '#611d72',
          950: '#3e064c',
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
export default config;
