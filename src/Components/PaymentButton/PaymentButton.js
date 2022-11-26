import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

const PaymentButton = () => {
	const CLIENT_ID =
		'AZ_D05jZGIO6AzNJw0kJWOACe_yGCJ6yjye79riEyeBiY48be8uuYnBU3ShPzssI4DaNyxzWwriJJJdG';

	const paymentAmount = 1;

	// creates a paypal order
	const createOrder = (data, actions) => {
		return actions.order.create({
			purchase_units: [
				{
					amount: {
						value: paymentAmount,
					},
				},
			],
			application_context: {
				shipping_preference: 'NO_SHIPPING',
			},
		});
	};

	// handles when a payment is confirmed for paypal
	const onApprove = (data, actions) => {
		return actions.order.capture().then((details) => {
			const { payer } = details;
			console.log(payer);
			alert('Payment Succeeded!');
		});
	};

	// handles payment errors
	const onError = (data, actions) => {
		alert('Error in Payment');
	};

	return (
		<div style={{ width: '30%', marginTop: '20px' }}>
			<PayPalScriptProvider options={{ 'client-id': CLIENT_ID }}>
				<PayPalButtons
					createOrder={createOrder}
					onApprove={onApprove}
					onError={onError}
					style={{
						layout: 'horizontal',
						shape: 'pill',
						label: 'pay',
					}}
				/>
			</PayPalScriptProvider>
		</div>
	);
};

export default PaymentButton;
