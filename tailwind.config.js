/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
      },
      colors: {
        primary: '#40BFFF',
        secondary: '#33A0FF',
        customGreen: '#48DE96',
        customRed: '#FB7181',
        customBlue: '#48BADE',
        neutralGrey: '#9098B1',
        primaryDark: '#22262A',
        lightNeutral: '#EBF0FF',
        customGray: '#F6F7F8',
      },
    },
  },

  plugins: [],
}

