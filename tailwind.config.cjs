const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{astro,ts,vue}'],
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
		},
		extend: {
			colors: {
				background: colors.gray[900],
				'background-primary': colors.emerald[600],
				'background-primary-hover': colors.emerald[500],
				'outline-primary': colors.emerald[500],
				text: colors.gray[50],
				'text-weak': colors.gray[200],
				'text-primary': colors.emerald[600],
				'text-primary-weak': colors.emerald[300],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
