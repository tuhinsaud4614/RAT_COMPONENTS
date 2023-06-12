/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        primary: colors.orange[700],
        secondary: colors.teal[500],
        neutral: colors.gray[900],
        "neutral-dark": colors.white,
        "muted-1": colors.gray[700],
        "muted-2": colors.gray[500],
        "muted-dark": colors.gray[400],
        "base-100": colors.white,
        "base-dark-100": colors.gray[900],
        info: colors.blue[800],
        "info-dark": colors.blue[400],
        success: colors.green[800],
        "success-dark": colors.green[400],
        warning: colors.yellow[800],
        "warning-dark": colors.yellow[400],
        error: colors.red[800],
        "error-dark": colors.red[400],
      }),
      animation: {
        "bounce-x": "bounce-x 1s"
      },
      keyframes: {
        "bounce-x": {
          "0%, 100%": {
            transform: "none",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)"
          },
          "50%": {
            transform: "translateX(25%)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)"
          }
        }
      }
    },
  },
  plugins: [],
}

