/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#EFFAFA",
      },
      boxShadow: {
        primary: "box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15)",
      },
      opacity: {
        primary: 0.10000000149011612,
      },
    },
  },
  plugins: [],
};
