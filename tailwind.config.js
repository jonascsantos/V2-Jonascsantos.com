/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        blob: "blob linear infinite 6s",
        blobImage: "blobImage linear infinite 6s",
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
      },
    },
  },
};
