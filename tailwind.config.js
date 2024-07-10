/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bgOrange": "#ffce8f",
        "custom-yellow": "#fef200",
        "custom-black": "#231f20",
        "custom-light-blue": "#0aabea",
        "custom-pink": "#ed008c",
        "custom-gray": "#a8a9ad",
        "custom-green": "#014b38",
        "custom-white": "#ffffff",
      },
    },
  },
  plugins: [],
};
