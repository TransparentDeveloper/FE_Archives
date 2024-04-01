/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontWeight: {
        regular: 'regular',
        bold: 'bold',
      },
      fontFamily:{
        'king': ['KingSejongInstitute','sans-serif']
      },
    },
  },
  plugins: [],
}

