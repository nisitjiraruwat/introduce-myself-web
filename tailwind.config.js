module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      width: {
        print: '21.0cm'
      },
      height: {
        print: '29.7cm'
      },
      colors: {
        'black-gray': '#434343',
        primary: {
          100: '#ffefe0',
          200: '#ffdac1',
          300: '#ffc1a2',
          400: '#ffa98b',
          500: '#ff8165',
          600: '#db5949',
          700: '#b73632',
          800: '#932025',
          900: '#7a131f'
        },
        secondary: {
          100: '#cffcee',
          200: '#a1f9e6',
          300: '#6feddd',
          400: '#4adcd5',
          500: '#17bec5',
          600: '#1096a9',
          700: '#0b728d',
          800: '#075272',
          900: '#043c5e'
        }
      }
    }
  },
  plugins: []
}
