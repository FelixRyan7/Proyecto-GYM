/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-green)", 
          light: "var(--color-green-light)"
        },
        dark: {
          DEFAULT: "var(--color-dark)",
        },
        background: {
          DEFAULT: "var(--color-background)",
         
         
        },
        gray: {
          DEFAULT: "var(--color-gray)",
         
         
        },
        secondary: {
          DEFAULT: "var(--color-secondary)"
        }
      }
    },
  },
  plugins: [],
};
