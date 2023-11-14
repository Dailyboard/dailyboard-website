const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{astro,ts,vue}'],
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
		},
		extend: {
			colors: {
				background: colors.gray[950],
				'background-weak': colors.gray[900],
				'background-primary': colors.emerald[600],
				'background-primary-hover': colors.emerald[500],
				'outline-primary': colors.emerald[500],
				text: colors.gray[50],
				'text-weak': colors.gray[200],
				'text-primary': colors.emerald[600],
				'text-primary-weak': colors.emerald[300],
			},
			animation: {
				'fade-left': 'fadeLeft 800ms ease-in-out',
				'fade-right': 'fadeRight 800ms ease-in-out',
			},
			keyframes: {
				fadeLeft: {
					'0%': {
						transform: 'translate(-20%, 0)',
						opacity: 0,
					},
					'100%': {
						transform: 'translate(0,0)',
						opacity: 100,
					},
				},
				fadeRight: {
					'0%': {
						transform: 'translate(20%, 0)',
						opacity: 0,
					},
					'100%': {
						transform: 'translate(0,0)',
						opacity: 100,
					},
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
