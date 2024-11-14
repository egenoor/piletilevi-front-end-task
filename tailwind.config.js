/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      white: "#fff",
      "violet-100": "#3C00E5",
      'violet-200': "#19005F",
      'blue-200': "#212A4F",
      'gray-100': "#f5f5f7",
      'gray-150': "#EAE9EF",
      'gray-200': "#D6D2E1",
      'gray-300': "#9A9A9A",
      'gray-350': "#626262",
      'black': "#1A1A1A",
    },
    fontFamily: {
      'body': ['"Roboto"'],
      'title': ['"Montserrat"']
    },
    extend: {},
  },
  plugins: [],
}

