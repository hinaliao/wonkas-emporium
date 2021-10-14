import React, { useState } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,  
} from "@material-ui/core";

import Address from "../Address";
import Payment from "../Payment";
import useStyles from "./styles";

const steps = ["Shipping Address", "Payment Details"]; //to map steps

const Checkout = () => {
  const style = useStyles();  

  const [activeStep, setActiveStep] = useState(0);

  let Confirmation = () => <div>Confirmation</div>;

  const Form = () => (activeStep === 0 ? <Address /> : <Payment />);

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
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
