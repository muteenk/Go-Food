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
      transparentWhite: "#ffffff31",
      transparentWhiteHover: "#ffffff46",
    },
    fontFamily: {
      pri: ["Poppins", "sans-serif"],
      sec: ["Marcellus", "serif"],
    },
    animation: {
      rotate: "rotate 1s linear infinite",
    },
    keyframes: {
      rotate: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
    }
  },
  plugins: [],
};
export default config;
