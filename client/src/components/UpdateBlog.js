import React from 'react'
import { Box, Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

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
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <img className={classes.blogImage} src="https://www.bannerflow.com/app/uploads/blog-header-creative-banner.jpg" alt="blog-image" />
            <form className={classes.formWrapper}>
                <Box className={classes.inputWrapper}>
                    <label htmlFor="blog-image">
                        <AddAPhotoIcon style={{ cursor: "pointer" }} />
                    </label>
                    <input type="file" id="blog-image" hidden />

                    <TextField className={classes.title} id="standard-basic" placeholder="Title" />
                    <Button type="submit" variant="contained" color="primary">Update</Button>
                </Box>
                {/* <span style={{ color: "red" }}>error</span> */}

                <TextareaAutosize className={classes.textArea}
                    placeholder="Your Story ..."
                />
                {/* <span style={{ color: "red" }}>error</span> */}
            </form>
        </Box>
    )
}

export default UpdateBlog
