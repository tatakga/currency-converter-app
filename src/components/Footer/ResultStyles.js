import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  resultContainer: {
    marginBottom: "32px",
  },
  resultText: {
    width: "100%",
    border: "none",
    outline: "none",
    "&:active, &:focus": {
      border: "none",
      outline: "none",
    },
  },
}));

export default useStyles;
