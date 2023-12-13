/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

const h1 = '#37474f'
const h2 = '#7D7D7D'
const bg = '#FAFAFA'

const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
		'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		colors: {
			h1,
			h2,
			bg,
			black: colors.black,
			white: colors.white,
			transparent: colors.transparent,
			gray: {
				950: '#101215',
				900: '#191B1F',
				800: '#242529',
				700: '#39393f',
				600: '#303030',
				500: '#606060',
				300: '#d9dae8',
				100: '#f3f3f3',
				rgba: 'rgba(32, 32, 32, 0.85);',
			},
			green: {
				DEFAULT: '#4DC57C',
			},
			violet: {
				DEFAULT: '#6F48F6',
			},
			yellow: {
				DEFAULT: '#ffc700',
			},
			blue: {
				DEFAULT: '#181059',
			},
		},
		extend: {
			transitionDuration: {
				DEFAULT: '200ms',
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
				4: '4',
			},
			keyframes: {
				fade: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(1.5)',
					},
					'50%': {
						opacity: 0.3,
					},
					'100%': {
						opacity: 1,
						transform: 'translateZ(0) scale(1)',
					},
				},
			},
			animation: {
				fade: 'fade .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out',
			},
		},
	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				'.text-shadow': {
					textShadow: '1px 1px rgba(0, 0, 0, 0.4)',
				},

				'.outline-border-none': {
					outline: 'none',
					border: 'none',
				},
				'.item-shadow': {
					background: 'rgba(255, 255, 255, 0.12)',
					backdropFilter: 'blur(5px)',
					boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
				},
				'.image-bg': {
					objectPosition: 'center',
					objectFit: 'cover',
					pointerEvents: 'none',
				},
			})
		}),
	],
})
