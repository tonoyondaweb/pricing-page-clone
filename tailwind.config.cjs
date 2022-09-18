/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1080px',
    },
    colors: {
      // 'blue': '#1fb6ff'
      'green': {'100': '#00b289'},
      'grey': {'100': '#4c4d5f'},
      'yellow': '#f8db62',
      'white': '#fff'
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      serif: ['Domine', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '17': '4.2rem'
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
