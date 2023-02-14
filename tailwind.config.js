/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: `#95389E`,
        secondary: `#43D8C9`,
        gray: `#959595`,
        light: `#fff`,
        dark: `#000`,
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "999px",
      xl: "1240px",
      xxl: "1640px",
    },

    container: {
      center: true,
      padding: "15px",
    },
  },
  plugins: [],
};
