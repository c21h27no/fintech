export const thetransaction: {
	payment_id: number;
	payment_title: string;
	payment_description: string;
	payment_image_shop: string;
	payment_incoming: 'bank_transfer' | 'card_payment' | 'online_payment' | 'cash_payment' | 'mobile_payment';
	payment_date: string;
	payment_amount: number;
	payment_currency: string;
	payment_status: 'processed' | 'pending' | 'failed' | 'cancelled';
	payer_account: string;
	payer_name: string;
	payer_address: string;
	transaction_id: number;
	bank_code: string;
	payment_fee: number;
	payment_exchange_rate: number;
	operation_type: 'deposit' | 'withdrawal' | 'incoming' | 'outgoing' | 'refund';
}[] = [
	{
		payment_id: 1,
		payment_title: 'Discord',
		payment_description: '',
		payment_image_shop: 'discord',
		payment_incoming: 'online_payment',
		payment_date: '2023-02-20 14:00:00',
		payment_amount: 100.0,
		payment_currency: 'USD',
		payment_status: 'failed',
		payer_account: '1234567890',
		payer_name: 'John Doe',
		payer_address: '123 Main St, New York, NY 10001',
		transaction_id: 12345,
		bank_code: 'JPMorgan Chase',
		payment_fee: 0.5,
		payment_exchange_rate: 1.0,
		operation_type: 'deposit'
	},
	{
		payment_id: 2,
		payment_title: 'Paypal',
		payment_description: '',
		payment_image_shop: 'paypal',
		payment_incoming: 'cash_payment',
		payment_date: '2023-02-22 10:00:00',
		payment_amount: 50.0,
		payment_currency: 'USD',
		payment_status: 'processed',
		payer_account: '9876543210',
		payer_name: 'Jane Smith',
		payer_address: '456 Elm St, Los Angeles, CA 90001',
		transaction_id: 12346,
		bank_code: 'Bank of America',
		payment_fee: 1.0,
		payment_exchange_rate: 1.0,
		operation_type: 'withdrawal'
	},
	{
		payment_id: 3,
		payment_title: 'Youtube',
		payment_description: '',
		payment_image_shop: 'youtube',
		payment_incoming: 'online_payment',
		payment_date: '2023-02-25 12:00:00',
		payment_amount: 200.0,
		payment_currency: 'USD',
		payment_status: 'processed',
		payer_account: '5551234567',
		payer_name: 'Bob Johnson',
		payer_address: '789 Oak St, Chicago, IL 60601',
		transaction_id: 12347,
		bank_code: 'Wells Fargo',
		payment_fee: 0.25,
		payment_exchange_rate: 1.0,
		operation_type: 'incoming'
	},
	{
		payment_id: 4,
		payment_title: 'Translation',
		payment_description: '',
		payment_image_shop: 'arrow/ou_arrow',
		payment_incoming: 'card_payment',
		payment_date: '2023-02-28 16:00:00',
		payment_amount: 150.0,
		payment_currency: 'USD',
		payment_status: 'processed',
		payer_account: '9012345678',
		payer_name: 'Alice Brown',
		payer_address: '321 Pine St, Houston, TX 77001',
		transaction_id: 12348,
		bank_code: 'Citi Bank',
		payment_fee: 0.5,
		payment_exchange_rate: 1.0,
		operation_type: 'outgoing'
	},
	{
		payment_id: 5,
		payment_title: 'Translation',
		payment_description: '',
		payment_image_shop: 'arrow/in_arrow',
		payment_incoming: 'mobile_payment',
		payment_date: '2023-03-01 18:00:00',
		payment_amount: 250.0,
		payment_currency: 'USD',
		payment_status: 'processed',
		payer_account: '1111111111',
		payer_name: 'Mike Davis',
		payer_address: '444 Cedar St, Phoenix, AZ 85001',
		transaction_id: 12349,
		bank_code: 'US Bank',
		payment_fee: 0.5,
		payment_exchange_rate: 1.0,
		operation_type: 'incoming'
	}
];
