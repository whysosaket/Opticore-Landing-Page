/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        p1: "#F94C66ff",
        p2: "#D86EE0ff",
        p3: "#2138EFff",
        p4: "#000005ff",
        p5: "#D726F9ff",
      },
      fontFamily: {
        inter: ["Inter", "system-ui"],
        gowun: ["Gowun Dodum", "sans-serif"],
        crr: ["CRR", "sans-serif"],
        crroutline: ["CRR Outline", "sans-serif"],
        ld: ["Londrina Outline", "sans-serif"]
      },
      animation: {
        marquee: 'marquee 500s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
    },
  },
  plugins: [],
}