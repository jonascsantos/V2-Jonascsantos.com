/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#049CB1",
      secondary: "#DFF4F6",
      "gradient-1": "#049CB1",
      "gradient-2": "#0EC9E3",
      "gradient-3": "#0DCDC2",
      "cloudy-white": "#F8F9FF",
      "cloudy-black": "#324B50",
    },
    extend: {
      backgroundImage: (theme) => ({
        "gradient-hero": `linear-gradient(to right, ${theme(
          "colors.gradient-1"
        )}, ${theme("colors.gradient-2")}, ${theme(
          "colors.gradient-1"
        )}, ${theme("colors.gradient-2")}, ${theme(
          "colors.gradient-1"
        )}, ${theme("colors.gradient-2")})`,
      }),
      boxShadow: {
        button: "1px 2px 3px 0px rgba(0, 0, 0, 0.11)",
      },
      animation: {
        blob: "blob linear infinite 6s",
        blobImage: "blobImage linear infinite 6s",
        textGradient: "textGradient 6s ease infinite;",
      },
      keyframes: {
        blob: {
          "0%, 100%": { borderRadius: "40% 58% 55% 45% / 59% 60% 40% 41%" },
          "35%": {
            borderRadius: "64% 35%  60% 45% / 63% 50% 52% 40%",
          },
          "75%": {
            borderRadius: "53% 53% 38% 62% / 62% 48% 51% 40%",
          },
        },
        blobImage: {
          "0%, 100%": { borderRadius: "49% 60% 67% 54% / 59% 60% 40% 41%" },
          "35%": {
            borderRadius: "77% 45% 63% 48% / 60% 64% 49% 40%",
          },
          "75%": {
            borderRadius: "59% 62% 44% 62% / 62% 48% 51% 40%",
          },
        },
        textGradient: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      },
    },
  },
};
