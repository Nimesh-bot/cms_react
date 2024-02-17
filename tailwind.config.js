/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontSize: {
      xs: ".5rem",
      sm: ".75rem",
      base: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "1.75rem",
      "3xl": "2rem",
      "4xl": "2.25rem",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      light: {
        secondary: "#F2F7F2",
        DEFAULT: "#ffffff",
      },
      dark: {
        secondary: "#212227",
        DEFAULT: "#191919",
      },
      primary: {
        light: "#897db3",
        DEFAULT: "#5941A9",
      },
      secondary: {
        light: "#00A7E125",
        DEFAULT: "#00A7E1",
      },
      danger: {
        light: "#FF6B6B25",
        DEFAULT: "#FF6B6B",
      },
      success: {
        light: "#2EC4B625",
        DEFAULT: "#2EC4B6",
      },
      warning: {
        light: "#F2AF2925",
        DEFAULT: "#F2AF29",
      },
      muted: {
        light: "#eeeeee",
        DEFAULT: "#14141515",
        dark: "#333333",
      },
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "50%",
      large: "12px",
    },
    extend: {
      screens: {
        mf: "1600px",
      },
      padding: {
        xxxs: "0.125rem",
        xxs: "0.25rem",
        xs: "0.5rem",
        sm: "0.75rem",
        md: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
        "2xl": "1.75rem",
        "3xl": "2rem",
        "4xl": "3rem",
      },
      margin: {
        xxxs: "0.125rem",
        xxs: "0.25rem",
        xs: "0.5rem",
        sm: "0.75rem",
        md: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
        "2xl": "1.75rem",
        "3xl": "2rem",
        "4xl": "3rem",
      },
      transition: {
        "ease-in-out": "all 0.3s ease-in-out",
      },
      keyframes: {
        "slide-up": {
          "0%": {
            transform: "translateY(100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "slide-down": {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(100%)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "slide-up": "slide-up 0.3s ease-in-out",
        "slide-down": "slide-down 0.3s ease-in-out",
        "fade-in": "fade-in 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
