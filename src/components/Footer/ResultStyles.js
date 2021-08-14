import { makeStyles } from "@material-ui/core";

const resultStyles = makeStyles(() => ({
  result_container: {
    marginBottom: "32px",
  },
  result_text: {
    width: "100%",
    border: "none",
    outline: "none",
    "&:active, &:focus": {
      border: "none",
      outline: "none",
    },
  },
}));

export default resultStyles;
