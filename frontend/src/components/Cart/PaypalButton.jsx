import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const PaypalButton = ({ amount, onSuccess, onError }) => {
  return (
    <PayPalScriptProvider
      options={{
        clientId:
          "AVUlXm-7MY5zPnWJWa50_NA9r9eiWAB-2z3zqLNQXGfjZyrJcBoNfFb7i3zpISBStuj7SlIYy7Y7MafV",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: amount } }],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(onSuccess);
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalButton;
