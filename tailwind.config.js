/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sun-gradient-radial': 'radial-gradient(circle at center, rgba(255, 0, 0, 0.3) 50%, rgba(255, 0, 0, 0.2) 50%, rgba(255, 0, 0, 0.2) 60%, rgba(255, 0, 0, 0.1) 60%)',
      },
      fontFamily: {
        japanese: ['Japanese3017', 'sans-serif'],
        lato: ['Lato-Regular', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
