module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: "500px",
        smaller: "540px",
      },
      fontSize: {
        verySmall: "10px",
      },
      colors: {
        mainDarkBlue: "#091c29",
      },
      maxWidth: {
        twoPointFivexl: "700px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
