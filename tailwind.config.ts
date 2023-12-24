import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    colors: {
      white: "#fff",
      primary: "#BFAFF2",
      secondary: "#F8D57E",
      background: "#2B2B2B",
      grey: "#ffffff66",
      dark: "#2B2B2B"
    },
    borderRadius: {
     normal: "0.9375rem",
     large: "1.25rem",
     full: "100%"
    },
    lineHeight: {
      large: "5.625rem",
      normal: "2rem",
      medium: "2.5rem",
    },
    fontSize: {
      normal: "1.125rem",
      large: "3.75rem",
      medium: "2.5rem",
    },
    gap: {
      large: "3.75rem"
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config