module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./comps/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#16a34a",
        dim: "#22c55e",
        lightDim: "#d1d5db",
        lightDim1: "#e4e4e7",
        secondary: "#164e63",
        highLight: "#f4f4f5",
        fullBlack: "#000000",
        lightGray: "#71717a",
        love: "#dc2626",
        lightLove: "#ffcccc",
      },
    },
  },
  plugins: [require('tailwind-styled-scrollbar')],
};
