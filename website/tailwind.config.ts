import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  darkMode: ["class", "class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          "0": "#ffffff",
          "50": "#e9e9e9",
          "100": "#bababa",
          "200": "#999999",
          "300": "#6a6a6a",
          "400": "#4d4d4d",
          "500": "#212121",
          "600": "#1e1e1e",
          "700": "#171717",
          "800": "#121212",
          "900": "#0e0e0e",
          "950": "#000000",
          "960": "#E9E9E90F",
          "970": "#292929",
          "980": "#1F1F1F",
        },
        orange: {
          "50": "#fbf6eb",
          "100": "#f4cdc2",
          "200": "#eeb5a4",
          "300": "#e7947a",
          "400": "#e27661",
          "500": "#db5f39",
          "600": "#c75634",
          "700": "#9b4328",
          "800": "#78341f",
          "900": "#5c2818",
          "950": "#39190f",
        },
        red: {
          "50": "#ffebed",
          "100": "#fec1c6",
          "200": "#fda3ab",
          "300": "#fc7984",
          "400": "#fc5f6d",
          "500": "#fb3748",
          "600": "#e43242",
          "700": "#b22733",
          "800": "#8a1e28",
          "900": "#69171e",
          "950": "#4b1016",
          "960": "#FB374829",
          "970": "#E53645",
        },
        green: {
          "50": "#e9fff0",
          "100": "#baecd1",
          "200": "#98e2bb",
          "300": "#69d59c",
          "400": "#4ccd89",
          "500": "#1fc16b",
          "600": "#1cb061",
          "700": "#16894c",
          "800": "#116a3b",
          "900": "#0d512d",
          "950": "#08351d",
        },
        yellow: {
          "50": "#fef8e9",
          "100": "#fce8b9",
          "200": "#fbd98d",
          "300": "#f9cd68",
          "400": "#f8c44b",
          "500": "#f6b51e",
          "600": "#e0a51b",
          "700": "#af8115",
          "800": "#876411",
          "900": "#674c0d",
          "950": "#483509",
        },
        app: {
          header: "hsl(var(--app-header))",
          border: "hsl(var(--app-border))",
          btn: "hsl(var(--app-btn))",
          "btn-text": "hsl(var(--app-btn-text))",
          "repo-text": "hsl(var(--app-repo-text))",
          "import-text": "hsl(var(--app-import-text))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        tx: {
          primary: "hsl(var(--tx-primary))",
          secondary: "hsl(var(--tx-secondary))",
          "base-secondary": "hsl(var(--tx-base-secondary))",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        "input-color": "hsl(var(--input-color))",
        "icon-color": "hsl(var(--icon-color))",
        "icon-disabled": "hsl(var(--icon-disabled))",
        "github-icon": "hsl(var(--github-icon))",
        "github-text": "hsl(var(--github-text))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        beam: {
          "0%": { strokeDashoffset: "100%" },
          "10%": { strokeDashoffset: "0%" },
          "100%": { strokeDashoffset: "0%" },
        },
      },
      animation: {
        beam: "beam 1s ease-in infinite reverse",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
