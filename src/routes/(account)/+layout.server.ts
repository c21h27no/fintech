import { dev } from '$app/environment';
import type { LayoutServerLoad } from './$types';

export const ssr = false;

export const load: LayoutServerLoad = async ({ cookies }) => {
	if (dev) console.log('PROTECTED LAYOUT');

	return {
		account: cookies.get('account')
	};
};
