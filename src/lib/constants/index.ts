export * from './fakeData';
export * from './footer';

export const config_site = {
	site_name: 'FINANCE',
	site_logo: 'https://example.com/logo.png',
	site_address: '123 Main St, Anytown, USA',
	site_phone: '+1 555 555 5555',
	site_email: 'info@example.com',
	credit: {
		rate_credit: 0.05,
		monthly_credit: [3, 4, 5, 6],
		amount_credit: {
			min_credit: 10000,
			max_credit: 60000
		}
	}
};

export const CURRENT_YEAR = new Date().getFullYear();
export const CURRENT_SHORT_DATE = new Date().toLocaleString('en-US', {
	year: 'numeric',
	month: 'long',
	day: 'numeric'
});
