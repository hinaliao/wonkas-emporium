import React from "react";
import { Typography, Button, Divider } from "@material-ui/core";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Review from "./Review";
import useStyles from "./styles";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY); //stripe public key

const Payment = ({ checkoutToken, prevStep, nextStep, shippingData, onGetCheckout, setFinished }) => {
  const style = useStyles();

  const handleSubmit = async (event, elements, stripe) => {    
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: {
          firstname: shippingData.firstName,
          lastname: shippingData.lastName,
          email: shippingData.email,
        },
        shipping: {
          name: "Domestic",
          street: shippingData.address,
          town_city: shippingData.city,
          country_state: shippingData.shippingSubdivision,
          postal_zip_code: shippingData.zip,
          country: shippingData.shippingCountry || 'BR',
        },
        // fulfillment: { shipping_method: shippingData.shippingOption || 'ship_LvJjoPjODle0nO'},
        fulfillment: { shipping_method: 'ship_LvJjoPjODle0nO'},
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };      
      setFinished(true);

      await onGetCheckout(checkoutToken.id, orderData);
      nextStep();
      setFinished(false);
    }
  };

  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Payment method 
      </Typography>

      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <br />
              <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="contained" onClick={prevStep} className ={style.btnBack} >
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!stripe}
                  className={style.btnNext}
                >
                  Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default Payment;
