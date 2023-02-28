/** @type {import("tailwindcss").Config} */
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
				},
			},
		},
	},
	plugins: [],
}
