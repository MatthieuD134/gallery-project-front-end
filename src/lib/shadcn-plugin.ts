import plugin from "tailwindcss/plugin";

export const shadcnPlugin = plugin(
  // 1. Add CSS variable definitions to the base layer
  function ({ addBase }) {
    addBase({
      ":root": {
        "--background": "0 0% 100%",
        "--foreground": "210 39% 9%", // eslint-disable-line sonarjs/no-duplicate-string
        "--card": "0 0% 100%",
        "--card-foreground": "210 39% 9%",
        "--popover": "0 0% 100%",
        "--popover-foreground": "210 39% 9%",
        "--primary": "210 39% 9%", // eslint-disable-line sonarjs/no-duplicate-string
        "--primary-foreground": "0 0% 100%", // eslint-disable-line sonarjs/no-duplicate-string
        "--secondary": "40 87% 82%", // eslint-disable-line sonarjs/no-duplicate-string
        "--secondary-foreground": "210 39% 9%", // eslint-disable-line sonarjs/no-duplicate-string
        "--tertiary": "359 54% 43%",
        "--tertiary-foreground": "0 0% 100%",
        "--muted": "210 40% 96.1%",
        "--muted-foreground": "215.4 16.3% 46.9%",
        "--accent": "210 40% 96.1%",
        "--accent-foreground": "222.2 47.4% 11.2%",
        "--destructive": "0 84.2% 60.2%",
        "--destructive-foreground": "210 40% 98%",
        "--border": "214.3 31.8% 91.4%",
        "--input": "214.3 31.8% 91.4%",
        "--ring": "222.2 84% 4.9%",
        "--radius": "0.5rem",
      },
      ".dark": {
        "--background": "0 0% 100%",
        "--foreground": "210 39% 9%", // eslint-disable-line sonarjs/no-duplicate-string
        "--card": "0 0% 100%",
        "--card-foreground": "210 39% 9%",
        "--popover": "0 0% 100%",
        "--popover-foreground": "210 39% 9%",
        "--primary": "210 39% 9%", // eslint-disable-line sonarjs/no-duplicate-string
        "--primary-foreground": "0 0% 100%", // eslint-disable-line sonarjs/no-duplicate-string
        "--secondary": "40 87% 82%", // eslint-disable-line sonarjs/no-duplicate-string
        "--secondary-foreground": "210 39% 9%", // eslint-disable-line sonarjs/no-duplicate-string
        "--tertiary": "359 54% 43%",
        "--tertiary-foreground": "0 0% 100%",
        "--muted": "210 40% 96.1%",
        "--muted-foreground": "215.4 16.3% 46.9%",
        "--accent": "210 40% 96.1%",
        "--accent-foreground": "222.2 47.4% 11.2%",
        "--destructive": "0 84.2% 60.2%",
        "--destructive-foreground": "210 40% 98%",
        "--border": "214.3 31.8% 91.4%",
        "--input": "214.3 31.8% 91.4%",
        "--ring": "222.2 84% 4.9%",
        "--radius": "0.5rem",
      },
    });

    addBase({
      "*": {
        "@apply border-border": {},
      },
      body: {
        "@apply bg-background text-foreground": {},
      },
    });
  },

  // 2. Extend the Tailwind theme with utilities
  {
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          tertiary: {
            DEFAULT: "hsl(var(--tertiary))",
            foreground: "hsl(var(--tertiary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
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
    },
  },
);
