/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      violet: "#3C00E5",
      'dark-violet': "#19005F",
      white: "#fff",
      'light-gray': "#f5f5f7",
      'almost-black': "#1A1A1A"
    },
    fontFamily: {
      'body': ['"Roboto"'],
      'title': ['"Montserrat"']
    },
    extend: {},
  },
  plugins: [],
}

