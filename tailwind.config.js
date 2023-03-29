/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        main: '#111111',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
    backgroundImage: {
      'home-left': "url('../assets/images/blur-left.png')",
    },
    keyframes: {
      animeLeft: {
        from: { transform: 'translate3d(-40px, 0, 0)' },
        to: { transform: 'translate3d(0, 0, 0)' },
      },
    },
    animation: {
      animeLeft: 'animeLeft 0.5s forwards',
    },
  },
  plugins: [],
};
