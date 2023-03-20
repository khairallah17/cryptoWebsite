/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins','sans-serif']
      },
      colors: {
        primary: "#FF6415",
        secondary: "#FF8A50",
        white: "#FFFFFF",
        gray: "#666666",
        bg: "#2F2F2F",
        bg_sec: "#0B0101",
        yellow: "#FFB950"
      },
      backgroundImage: {
        'logos': "url('../../public/assets/bg-logos.png')"
      }
    },
  },
  plugins: [],
}
