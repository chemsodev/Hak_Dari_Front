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
          "Primarytext": "#0C1421",
          "Secondarytext": "#313957",
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
        Landingpages:{
          "bg-color" : "#FCFCFC",
          "brand primary" : "#57B8FF",
          "brand-secondary" : "#119BFF",
          "textPrimary" : "#0F0F0F",
        },
      },
      spacing: {},
    fontFamily: {
      "Poppins": ["Poppins", "sans-serif"],
      "Urbanist": ["Urbanist", "sans-serif"],
      "unbounded":["unbounded", "sans-serif"]
    }
  },
  },
  plugins: [],
};
