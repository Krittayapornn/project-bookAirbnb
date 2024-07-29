/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        menubar: "rgba(248,250,252,0.6)",
      },
    },
  },
  plugins: [],
}

