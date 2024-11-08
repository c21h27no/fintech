import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import generateUUID from 'utils/services/generateUUID';

export const load: PageServerLoad = async ({ request }) => {
	// console.log(request);
	return request
};

export const actions = {
	login: async ({ request, cookies }) => {
		const data = await request.formData();
		const email = data.get('email');
		const checkbox = data.get('remember');

		const account: { uuid: any; email: any; remember: any; status: any } = {
			uuid: generateUUID(),
			email: email,
			remember: checkbox,
			status: 'user'
		};
		cookies.set('account', JSON.stringify(account), {
			path: '/',
			httpOnly: true,
			secure: false,
			maxAge: 60 * 60,
			sameSite: 'strict'
		});
		return redirect(301, '/account');
	}
} satisfies Actions;
