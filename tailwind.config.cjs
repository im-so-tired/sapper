/** @type {import("tailwindcss").Config} */
const plugin = require("tailwindcss/plugin")
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				gray: {
					200: "#C0C0C0",
					300: "#BDBDBD",
					500: "#7B7B7B",
				},
			},
		},
	},
	plugins: [plugin(function({ addUtilities, theme }) {
		addUtilities({
			".flex-center": {
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			},
			".border-insert": {
				borderBottom: "3px solid white",
				borderRight: "3px solid white",
				borderTop: `3px solid #7B7B7B`,
				borderLeft: `3px solid #7B7B7B`,
			},
		})
	})],
}
