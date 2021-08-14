import { makeStyles } from "@material-ui/core";

const currencyFormStyles = makeStyles(() => ({
  input_amount: {
    width: "100%",
    marginBottom: "28px",
  },
  select_container: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "8px",
    marginBottom: "28px",
  },
  button_convert: {
    fontSize: "1rem",
    backgroundColor: "#03a9f4",
    color: "#ffffff",
    padding: "8px 8px",
    width: "100%",
    "&:hover": {
      backgroundColor: "#0288d1",
      color: "#ffffff",
    },
  },
}));

export default currencyFormStyles;
