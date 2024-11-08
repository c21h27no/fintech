import { PUBLIC_API_URL } from '$env/static/public';

interface RequestOptions {
	method: string;
	path: string;
	data?: any;
	token?: string;
}

async function send(options: RequestOptions) {
	const opts = {
		method: options.method,
		headers: {}
	};

	if (options.data) {
		opts.headers['Content-Type'] = 'application/json';
		opts.body = JSON.stringify(options.data);
	}

	if (options.token) {
		opts.headers['Authorization'] = `Bearer ${options.token}`;
	}

	return await fetch(`${PUBLIC_API_URL}/api/${options.path}`, opts);
}

export function get(path: string, token?: string) {
	return send({ method: 'GET', path, token: token });
}

export function del(path: string, token?: string) {
	return send({ method: 'DELETE', path, token });
}

export function post(path: string, data: any, token?: string) {
	return send({ method: 'POST', path, data, token });
}

export function put(path: string, data: any, token?: string) {
	return send({ method: 'PUT', path, data, token });
}
