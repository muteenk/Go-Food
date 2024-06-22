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
      transparentWhite: "#ffffff31",
      transparentWhiteHover: "#ffffff46",
    },
    fontFamily: {
      pri: ["Poppins", "sans-serif"],
      sec: ["Marcellus", "serif"],
    }
  },
  plugins: [],
};
export default config;
