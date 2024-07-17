/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				slide: {
					"0%, 100%": {
						transform: "translateY(-25%)",
						"animation-timing-function":
							"cubic-bezier(0.8, 0, 1, 1)",
					},
					"50%": {
						transform: "translateY(0)",
						"animation-timing-function":
							"cubic-bezier(0, 0, 0.2, 1)",
					},
				},
			},
			backgroundImage: {
				"gradient-instagram":
					"linear-gradient(45deg, #f9ce34, #ee2a7b, #6228d7)",
			},
			animation: {
				slide: "slideIn 0.7s ease-out",
			},
		},
	},
	plugins: [],
};
