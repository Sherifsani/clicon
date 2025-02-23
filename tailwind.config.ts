import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "warning-300": "#F3DE6D",
        "warning-500": "#EBC80C",
        "gray-900": "#191C1F",
        "gray-800": "#303639",
        "gray-300": "#ADB7BC",
        "gray-nil": "#303639",
      },
    },
  },
  plugins: [],
} satisfies Config;
