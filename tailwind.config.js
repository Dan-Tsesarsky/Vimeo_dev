let randomNumber = Math.round(Math.random()) * 10;
let randombgColor = randomNumber > 5 ? "#F9F0F4" : "#F3F8FE";
let randomButton = randomNumber > 5 ? "#d86995" : "#517BAC";
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      
    },

    extend: {
      colors: {
        blue: {
          850: "#0FAEF1",
          950: "#1393CD",
          975: "#5276A6",
          1000: randombgColor,
          1050: randomButton,
          1100: "#262626",
          1150: "#F3F8FE",
          1200: "#202F3B",
          1300: "#1a2e3b",
        },
        white: {
          100: "#FFFFFF",
          150: "#F2F8FA",
          250: "#879CAB",
        },
      },
    },
    width: {
      252: "252px",
      259: "265px",
      345: "345px",
      385: "385px",
      420: "420px",
      530: "530px",
      570: "570px",
      582: "582px",
    },
    letterSpacing: {
      mytightest: "-1.53px",
    },
    maxWidth: {
      "1/4": "25%",
      "1/3": "33%",
      "1/2": "50%",
      420: "420px",
      "3/4": "75%",
    },

    backgroundSize: { "50%": "50%" },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
