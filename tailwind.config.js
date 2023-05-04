/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      gold: '#CCA27D',
      goldd: '#FFEACD',
      dark: '#946E4C',
      zinc:  '#d4d4d8',
      zincbg: '#e4e4e7',
    },
    screens: {
      sm: '640px',
      //=> @media (min-width : 640px) {...}
      md: '768px',
      //=> @media (min-width : 640px) {...}
      lg: '1024px',
      //=> @media (min-width : 640px) {...}
      xl: '1280px',
      //=> @media (min-width : 640px) {...}
      '2xl': '1536px',
      //=> @media (min-width : 1536px) {...}
    },
  },
  plugins: [],
};
