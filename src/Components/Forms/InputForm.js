import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const InputForm = ({ name, label, required }) => {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        as={TextField} //import all the variables from the textField
        name={name}
        control={control}
        label={label}
        fullWidth
        required={required} // if the field is required or not
        error={isError}
      />
    </Grid>
  );
};

export default InputForm;
