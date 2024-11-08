import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import tailwindAnimate from 'tailwindcss-animate';
export default {
	darkMode: ['class'],
	safelist: ['dark'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px'
			// => @media (min-width: 1536px) { ... }
		},
		container: {
			center: true,
			padding: '1rem',
			screens: {
				'2xl': '1300px'
			}
		},
		fontFamily: {
			DrukWide: ['DrukWide']
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			},
			animation: {
				flip: 'flip 6s infinite steps(2, end)',
				kitrotate: 'kitrotate 3s linear infinite both',
				shine: 'shine 5s linear infinite',
				slide: 'slide 40s linear infinite',
				spotlight: 'spotlight 2s ease .75s 1 forwards',
				spin: 'spin 2s linear infinite',
				'border-width': 'border-width 3s infinite alternate',
				'text-gradient': 'text-gradient 2s linear infinite',
				'text-shake': 'text-shake 1s ease 1',
				'text-glitch-to': 'text-glitch-to 0.6s ease-in-out infinite',
				'text-glitch-from': 'text-glitch-from 0.6s ease-in-out infinite',
				'text-scale': 'text-scale 1s linear infinite forwards',
				'background-shine': 'background-shine 2s linear infinite',
				'pulse-slow': 'pulse 6s infinite cubic-bezier(0.4, 0, 0.6, 1)',
				'fade-in': 'fade-in 1000ms var(--animation-delay, 0ms) ease forwards',
				'fade-up': 'fade-up 1000ms var(--animation-delay, 0ms) ease forwards',
				'fade-left': 'fade-left 1000ms var(--animation-delay, 0ms) ease forwards',
				marquee: 'marquee var(--duration) linear infinite',
				'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
			},
			keyframes: {
				marquee: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(calc(-100% - var(--gap)))' }
				},
				'marquee-vertical': {
					from: { transform: 'translateY(0)' },
					to: { transform: 'translateY(calc(-100% - var(--gap)))' }
				},
				spin: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				flip: {
					to: {
						transform: 'rotate(360deg)'
					}
				},
				kitrotate: {
					to: {
						transform: 'rotate(90deg)'
					}
				},
				shine: {
					from: {
						backgroundPosition: '0 0'
					},
					to: {
						backgroundPosition: '-200% 0'
					}
				},
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(-10px)' },
					to: { opacity: '1', transform: 'none' }
				},
				'fade-up': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'none' }
				},
				'fade-left': {
					from: { opacity: '0', transform: 'translateX(100px)' },
					to: { opacity: '1', transform: 'none' }
				},
				'border-width': {
					from: {
						width: '10px',
						opacity: '0'
					},
					to: {
						width: '100px',
						opacity: '1'
					}
				},
				'text-gradient': {
					to: {
						backgroundPosition: '200% center'
					}
				},
				'text-shake': {
					'15%': { transform: 'translateX(5px)' },
					'30%': { transform: 'translateX(-5px)' },
					'50%': { transform: 'translateX(3px)' },
					'80%': { transform: 'translateX(2px)' },
					'100%': { transform: 'translateX(0)' }
				},
				'text-glitch-to': {
					from: {
						transform: 'translateY(0)'
					},
					to: {
						transform: 'translateY(-100%)'
					}
				},
				'text-glitch-from': {
					from: {
						transform: 'translateY(100%)'
					},
					to: {
						transform: 'translateY(0)'
					}
				},
				'text-scale': {
					'0%': {
						transform: 'scaleX(0)',
						transformOrigin: 'bottom left'
					},
					'25%': {
						transform: 'scaleX(1)',
						transformOrigin: 'bottom left'
					},
					'75%': {
						transform: 'scaleX(1)',
						transformOrigin: 'bottom right'
					},
					'100%': {
						transform: 'scaleX(0)',
						transformOrigin: 'bottom right'
					}
				},
				slide: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(calc(-100% - var(--gap)))' }
				},
				spotlight: {
					'0%': {
						opacity: '0',
						transform: 'translate(-72%, -62%) scale(0.5)'
					},
					'100%': {
						opacity: '1',
						transform: 'translate(-50%,-40%) scale(1)'
					}
				},
				'background-shine': {
					from: { backgroundPosition: '0 0' },
					to: { backgroundPosition: '-200% 0' }
				}
			}
		}
	},

	plugins: [tailwindAnimate]
} as Config;
