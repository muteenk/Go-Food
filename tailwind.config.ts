import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      darkText: "#313131",
      grayText: "#7c7c7a",
      priColor: "#345333",
      secColor: "#f1c74b",
      softGray: "#f2f2ec",
      featherGray: "#e7e7e7",
      transparentWhite: "#ffffff31",
      transparentWhiteHover: "#ffffff46",
    },
    fontFamily: {
      pri: ["Poppins", "sans-serif"],
      sec: ["Marcellus", "serif"],
    },
    animation: {
      rotate: "rotate 1s linear infinite",
      slideLeft: "slideLeft 1s ease-in-out forwards",
      slideUp: "slideUp 1s ease-in-out forwards",
      fadeIn: "fadeIn 0.5s ease-in-out forwards",
      leafAnimation: "leafAnimation 1s ease-in-out forwards",
    },
    keyframes: {
      rotate: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
      slideLeft: {
        "0%": { 
          transform: "translateX(100%)",
          opacity: "0"
         },
        "100%": { 
          transform: "translateX(0%)",
          opacity: "1"
         },
      },
      slideUp: {
        "0%": { 
          transform: "translateY(-90%)",
          opacity: "0"
         },
        "100%": { 
          transform: "translateY(-50%)",
          opacity: "1"
         },
      },
      fadeIn: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      leafAnimation: {
        "0%": { 
          transform: "rotate(-120deg)",
          top: "0.5em",
          right: "14em"
        },
        "50%": {
          transform: "rotate(-90deg)",
          top: "0.9em",
          right: "16.5em"
        },
        "100%": { 
          transform: "rotate(-120deg)",
          top: "1.5em",
          right: "15em"
        },
      },
    }
  },
  plugins: [],
};
export default config;
