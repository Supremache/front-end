import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: ["class"],
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        quote: {
          DEFAULT: "hsl(var(--quotes))",
          foreground: "hsl(var(--quotes-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        "marquee-vertical": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
        "signal-ping": {
          "0%": { transform: "scale(1)", opacity: "0.5", borderStyle: 'solid' },
          "100%": { transform: "scale(2)", opacity: "0", borderStyle: 'solid' },
        },
      },
      animation: {
        "signal-ping": "signal-ping 2s cubic-bezier(0, 0, .5, 1) infinite",
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-6 md:px-16 lg:px-24 xl:max-w-[87.5rem]":
            {},
        },
        ".h1": {
          "@apply font-semibold text-[32px] leading-[3.25rem] md:text-[40px] md:leading-[48px] lg:text-[56px] lg:leading-[4.0625rem] xl:text-[64px] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply font-semibold text-[26px] leading-[2.5rem] md:text-[32px] md:leading-[2.5rem] lg:text-[40px] lg:leading-[3.5rem] xl:text-[48px] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply font-semibold text-[28px] leading-[2.5rem] md:text-[32px]":
            {},
        },
        ".h4": {
          "@apply font-semibold text-[26px] leading-[2.5rem]": {},
        },
        ".h5": {
          "@apply text-[20px] leading-normal": {},
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".body-1": {
          "@apply text-[16px] leading-[1.5rem] md:text-[18px] md:leading-[1.75rem] lg:text-[20px] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply font-light text-[16px] leading-6 text-[18px] leading-8 md:text-base":
            {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply font-grotesk font-light text-xs tracking-tagline": {},
        },
        ".quote": {
          "@apply text-lg leading-normal": {},
        },
      });
      addUtilities({});
    }),
    require("tailwindcss-animate"),
  ],
} satisfies Config;
