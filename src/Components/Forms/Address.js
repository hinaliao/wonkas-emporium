import React, { useState, useEffect } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import InputForm from "./InputForm";

import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import useStyles from "./styles";

import { commerce } from "../../lib/commerce";

const Address = ({ checkoutToken, next }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [subdivisions, setSubdivisions] = useState([]);
  const [shippingSubdivision, setSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
  const methods = useForm();
  const style = useStyles();

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );
    setSubdivisions(subdivisions);
    setShippingCountry(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    stateProvince = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region: stateProvince }
    );
    setShippingOptions(options);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [shippingSubdivision]);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            next({
              ...data,
              shippingCountry,
              shippingSubdivision,
              shippingOption,
            })
          )}
        >
          <Grid container spacing={3}>
            <InputForm name="firstName" label="First Name" />
            <InputForm name="lastName" label="Last Name" />
            <InputForm name="address" label="Address, n°" />
            <InputForm name="email" label="E-mail" />
            <InputForm name="city" label="City" />
            <InputForm name="zip" label="ZIP / Postal Code" />
          </Grid>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              component={Link}
              to="/cart"
              variant="contained"
              className={style.btnBack}
            >
              Back to Cart
            </Button>
            <Button type="submit" variant="contained" className={style.btnNext}>
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default Address;
