import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const InputForm = ({ name, label }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        defaultValue=""
        as={TextField} //import all the variables from the textField
        name={name}
        control={control}
        label={label}
        fullWidth
        required // if the field is required or not, boolean -> true
      />
    </Grid>
  );
};

export default InputForm;
