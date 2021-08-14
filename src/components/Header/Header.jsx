import { AppBar, CssBaseline, Toolbar, Typography, Container } from '@material-ui/core'
import { MonetizationOn } from '@material-ui/icons'
import headerStyles from "./Header"
import React from 'react'

const Header = () => {
    const classes = headerStyles();
    return (
        <div className="header">
            <CssBaseline />
            <AppBar position="static" className={classes.header_section}>
                <Container maxWidth="md">
                    <Toolbar>
                        <MonetizationOn className={classes.header_icon} />
                        <Typography variant="h6">Currency Converter</Typography>
                        </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default Header