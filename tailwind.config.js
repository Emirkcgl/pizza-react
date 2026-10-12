/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Mono", "monospace"],
      },
      height: {
        header: "100dvh",
      },
    },
  },
  plugins: [],
};
