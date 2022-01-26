import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useNavigate } from "react-router-dom"
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "300px"
    },
    media: {
        height: 140,
    },
}));


function Post({ _id, category, author, title, description, imgsrc }) {
    const navigate = useNavigate()
    const classes = useStyles();

    const showDetail = (id) => {
        navigate("/blog/detail/" + id)
    }


    return (
        <Grid item md={4} sm={6} xs={12} >
            <Card className={classes.root} onClick={() => showDetail(_id)}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={imgsrc}
                        title="Contemplative Reptile"
                    />
                    <CardContent style={{ textAlign: "center" }}>
                        <Typography variant="body2" color="textSecondary">{category}</Typography>
                        <Typography variant="h5" component="h2">{title}</Typography>
                        <Typography variant="body2" color="textSecondary">Author: {author}</Typography>
                        <Typography color="textSecondary" component="p">{description.length > 50 ? description.substring(0, 40) + "..." : description}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default Post
