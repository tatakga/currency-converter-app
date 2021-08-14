import React from "react";
import { TextField } from "@material-ui/core";
import useStyles from "./ResultStyles";

export const Result = ({ result }) => {
  const classes = useStyles();
  return (
    <div className={classes.resultContainer}>
      <TextField label="Result :" className={classes.resultText} value={result ? result : 0} InputProps={{ readOnly: true }} variant="outlined"></TextField>
    </div>
  );
};
