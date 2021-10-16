import React, { useState, useEffect } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import InputForm from "./InputForm";
import SelectInput from "./SelectInput";

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

  //same as getting a receipt from the store, token will be created on the checkout form
  const fetchShippingCountries = async (checkoutTokenId) => {
    // response destructured -> { countries }
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    // console.log(countries);
    setShippingCountries(countries);
    // console.log(Object.keys(countries)[0]); // return an array with the keys
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
    // setShippingOption(options[0].id);
  };
  // console.log(shippingOptions);

  //run immediatly after soon as the address form renders
  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  //run after fetching the country
  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]); //whenever the shippingCountry changes, call the fetchSubdivisions

  //after fetching the subdivision
  useEffect(() => {
    if (shippingSubdivision)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [shippingSubdivision]);

  // useEffect(() => {
  //   fetchShippingOptions(
  //     checkoutToken.id,
  //     'BR',
  //     'AC'
  //   );
  //   fetchShippingCountries(checkoutToken.id)
  // }, [])   
  // console.log(shippingCountries);

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
            {/* <SelectInput
              label="Shipping Country"
              value={shippingCountry}
              onChange={(e) => { 
                // console.log('aqui é pra ser um help', e);
                setShippingCountry(e.target.value);
              }}            
              //Object.entries -> gives keys and values of countries
              options={Object.entries(shippingCountries).map(
                ([code, name]) => ({
                  id: code,
                  label: name,
                }) // keyValuePair -> code, name
              )}
            /> */}
            {/* {console.log(Object.entries(shippingCountries).map(([code, name]) => ({id: code, label: name})))} */}

            {/* after knowing which country, fetch a subdivision  */}
            {/* <SelectInput
              label="Shipping Subdivision"
              value={shippingSubdivision}
              onChange={(e) => setSubdivision(e.target.value)}
              options={Object.entries(subdivisions).map(([code, name]) => ({
                id: code,
                label: name,
              }))}
            /> */}

            {/* after knowing which subdivision, get the shipping opt  */}
            {/* <SelectInput
              label="Shipping Options"
              value={shippingOption}
              onChange={(e) => setShippingOption(e.target.value)}
              options={shippingOptions.map(({ id, description, price }) => ({
                id,
                label: `${description} - (${price.formatted_with_symbol})`,
              }))}
            /> */}
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
