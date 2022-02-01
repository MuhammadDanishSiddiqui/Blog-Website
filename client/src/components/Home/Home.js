import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Post from "./Post"
import { Link } from "react-router-dom"
import { allBlogs, clearErrors } from "../../redux/actions/blogActions"
import { useSelector, useDispatch } from "react-redux"
import CircularProgress from "@material-ui/core/CircularProgress"
import BlogImage from "../../blogImg.jpg"

const useStyles = makeStyles((theme) => ({
    banner: {
        width: "100%",
        backgroundColor: "gray",
        backgroundImage: `url(${BlogImage})`,
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
    const [category, setCategory] = useState("")
    const dispatch = useDispatch()
    const { blogs, loading, error } = useSelector(state => state.allBlogs)
    const classes = useStyles();

    useEffect(() => {
        dispatch(allBlogs(category))
    }, [category])

    useEffect(() => {
        if (error && error.error) {
            alert(error.error)
        }
        else if (error && error.message) {
            alert(error.message)
        }
        dispatch(clearErrors())
    }, [error])
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

                    <Typography onClick={() => setCategory("all")}>All Categories</Typography>
                    <Typography onClick={() => setCategory("music")}>Music</Typography>
                    <Typography onClick={() => setCategory("movies")}>Movies</Typography>
                    <Typography onClick={() => setCategory("sports")}>Sports</Typography>
                    <Typography onClick={() => setCategory("tech")}>Tech</Typography>
                </Grid>
                {
                    loading ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "70%", marginBottom: "20px" }}>
                        <CircularProgress />
                    </div> : blogs && blogs[0] ? <Grid container style={{ margin: 0 }} item sm={9} xs={12} className={classes.rightSide} spacing={2}>
                        {blogs.map(post => {
                            return <Post key={post._id} _id={post._id} category={post.category} author={post.author} title={post.title} description={post.description} imgsrc={post.imgsrc} />
                        })}
                    </Grid> : <Typography style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "70%", marginBottom: "20px" }} >No Blog Found</Typography>
                }
            </Grid>
        </>
    )
}

export default Home
