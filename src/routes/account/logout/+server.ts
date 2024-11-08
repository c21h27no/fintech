import { redirect, type RequestHandler } from '@sveltejs/kit';

export const prerender = false;

export const GET: RequestHandler = ({ cookies }) => {
	const account = cookies.get('account');
	if (!account) {
		redirect(303, '/');
	}

	cookies.delete('account', {
		path: '/'
	});
	return redirect(303, '/');
};
