import React, { useState, useEffect } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
  CssBaseline,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

import { commerce } from "../../../lib/commerce";
import Address from "../Address";
import Payment from "../Payment";
import useStyles from "./styles";

const steps = ["Shipping Address", "Payment Details"]; //to map steps

const Checkout = ({ cart, order, onGetCheckout, error }) => {
  const style = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [finished, setFinished] = useState(false);

  const history = useHistory();

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const prevStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  //when proceeding with the checkout, it'll generate a token
  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        // console.log(token);
        setCheckoutToken(token);
      } catch {
        if (activeStep !== steps.length) history.push("/");
      }
    };
    generateToken();
  }, [cart]); //update dynamically as the cart changes

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };

  let Confirmation = () =>  
    order.customer ? (
      <>
        <div>
          <Typography variant="h5">
            Thank you for your purchase, {order.customer.firstname} 
            {order.customer.lastname}!
          </Typography>
          <Divider className={style.divider} />
          <Typography variant="subtitle2">
            Order ref: {order.customer_reference}
          </Typography>
        </div>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">
          Back to home
        </Button>
      </>
    ) : (
      <>
        <div>
          <Typography variant="h5">Thank you for your purchase!</Typography>
          <Divider className={style.divider} />
        </div>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">
          Back to home
        </Button>
      </>
    ); 

  if (error) {
    Confirmation = () => (
      <>
        <Typography variant="h5">Error: {error}</Typography>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">
          Back to home
        </Button>
      </>
    );
  }

  const Form = () =>
    activeStep === 0 ? (
      <Address checkoutToken={checkoutToken} next={next} />
    ) : !finished ? (
      <Payment
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        prevStep={prevStep}
        nextStep={nextStep}
        onGetCheckout={onGetCheckout}
        setFinished={setFinished}
      />
    ) : (
      <div className={style.spinner}>
        <CircularProgress />
      </div>
    );

  return (
    <>
      <CssBaseline />
      <div className={style.toolbar} />
      <main className={style.layout}>
        <Paper className={style.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={style.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
