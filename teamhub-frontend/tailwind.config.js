import daisyui from "daisyui";
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        ibmplexsans: ['"IBM Plex Sans"', "sans-serif"],
        ibmplexserif: ['"IBM Plex Serif"', "serif"],
      },
    },
  },
  plugins: [daisyui, flowbite.plugin()],
  daisyui: {
    themes: ["light", "dark", "corporate", "lofi", "acid", "pastel", "cmyk"],
  },
};
