export const prerender = true;
export const trailingSlash = 'always';


import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	return {
		authentication: cookies.get('account')
	};
};
