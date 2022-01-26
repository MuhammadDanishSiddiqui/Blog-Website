import React from 'react'
import { Box, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link, useParams } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    container: {
        padding: "0 100px",
        width: "100%",
        [theme.breakpoints.down("xs")]: {
            padding: "0"
        }
    },
    blogImage: {
        width: "100%",
        height: "50vh",
    },
    icons: {
        display: "flex",
        justifyContent: "flex-end"
    },
    icon: {
        margin: "10px",
        cursor: "pointer"
    },
    title: {
        margin: "10px 0 0 0",
        textAlign: "center",
        fontSize: "30px",
        fontWeight: 600,
    },
    metaDetail: {
        margin: "10px 0",
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
            padding: "0 10px"
        }
    },
    description: {
        [theme.breakpoints.down("xs")]: {
            padding: "10px"
        }
    }
}));

function PostDetail() {
    const { id } = useParams()
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <img className={classes.blogImage} src="https://www.bannerflow.com/app/uploads/blog-header-creative-banner.jpg" alt="blog-image" />
            <Box className={classes.icons}>
                <Link to={`/blog/update/${id}`}> <EditIcon className={classes.icon} color="primary" /></Link>
                <DeleteIcon className={classes.icon} color="secondary" />
            </Box>
            <Typography className={classes.title}>Some fake Titkle</Typography>
            <Box className={classes.metaDetail}>
                <Typography color="textSecondary">Author: codewithharry</Typography>
                <Typography color="textSecondary">22 june 2021</Typography>
            </Box>
            <Typography className={classes.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi error dolorem esse laborum autem ullam, facilis aspernatur nisi minima totam incidunt. Doloribus corrupti impedit magnam natus, esse, libero dolorum laboriosam illum maiores, placeat hic perferendis iusto dolor? Doloremque soluta nulla recusandae cupiditate autem, minus repudiandae. Quasi suscipit ducimus expedita perferendis?</Typography>
        </Box>
    )
}

export default PostDetail
