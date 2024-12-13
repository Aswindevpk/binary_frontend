/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: '#242424',
				secondary: '#6b6b6b',
				neutral: '#F5F5F5',
				neutralLight: '#E0E0E0',
				neutralDark: '#333333',
				success: '#28A745',
				error: '#DC3545',
				warning: '#FFC107',
				info: '#17A2B8',
			},
			fontFamily: {
				sans: ['Manrope', 'font-sans']
			},
			animation: {
				'spin-slow': 'spin-slow 1.5s linear infinite',
			},
			keyframes: {
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'50%': { transform: 'rotate(120deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
			},

		},
		variants: {
			extend: {
				outline: ['focus'],
			},
		},
	},
	plugins: [],
}

