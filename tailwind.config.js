/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#A9CAD2',
        'custom-light-blue': '#daeff5',
        'custom-blue-bg': '#CCE0E5',
        'custom-blue-hover': '#7FA6AC',
        'custom-blue-lt': '#f5faff',
        'custom-blue-item': '#b2d4e1',
      },
      spacing: {
        '150': '150px',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'sdm': '1.5rem',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}

