/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.{html,js}"],
  theme: {
    extend: {
      // add custom shadow
      boxShadow:{
        '3xl':"0 0 10px rgba(0, 0, 0, 0.1)"}
    },
    fontFamily: {
      'times': ['Times New Roman', 'serif'],
    },
    
  },
  plugins: [],
}