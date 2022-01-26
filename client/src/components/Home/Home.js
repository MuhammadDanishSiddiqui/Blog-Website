import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    banner: {
        backgroundColor: "gray",
        backgroundImage: `url("https://www.bannerflow.com/app/uploads/blog-header-creative-banner.jpg")`,
        height: "50vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "10px"
    },
    title: {
        fontSize: "40px",
        fontWeight: 600,
        color: "black",
        letterSpacing: "10px"
    },
    leftSide: {
        padding: "10px",
        "& .MuiTypography-root": {
            margin: "10px",
            cursor: "pointer"
        }
    },
    rightSide: {
        padding: "10px",
        borderLeft: "1px solid gray"
    },
    root: {
        height: "300px"
    },
    media: {
        height: 140,
    },
}));


function Home() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.banner}>
                <Typography className={classes.title}>Blog</Typography>
            </div>
            <Grid container>
                <Grid item sm={3} xs={12} className={classes.leftSide}>
                    <Button variant="contained" color="primary">Create Blog</Button>
                    <Typography>All Categories</Typography>
                    <Typography>Music</Typography>
                    <Typography>Movies</Typography>
                    <Typography>Sports</Typography>
                    <Typography>Tech</Typography>
                </Grid>
                <Grid container item sm={9} xs={12} className={classes.rightSide} spacing={2}>
                    <Grid item md={4} sm={6} xs={12} >
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://www.bannerflow.com/app/uploads/blog-header-creative-banner.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent style={{ textAlign: "center" }}>
                                    <Typography variant="body2" color="textSecondary">Music</Typography>
                                    <Typography variant="h5" component="h2">Some fake title here</Typography>
                                    <Typography variant="body2" color="textSecondary">Author: random author</Typography>

                                    <Typography color="textSecondary" component="p">Lizards are a widespread group of squamate reptile...</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Home
