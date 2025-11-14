import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#130f78',
        'accent-yellow': '#daff35',
        'overlay-blue': '#1316b8',
      },
      fontFamily: {
        'sans': ['Lato', 'system-ui', 'sans-serif'],
        'lato': ['Lato', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'custom': '11px',
      },
    },
  },
  plugins: [],
};

export default config;

