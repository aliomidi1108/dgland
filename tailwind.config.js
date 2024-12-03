/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily : {
      "iranyekanwebextraboldfanum" : "iranyekan web extrabold fanum ",
      "iranyekan-bold" : "iranyekan-bold ",
      "iranyekan-extrabold" : "iranyekan-extrabold ",
      "iranyekan" : "iran yekan ",
    },
    extend: {
      colors: {
        mycustomcolor: '#f6f5f5', 
        digiland: '#e10b0b',   
        graytext: '#A4A4A4',   
      }, 
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  }
  ],
}
