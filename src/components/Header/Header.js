import { AppBar, CssBaseline, Toolbar, Typography, Container } from "@material-ui/core";
import { MonetizationOn } from "@material-ui/icons";
import useStyles from "./HeaderStyles";
import React from "react";

const Header = () => {
  const classes = useStyles();
  return (
    <div className="header">
      <CssBaseline />
      <AppBar position="static" className={classes.headerSection}>
        <Container maxWidth="md">
          <Toolbar>
            <MonetizationOn className={classes.headerIcon} />
            <Typography variant="h6">Currency Converter</Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
