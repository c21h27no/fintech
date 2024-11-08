import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ cookies }) => {
	const account = cookies.get('account');
	if (!account) {
		redirect(303, '/');
	}

	cookies.delete('account', {
		path: '/'
	});
	redirect(303, '/');
};
