/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },

    screens: {
      xs: "600px",
      sm: "740px",
    },
  },
  plugins: [],
};
