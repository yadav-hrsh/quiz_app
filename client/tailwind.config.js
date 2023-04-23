/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      "dark-purple": "#081A51",
      "light-white": "rgba(255,255,255,0,0.17)"
    }
  },
};
export const plugins = [];
