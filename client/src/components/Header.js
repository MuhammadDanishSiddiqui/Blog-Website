import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "white",
        color: "black",
    },
    container: {
        justifyContent: "center",
        "& > *": {
            padding: "20px"
        }
    }
}));

function Header() {
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed" className={classes.root}>
                <Toolbar className={classes.container}>
                    <Typography>Home</Typography>
                    <Typography>About</Typography>
                    <Typography>Contact</Typography>
                    <Typography>Login</Typography>
                </Toolbar>
            </AppBar>
            <Toolbar></Toolbar>
        </>
    )
}

export default Header
