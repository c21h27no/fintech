export const prerender = true;
export const trailingSlash = 'always';

import { dev } from '$app/environment';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	if (dev) console.log('PROTECTED LAYOUT');

	return {
		account: cookies.get('account')
	};
};
