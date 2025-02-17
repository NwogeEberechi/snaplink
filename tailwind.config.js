/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts,jsx}"],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          satoshi: ['Satoshi', 'sans-serif'],
          inter: ['Inter', 'sans-serif'],
        },
        colors: {
          'primary-orange': '#FF5722',
        }
      },
    },
  },
  plugins: [],
}

