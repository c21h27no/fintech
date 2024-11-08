import type { LayoutServerLoad } from './$types';

export const prerender = false;

export const load: LayoutServerLoad = async ({ cookies }) => {
	return {
		authentication: cookies.get('account')
	};
};
