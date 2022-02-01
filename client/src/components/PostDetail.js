import React, { useEffect } from 'react'
import { Box, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link, useParams, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { blogDetail, deleteBlog, clearErrors } from "../redux/actions/blogActions"
import CircularProgress from '@material-ui/core/CircularProgress';
import moment from "moment"

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
    const navigate = useNavigate()
    const { id } = useParams()
    const dispatch = useDispatch()
    const { loading, error, blog } = useSelector(state => state.blogDetail)
    const { message, loading: deleteLoading } = useSelector(state => state.deleteBlog)
    const classes = useStyles();

    useEffect(() => {
        if (error && error.error) {
            alert(error.error)
        }
        if (error && error.message) {
            alert(error.message)
        }
    }, [error])
    useEffect(() => {
        dispatch(blogDetail(id))
    }, [])

    useEffect(() => {
        if (message) {
            alert(message)
            dispatch({ type: "RESET_DELETE_BLOG" })
            navigate("/")
        }
    }, [message])


    return (
        loading ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
            <CircularProgress />
        </div> : <Box className={classes.container}>
                <img className={classes.blogImage} src={blog && blog.imgsrc && blog.imgsrc.url} alt="blog" />
                <Box className={classes.icons}>
                    {
                        deleteLoading ? <CircularProgress /> : <>
                            <Link to={`/blog/update/${id}`}> <EditIcon className={classes.icon} color="primary" /></Link>
                            <DeleteIcon onClick={() => dispatch(deleteBlog(blog && blog._id))} className={classes.icon} color="secondary" />
                        </>
                    }
                </Box>
                <Typography className={classes.title}>{blog && blog.title}</Typography>
                <Box className={classes.metaDetail}>
                    <Typography color="textSecondary">Author: {blog && blog.author}</Typography>
                    <Typography color="textSecondary">{blog && moment(blog.createdAt).format('LL')}</Typography>
                </Box>
                <Typography className={classes.description}>{blog && blog.description}</Typography>
            </Box>
    )
}

export default PostDetail
