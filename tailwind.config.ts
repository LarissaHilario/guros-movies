import { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [typography],
  
  extend: {
    fontFamily: {
      overpass: ['Karla', 'sans-serif'],
    },
    maxHeight: {
      128: '48rem',
    },
  },
};

export default config;
