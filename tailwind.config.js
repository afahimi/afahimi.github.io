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
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}

