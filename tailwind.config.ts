import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-primary': "#70DF0B",
        'green-light': "#E8FFD3",
        'green-dark': "#0B2417",
      },
    },
  },
  plugins: [],
} satisfies Config;
