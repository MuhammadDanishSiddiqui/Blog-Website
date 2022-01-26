import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom"

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
    },
    linkStyle: {
        textDecoration: "none",
        color: "inherit"
    }
}));

function Header() {
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed" className={classes.root}>
                <Toolbar className={classes.container}>
                    <Link className={classes.linkStyle} to="/"><Typography>Home</Typography></Link>
                    <Link className={classes.linkStyle} to="/about"><Typography>About</Typography></Link>
                    <Link className={classes.linkStyle} to="/signup"><Typography>SignUp</Typography></Link>
                    <Link className={classes.linkStyle} to="/login"><Typography>Login</Typography></Link>
                </Toolbar>
            </AppBar>
            <Toolbar></Toolbar>
        </>
    )
}

export default Header
