module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "landing-bg": "url('../img/landing-bg.svg')",
      }),
      colors: {
        feather: "#77c9d4",
        marine: "#57bc90",
        forest: "#015249",
        sleek: "#a5a5af"
      },
    },
  },
  variants: {
    extend: {
      zIndex: ["hover"]
    },
  },
  plugins: [],
};
