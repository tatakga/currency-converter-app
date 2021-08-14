import React, { useState } from "react";
import { Container, MenuItem, TextField, Button } from "@material-ui/core";
import useGetAllCurrency from "../../hooks/useGetAllCurrency";
import useStyles from "./CurrencyFormStyles";
import { Result } from "../Footer/Result";

export const CurrencyContent = () => {
  const [symbols, loading] = useGetAllCurrency();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("idr");
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(null);

  const getResult = async (from, to, amount) => {
    const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`);
    const data = await response.json();
    setResult(data[to] * amount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getResult(from, to, amount);
  };

  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Result result={result} />

      <form onSubmit={handleSubmit}>
        <TextField className={classes.inputAmount} label="Amount :" variant="outlined" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <div className={classes.selectContainer}>
          <TextField select label="From :" value={from} variant="outlined" onChange={(e) => setFrom(e.target.value)}>
            {loading && <MenuItem>Fetching data ...</MenuItem>}
            {symbols &&
              Object.keys(symbols).map((key) => (
                <MenuItem key={key} value={key}>
                  {symbols[key]}
                </MenuItem>
              ))}
          </TextField>
          <TextField select label="To :" value={to} variant="outlined" onChange={(e) => setTo(e.target.value)}>
            {loading && <MenuItem>Fetching data ...</MenuItem>}
            {symbols &&
              Object.keys(symbols).map((key) => (
                <MenuItem key={key} value={key}>
                  {symbols[key]}
                </MenuItem>
              ))}
          </TextField>
        </div>
        <Button type="submit" className={classes.buttonConvert}>
          Convert
        </Button>
      </form>
    </Container>
  );
};
