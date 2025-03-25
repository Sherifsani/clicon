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
        "warning-400": "#EFD33D",
        "warning-500": "#EBC80C",
        "gray-900": "#191C1F",
        "gray-800": "#303639",
        "gray-300": "#ADB7BC",
        "gray-nil": "#303639",
        "secondary-500": "#2DA5F3",
        "secondary-600": "#2484C2",
        "primary-500": "#FA8232",
        "primary-100": "#FFE7D6",
        "danger-500": "#EE5858",
        "danger-600": "#BE4646",
      },
    },
  },
  plugins: [],
} satisfies Config;
