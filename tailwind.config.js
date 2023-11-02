/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4dead5",
          secondary: "#4141a0",
          accent: "#cc8be0",
          neutral: "#3c243d",
          "base-100": "#f2f2f2",
          info: "#60b7dc",
          success: "#139052",
          warning: "#f4dc67",
          error: "#f2648c",
        },
      },
    ],
  },
};
