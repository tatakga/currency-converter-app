import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  inputAmount: {
    width: "100%",
    marginBottom: "28px",
  },
  selectContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "8px",
    marginBottom: "28px",
  },
  buttonConvert: {
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

export default useStyles;
