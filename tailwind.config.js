/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // // './pages/**/*.{html,js}',
    // './public/{index.html, styles.css}'
  ],
  theme: {
    extend: {
      colors:{
        primary:'#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        }
      },
      fontSize: {
        mammoth: '8rem',
    }
    },
    fontFamily: {
      body: ['Nunito']
    }
  },
  plugins: [],
}
