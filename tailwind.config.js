/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'eclipse-background' : 'url("/src/assets/imagens/Ellipse_2.png"), radial-gradient(50% 50% at 50.01% 50.01%, #FFFFFF 0%, #E7EFFA 100%)',
        'bg-circle' : 'url("src/assets/imagens/bg-circle.svg")'
      },
    
      colors: {
        customBlack : '#02033B',
        customWhite : '#F3F8FF',
        CustomText : '#02033B',
        customBg: '#FFC247',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}
}
