import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Post from "./Post"
import { Link } from "react-router-dom"

const posts = [{ _id: 1, category: "Music", author: "fake", title: "Uip!!!!", description: "aas as h  asdah asdlorem ispadasdamjkkadas  adajjdajsdas dadajm", imgsrc: "https://www.bannerflow.com/app/uploads/blog-header-creative-banner.jpg" }, { _id: 1, category: "Music", author: "fake", title: "Uip!!!!", description: "aas as h  asdah asdlorem ispadasdamjkkadas  adajjdajsdas dadajm", imgsrc: "https://www.bannerflow.com/app/uploads/blog-header-creative-banner.jpg" }, { _id: 1, category: "Music", author: "fake", title: "Uip!!!!", description: "aas as h  asdah asdlorem ispadasdamjkkadas  adajjdajsdas dadajm", imgsrc: "https://www.bannerflow.com/app/uploads/blog-header-creative-banner.jpg" }, { _id: 1, category: "Music", author: "fake", title: "Uip!!!!", description: "aas as h  asdah asdlorem ispadasdamjkkadas  adajjdajsdas dadajm", imgsrc: "https://www.bannerflow.com/app/uploads/blog-header-creative-banner.jpg" }]

const useStyles = makeStyles((theme) => ({
    banner: {
        width: "100%",
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
            padding: "10px",
            cursor: "pointer"
        },
        "& .MuiTypography-root:hover": {
            backgroundColor: "gray",
            color: "white"
        }
    },
    rightSide: {
        padding: "10px",
        borderLeft: "1px solid gray",
        [theme.breakpoints.down("sm")]: {
            border: "none"
        }
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
                    <Link to="/blog/create">
                        <Button fullWidth variant="contained" color="primary">Create Blog</Button>
                    </Link>

                    <Typography>All Categories</Typography>
                    <Typography>Music</Typography>
                    <Typography>Movies</Typography>
                    <Typography>Sports</Typography>
                    <Typography>Tech</Typography>
                </Grid>
                <Grid container style={{ margin: 0 }} item sm={9} xs={12} className={classes.rightSide} spacing={2}>
                    {posts.map(post => {
                        return <Post key={post._id} _id={post._id} category={post.category} author={post.author} title={post.title} description={post.description} imgsrc={post.imgsrc} />
                    })}
                </Grid>
            </Grid>
        </>
    )
}

export default Home
