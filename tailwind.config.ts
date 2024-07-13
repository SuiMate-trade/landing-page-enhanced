import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      black: {
        100: "#232323"
      },
      white: {
        100: "#fff"
      }
    }
  },
  plugins: [],
} satisfies Config;
