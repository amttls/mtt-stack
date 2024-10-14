/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: ["../../tailwind.config.js"],
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "../../packages/ui/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
