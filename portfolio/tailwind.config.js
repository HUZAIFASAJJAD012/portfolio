/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        'xs': '480px', // Example: Add a custom breakpoint for extra small devices
        'xxl': '1440px', // Example: Add a custom breakpoint for extra-large screens
      },

      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        customblack: "#1A1A1A",
   
      },
    },
  },
  plugins: [],
}

