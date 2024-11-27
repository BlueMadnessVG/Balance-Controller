/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-black": "#091512",
        "green-primary": "#23715c",
        "green-secondary": "#75dbc0",
        "green-accent": "#25ad88",
      },
    },
  },
  plugins: [],
};
