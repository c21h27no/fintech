import type { LayoutServerLoad } from './$types';

export const prerender = true;
export const ssr = true;

export const load: LayoutServerLoad = async ({ cookies }) => {
	return {
		authentication: cookies.get('account')
	};
};
