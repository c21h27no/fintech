import { cva, type VariantProps } from 'class-variance-authority';

export const inputStyle = cva('w-full', {
	variants: {
		color: {
			default: `pl-3 pr-3 py-2 bg-white placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`
		},
		size: {
			xs: 'text-xs min-h-[40px]',
			sm: 'text-sm min-h-[32px]',
			md: 'text-base min-h-[36px]',
			lg: 'text-lg min-h-[40px]',
			xl: 'text-xl min-h-[44px]'
		},
		iconPlacement: {
			start: '!pl-9 !pr-5',
			end: '!pl-3 !pr-9'
		},
		disabled: {
			true: '',
			false: ''
		}
	}
});
export type Props = VariantProps<typeof inputStyle>;
