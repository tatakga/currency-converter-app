import { makeStyles } from "@material-ui/core";

const headerStyles = makeStyles(() => ({
  header_section: {
    backgroundColor: "#fff",
    color: "#263238",
    boxShadow: "none",
    borderBottom: "solid 1px #263238",
    marginBottom: "4rem",
  },
  header_icon: {
    marginRight: "6px",
  },
}));

export default headerStyles;
