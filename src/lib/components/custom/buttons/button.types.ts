import { cva, type VariantProps } from 'class-variance-authority';

export const buttonStyle = cva(
	'ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			color: {
				default: 'transition-colors border bg-black text-white dark:bg-white dark:text-black',
				clear: ''
			},
			align: {
				center: 'justify-center',
				start: 'justify-start',
				end: 'justify-end',
				clear: ''
			},
			border: {
				clear: '',
				xs: 'rounded',
				sm: 'rounded-sm',
				md: 'rounded-md',
				lg: 'rounded-lg',
				full: 'rounded-full'
			},
			size: {
				clear: '',
				xs: 'py-1 px-5 text-xs font-normal',
				sm: 'rounded-sm',
				md: 'py-1.5 px-5 font-medium',
				lg: 'rounded-lg'
			},
			defaultVariants: {
				color: 'default',
				align: 'center'
			}
		}
	}
);

export type Props = VariantProps<typeof buttonStyle>;
