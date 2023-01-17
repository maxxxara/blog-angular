/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    screens: {
      'xxs': {'max':'320px'},
      'xs': {'max':'370px'},
      'sm': {'max':'576px'},
      'md': {'max':'768px'},
      'lg': {'max':'1024px'},
      'xl': {'max':'1280px'},
      '2xl': {'max':'1536px'},
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'blue': '#9283E0',
      'pink': '#FF5480',
      'black': '#1C1C1C',
      'white': '#ffffff',
      'gray': '#9B9B9B',
      'grayLg': '#C8C8C8',
      'bogyBg': '#F9F9FB'
    }
  },
  plugins: [],
}