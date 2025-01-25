/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      backgroundColor : {
        'primary' : '#3498db',
        'background': '#3D0031',
        'input' : "rgba(255, 255, 255, 0.126)",
        'buttonsign' : "rgba(135, 0, 117, 0.687)"
      }
    },
  },
  plugins: [],
}