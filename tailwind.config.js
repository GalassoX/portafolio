/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        port: {
          blueground: {
            100: "#3B9090",
            200: "#1A8585",
            300: "#335858"
          },
          font: "#fef2c1"
        }
      }
    },
  },
  plugins: [],
}

