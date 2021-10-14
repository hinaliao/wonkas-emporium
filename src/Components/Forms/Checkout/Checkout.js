import React, { useState, useEffect } from "react";
import { Paper, Stepper, Step, StepLabel, Typography } from "@material-ui/core";

import { commerce } from "../../../lib/commerce";
import Address from "../Address";
import Payment from "../Payment";
import useStyles from "./styles";

const steps = ["Shipping Address", "Payment Details"]; //to map steps

const Checkout = ({ cart }) => {
  const style = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});

  //when proceeding with the checkout, it'll generate a token
  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        // console.log(token);
        setCheckoutToken(token);
      } catch (error) {}
    };
    generateToken()
  }, [cart]); //update dynamically as the cart changes

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const prevStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next= (data) => {
    setShippingData(data);
    nextStep();
  }
  
  
  let Confirmation = () => <div>Confirmation</div>;

  const Form = () => activeStep === 0 
    ? <Address checkoutToken={checkoutToken} next={next}/> 
    : <Payment />

  return (
    <>
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
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
