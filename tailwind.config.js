/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      screens: {
        'xs': '475px'
      },
      colors: {
        // Define your custom colors here
        secondaryColor: '#173C6A',
        primaryColor: '#5EBB95',
        darkTextColor: '#292929',
      },
      backgroundImage: theme => ({
        'noise-light': "url('/noise-light.png')",
      }),
    },
  },
  plugins: [],
}