/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-glow': {
          'text-shadow': '0 0 25px #FFFFFF, 0 0 25px #FFFFFF',
        },
      });
    }),
  ],
}