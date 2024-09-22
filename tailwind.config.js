/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        p1: '#D5DDF6ff',
        p2: '#1C38A5ff',
        p3: '#151D6Eff',
        p4: '#34619Fff',
        p5: '#5A71A4ff',
      },
      fontFamily: {
        inter: ["Inter", "system-ui"],
        gowun: ["Gowun Dodum", "sans-serif"],
        // nasa: ["Nasa", "sans-serif"],
      },
    },
  },
  plugins: [],
}