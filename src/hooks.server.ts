import { dev } from '$app/environment';

import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const authHandler: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/custom')) {
		return new Response('custom response');
	}

	const response = await resolve(event);

	return response;
};

const accessHandler: Handle = async ({ event, resolve }) => {
	if (dev) console.log('HOOKS > ', event.request.method, event.route.id);

	if (event.route.id?.startsWith('/account')) {
		if (event.cookies.get('account')) {
			return resolve(event);
		} else {
			return redirect(303, '/');
		}
	}
	return resolve(event);
};

export const handle = sequence(accessHandler, authHandler);
