import React, { useState, useEffect } from 'react'
import { Box, Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import BlogImg from "../blogImg.jpg"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { blogDetail, updateBlog, clearErrors } from "../redux/actions/blogActions"
import CircularProgress from '@material-ui/core/CircularProgress';
import { useParams } from "react-router-dom"

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
        objectFit: "contain",
        backgroundColor: "gray"
    },
    formWrapper: {
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        [theme.breakpoints.down("xs")]: {
            padding: "10px"
        }
    },
    inputWrapper: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "15px 0"
    },
    title: {
        margin: "0 10px",
        flex: 1,
        "& .MuiInputBase-input": {
            fontSize: "30px"
        }
    },
    textArea: {
        width: "100%",
        marginTop: "30px",
        border: "none",
        outline: "none",
        fontSize: "18px"
    }

}));

function UpdateBlog() {
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loading, error, message } = useSelector(state => state.updateBlog)
    const { loading: detailLoading, error: detailError, blog } = useSelector(state => state.blogDetail)
    const [description, setDescription] = useState(blog && blog.description)
    const [title, setTitle] = useState(blog && blog.title)
    const [category, setCategory] = useState(blog && blog.category)
    const [imgsrc, setImgsrc] = useState(blog && blog.imgsrc && blog.imgsrc.url)
    const [imgPreview, setImgPreview] = useState(blog && blog.imgsrc && blog.imgsrc.url)
    const classes = useStyles();

    useEffect(() => {
        dispatch(blogDetail(id))
    }, [])

    useEffect(() => {
        if (message) {
            alert(message)
            dispatch({ type: "RESET_UPDATE_BLOG" })
            navigate("/blog/detail/" + id)
        }
        if (detailError && detailError.error) {
            alert(detailError.error)
            dispatch(clearErrors())
        }
        else if (detailError && detailError.message) {
            alert(detailError.message)
            dispatch(clearErrors())
        }

    }, [message, detailError])

    const handleImageChange = (e) => {
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImgPreview(reader.result)
                setImgsrc(e.target.files[0])
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const handleSubmit = (e) => {
        dispatch(clearErrors())
        e.preventDefault()
        const formData = new FormData()
        formData.append("category", category)
        formData.append("title", title)
        formData.append("description", description)
        formData.append("imgsrc", imgsrc)
        dispatch(updateBlog(id, formData))
    }

    return (
        detailLoading ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
            <CircularProgress />
        </div> : <Box className={classes.container}>
                <img alt="blog" className={classes.blogImage} src={!imgPreview ? BlogImg : imgPreview} />
                {
                    error && error.errors && error.errors.imgsrc && error.errors.imgsrc.message && <span style={{ color: "red" }}>{error.errors.imgsrc.message}</span>
                }
                <form onSubmit={handleSubmit} className={classes.formWrapper}>
                    <Select
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        displayEmpty
                        fullWidth
                    >
                        <MenuItem disabled value={""}>Select Category</MenuItem>
                        <MenuItem value={"all"}>All</MenuItem>
                        <MenuItem value={"music"}>Music</MenuItem>
                        <MenuItem value={"movies"}>Movies</MenuItem>
                        <MenuItem value={"sports"}>Sports</MenuItem>
                        <MenuItem value={"tech"}>Tech</MenuItem>
                    </Select>
                    {
                        error && error.errors && error.errors.category && error.errors.category.message && <span style={{ color: "red" }}>{error.errors.category.message}</span>
                    }
                    <Box className={classes.inputWrapper}>
                        <label htmlFor="blog-image">
                            <AddAPhotoIcon style={{ cursor: "pointer" }} />
                        </label>
                        <input type="file" id="blog-image" hidden onChange={handleImageChange} />

                        <TextField value={title} onChange={e => setTitle(e.target.value)} className={classes.title} id="standard-basic" placeholder="Title" />
                        <Button disabled={loading} type="submit" variant="contained" color="primary">Update</Button>
                    </Box>
                    {
                        error && error.errors && error.errors.title && error.errors.title.message && <span style={{ color: "red" }}>{error.errors.title.message}</span>
                    }

                    <TextareaAutosize className={classes.textArea} value={description} onChange={e => setDescription(e.target.value)}
                        placeholder="Your Story ..."
                    />
                    {
                        error && error.errors && error.errors.description && error.errors.description.message && <span style={{ color: "red" }}>{error.errors.description.message}</span>
                    }

                </form>
            </Box>
    )
}

export default UpdateBlog
