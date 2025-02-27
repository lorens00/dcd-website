// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        allura: ['allura ', 'cursive'],
        raleway: ['raleway'],
        outfit: ['outfit'],
        poppins: ['poppins'],
        ostrichbold: ['ostrichbold', 'sans-serif'],
        ostrichmedium: ['ostrichmedium']
      },
    },
  },
  plugins: [],
}
