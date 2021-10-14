import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const InputForm = ({ name, label }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        defaultValue=""
        control={control}
        name={name}
        render={({ field }) => (
          <TextField //import all the variables from the textField
            {...field}
            name={name}
            label={label}
            required // if the field is required or not, boolean -> true
            fullWidth
          />
        )}
      />
    </Grid>
  );
};

export default InputForm;
