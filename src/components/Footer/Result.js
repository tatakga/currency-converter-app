import React from "react";
import { TextField } from "@material-ui/core";
import resultStyles from "./ResultStyles";

export const Result = ({ result }) => {
  const classes = resultStyles();
  return (
    <div className={classes.result_container}>
      <TextField label="Result :" className={classes.result_text} value={result ? result : 0} InputProps={{ readOnly: true }} variant="outlined"></TextField>
    </div>
  );
};
