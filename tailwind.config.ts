import { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [typography],
  
  extend: {
    fontFamily: {
      overpass: ['Overpass Mono', 'monospace', 'sans-serif'],
    },
    maxHeight: {
      128: '48rem',
    },
  },
};

export default config;
