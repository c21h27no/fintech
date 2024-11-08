export const prerender = false;

import { dev } from '$app/environment';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	if (dev) console.log('PROTECTED LAYOUT');
	const account = cookies.get('account');

	if (!account) {
		redirect(303, '/login');
	}

	return {
		account
	};
};
