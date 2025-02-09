import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
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
					"2": "hsl(var(--primary-2))",
					"3": "hsl(var(--primary-3))",
					foreground: "hsl(var(--primary-foreground))",
					main: "hsl(var(--primary-main))",
				},
				black: {
					DEFAULT: "hsl(var(--black))",
					"2": "hsl(var(--black-2))",
					"3": "hsl(var(--black-3))",
					foreground: "hsl(var(--black-foreground))",
				},
				grey: {
					DEFAULT: "hsl(var(--grey))",
					"2": "hsl(var(--grey-2))",
					"3": "hsl(var(--grey-3))",
					foreground: "hsl(var(--grey-foreground))",
				},
				"light-grey": {
					DEFAULT: "hsl(var(--light-grey))",
					"2": "hsl(var(--light-grey-2))",
					"3": "hsl(var(--light-grey-3))",
					foreground: "hsl(var(--light-grey-foreground))",
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
				red: {
					DEFAULT: "hsl(var(--red))",
					foreground: "hsl(var(--red-foreground))",
				},
				white: {
					DEFAULT: "hsl(var(--white))",
					foreground: "hsl(var(--white-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
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
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
