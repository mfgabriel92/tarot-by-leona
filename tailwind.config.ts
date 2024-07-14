import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      DEFAULT: "1180px",
      lg: "1180px",
      md: "992px",
      sm: "768px",
      xs: "576px",
    },
    extend: {
      fontFamily: {
        title: "var(--cinzel-regular)",
        body: "var(--luthier-regular)",
      },
      colors: {
        pink: {
          900: "#380F25",
          500: "#B20EBC",
          300: "#C54DA7",
        },
        purple: {
          400: "#5E4A5E",
          300: "#836088",
          100: "#C1A5CB",
        },
        gray: {
          500: "#474747",
        },
        yellow: {
          400: "#FED47F",
        },
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
export default config;
