/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing:{
        'my-p':'19px',
        'my-w':'640px',
        'my-h':'386px',
        'my-b':'30px',
        'my-p1':'29px',
        'my-p2':'15px',
        'my-w1':'75%',
        'my-h1':'90px',
        'my-mb':'60px',
        'my-cw':'310px',
        'my-ch':'236px'
      },
      fontSize:{
        'my-tx':'26px'
      }
    },
  },
  plugins: [],
}
