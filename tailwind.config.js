/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-500": "#543EE0",
        "blue-200": "#BBB2F3",
        "blue-400": "#7664E6",
        "blue-100": "#D6D1F8",
        "yellow-200": "#FFEDCC",
      },
      backgroundImage: {
        "background-image": "url('/backgroundImage.jpg')",
        "login-signup": "url('/login-signup.jpg')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      '2xl': "1440px"
    },
  },
  plugins: [],
};
