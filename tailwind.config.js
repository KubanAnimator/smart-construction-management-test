/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        aliceblue: "#f1f5ff",
        black: "#000",
        mediumslateblue: "#6053f8",
        color: "#6a6a6a",
        white: "#fff",
        color1: "#d5d5d5",
      },
      spacing: {},
      fontFamily: {
        cygre: "Cygre",
        "cygre-semibold": "'Cygre SemiBold'",
        "cygre-book": "'Cygre Book'",
        "cygre-medium": "'Cygre Medium'",
        "cygre-black": "'Cygre Black'",
      },
      borderRadius: {
        "981xl": "1000px",
        "81xl": "100px",
        "11xl": "30px",
        "59xl": "78px",
      },
    },
    fontSize: {
      "71xl": "90px",
      "11xl": "30px",
      "16xl": "35px",
      "6xl": "25px",
      "141xl": "160px",
      "46xl": "65px",
      "17xl-1": "36.1px",
      "106xl": "125px",
      "41xl": "60px",
      "161xl": "180px",
      "61xl": "80px",
      "51xl": "70px",
      "81xl": "100px",
      "2xl": "21px",
      "9xl": "28px",
      "8xl": "27px",
      "26xl": "45px",
      inherit: "inherit",
    },
    screens: {
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
