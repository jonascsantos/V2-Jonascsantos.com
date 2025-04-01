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
      "sky-blue": "#99e0ff",
      project1Bg: "#E4F2FF",
      project1Primary: "#1D4ED8",
      project1Secondary: "#148BFF",
      project1Tertiary: "#3E5DFF",
      project2Bg: "#F2FFF5",
      project2Primary: "#46B24A",
      project2Secondary: "#95AF4C",
      project2Tertiary: "#DF5E4A",
      project3Bg: "#EFFFFD",
      project3Primary: "#00C7AE",
      project3Secondary: "#02E9CB",
      project3Tertiary: "#67F3B7",
      project4Primary: "#070707",
      project4Secondary: "#190084",
      project4Tertiary: "#2400c0",
      project5Bg: "#27245c",
      project5Primary: "#27245c",
      project5Secondary: "#232052",
      project5Tertiary: "#67658c",
      project6Bg: "#429A96",
      project6Primary: "#3C8784",
      project6Secondary: "#184C49",
      project6Tertiary: "#1B5855",
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

        "gradient-project-1": `linear-gradient(to bottom right, ${theme(
          "colors.project1Primary"
        )}, ${theme("colors.project1Secondary")}, ${theme(
          "colors.project1Tertiary"
        )}, ${theme("colors.project1Secondary")}, ${theme(
          "colors.project1Primary"
        )}, ${theme("colors.project1Secondary")})`,

        "gradient-project-2": `linear-gradient(to bottom right, ${theme(
          "colors.project2Primary"
        )}, ${theme("colors.project2Secondary")}, ${theme(
          "colors.project2Tertiary"
        )}, ${theme("colors.project2Secondary")}, ${theme(
          "colors.project2Primary"
        )}, ${theme("colors.project2Secondary")})`,

        "gradient-project-3": `linear-gradient(to right, ${theme(
          "colors.project3Primary"
        )}, ${theme("colors.project3Secondary")}, ${theme(
          "colors.project3Tertiary"
        )}, ${theme("colors.project3Secondary")}, ${theme(
          "colors.project3Primary"
        )}, ${theme("colors.project3Secondary")})`,

        "gradient-project-4": `linear-gradient(to right, ${theme(
          "colors.project4Primary"
        )}, ${theme("colors.project4Secondary")}, ${theme(
          "colors.project4Tertiary"
        )}, ${theme("colors.project4Secondary")}, ${theme(
          "colors.project4Primary"
        )}, ${theme("colors.project4Secondary")})`,

        "gradient-project-5": `linear-gradient(to right, ${theme(
          "colors.project5Primary"
        )}, ${theme("colors.project5Secondary")}, ${theme(
          "colors.project5Tertiary"
        )}, ${theme("colors.project5Secondary")}, ${theme(
          "colors.project5Primary"
        )}, ${theme("colors.project5Secondary")})`,

        "gradient-project-6": `linear-gradient(to right, ${theme(
          "colors.project6Primary"
        )}, ${theme("colors.project6Secondary")}, ${theme(
          "colors.project6Tertiary"
        )}, ${theme("colors.project6Secondary")}, ${theme(
          "colors.project6Primary"
        )}, ${theme("colors.project6Secondary")})`,

        "gradient-work": `radial-gradient(at 96% 98%, hsla(193, 70%, 56%, 1) 0px, transparent 50%),
        radial-gradient(at 95% 74%, hsla(33, 78%, 74%, 0.81) 0px, transparent 50%),
        radial-gradient(at 2% 96%, hsla(187, 96%, 50%, 1) 0px, transparent 50%),
        radial-gradient(at 87% 1%, hsla(193, 70%, 50%, 1) 0px, transparent 50%),
        radial-gradient(at 64% 55%, hsla(193, 70%, 51%, 1) 0px, transparent 50%),
        radial-gradient(at 17% 70%, hsla(193, 70%, 52%, 1) 0px, transparent 50%),
        radial-gradient(at 0% 8%, hsla(193, 70%, 40%, 1) 0px, transparent 50%);`,
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
