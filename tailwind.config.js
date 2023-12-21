module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      gradientColorStops: (theme) => ({
        primary: "#14F195",
        secondary: "#9945FF",
      }),
    },
  },
  plugins: [
    require("tailwindcss-gradients"),
    // ...
  ],
};
