/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-blue": "#38BDF8",
      },
      backgroundImage: {
        "hero-image": "url('/images/hero-img.jpg')",
      },
    },
  },
  plugins: [
    // ...
    require("@tailwindcss/forms"),
  ],
};
