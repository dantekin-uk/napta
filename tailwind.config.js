/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        napta: {
          navy: '#0f2557',
          blue: '#1e40af',
          brightBlue: '#2563eb',
          green: '#22c55e',
          lightGreen: '#4ade80',
        }
      }
    },
  },
  plugins: [],
}
