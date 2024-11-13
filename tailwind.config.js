/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      violet: "#3C00E5",
      gray: "#9A9A9A",
      white: "#fff",
      'dark-violet': "#19005F",
      'dark-blue': "#212A4F",
      'light-gray': "#f5f5f7",
      'almost-black': "#1A1A1A",
      'dark-gray': "#626262",
      'input-border': "#D6D2E1"
    },
    fontFamily: {
      'body': ['"Roboto"'],
      'title': ['"Montserrat"']
    },
    extend: {},
  },
  plugins: [],
}

