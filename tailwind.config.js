/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html", "./src/js/*.js"],
  theme: {
    colors: {
      transparent: "transparent",
      red: {
        DEFAULT: "#CE0000",
        "brown-desaturated": "#C26969",
      },
      green: {
        DEFAULT: "#008C41",
        cyan: "#57C78B",
      },
      white: {
        DEFAULT: "#FFFFFF",
        smoke: "#F5F5F5",
      },
      black: {
        DEFAULT: "#000000",
        pure: "#090909",
        traffic: "#1E1E1E",
        onyx: "#0C0C0C",
        carbon: "#1A1A1A",
      },
      gray: {
        DEFAULT: "#D7D7D7",
        metalic: "#585858",
        graphite: "#565656",
        slate: "#424242",
        taupe: "#8C8C8C",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1366px",
      "2xl": "1920px",
    },
    extend: {
      backgroundImage: {
        square:
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
