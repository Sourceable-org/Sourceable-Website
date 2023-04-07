import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Helmet } from "react-helmet";

const PaymentButton = () => {
  const CLIENT_ID =
    "AZ5KG8DCOKjgdSdG4KBPGAPfC1g1GHqmsX7oFwpvARS2uHIdkpmJ9Wmy5PPbheFc_6wP6ozYNCqq_qsA";

  const paymentAmount = 0.1;

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
        shipping_preference: "NO_SHIPPING",
      },
    });
  };

  // handles when a payment is confirmed for paypal
  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      const { payer } = details;
      console.log(payer);
      alert("Payment Succeeded!");
    });
  };

  // handles payment errors
  const onError = (data, actions) => {
    alert("Error in Payment");
  };

  return (
    <div style={{ width: "30%", marginTop: "20px" }}>
      <Helmet>
        <title>Sourceable | Support us</title>
      </Helmet>
      
      {/* <PayPalScriptProvider options={{ 'client-id': CLIENT_ID }}>
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
			</PayPalScriptProvider> */}
      <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
      <PayPalButtons
           style={{ layout: "vertical" }}
           createOrder={createOrder}
           onApprove={onApprove}
         />
      </PayPalScriptProvider>
    </div>
  );
};

export default PaymentButton;
