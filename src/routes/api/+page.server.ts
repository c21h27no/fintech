import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

import generateUUID from 'utils/services/generateUUID';

export const load: PageServerLoad = async ({ request }) => {
	// console.log(request);
	return request;
};

export const actions = {
	login: async ({ request, cookies }) => {
		const data = await request.formData();
		const email = data.get('email');
		const checkbox = data.get('remember');

		const account = {
			uuid: generateUUID(),
			email: email,
			remember: checkbox,
			status: 'user'
		};

		return new Promise<void>((resolve) => {
			cookies.set('account', JSON.stringify(account), {
				path: '/',
				httpOnly: true,
				secure: false,
				maxAge: 60 * 60,
				sameSite: 'strict'
			});

			resolve();
		}).then(() => {
			return redirect(303, '/account');
		});
	}
} satisfies Actions;
