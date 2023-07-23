/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["winter",
      {
        mytheme: {

          "primary": "#dfff96",

          "secondary": "#1d7da3",

          "accent": "#f7a8e8",

          "neutral": "#1d1e2a",

          "base-100": "#ecdff1",

          "info": "#22a5ec",

          "success": "#15896a",

          "warning": "#eecd59",

          "error": "#ec5569",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}

