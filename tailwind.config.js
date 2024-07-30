/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        primary: "#ff0000",
        secondary: "#00ff00",
        login: {
          "Primary text": "#0C1421",
          "Secondary text": "#313957",
          "Link": "#1E4AE9",
          "inputbg": "#F3F9FA",
          "labels": "#0f0f0f",
          "btn": "#162d3a",
          "charcoal": "#252525",
          "oceanGreen": "#294956",
          "silver": "#959cb5",
          "hr": "#cfdfe2",
          "btnText": "#ffffff",
        },
      },
      spacing: {},
    fontFamily: {
      "roboto": "Roboto",
      "small": "Poppins",
      "h1": "Urbanist"
    }
  },
  fontSize: {
    base: "16px",
    xl: "20px",
    "3xl": "22px",
    "7xl": "26px",
    "21xl": "40px",
    inherit: "inherit",
  },
  },
  plugins: [],
};
