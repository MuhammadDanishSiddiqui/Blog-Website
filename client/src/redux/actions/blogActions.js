import axios from "axios"

const createBlog = (body) => async (dispatch) => {
    try {
        dispatch({ type: "CREATE_BLOG_REQUEST" })
        const { data } = await axios({ url: "/api/blog", method: "POST", headers: { "content-type": "multipart/form-data", }, data: body })
        dispatch({ type: "CREATE_BLOG_SUCCESS", payload: data })
    } catch (error) {
        if (!error) {
            return dispatch({ type: "CREATE_BLOG_SUCCESS", payload: { error: "No internet connection." } })
        }
        dispatch({ type: "CREATE_BLOG_FAIL", payload: error.response.data })
    }
}

const updateBlog = (id, body) => async (dispatch) => {
    try {
        dispatch({ type: "UPDATE_BLOG_REQUEST" })
        const { data } = await axios({ url: "/api/blog/" + id, method: "PATCH", headers: { "content-type": "multipart/form-data" }, data: body })
        dispatch({ type: "UPDATE_BLOG_SUCCESS", payload: data })
    } catch (error) {
        if (!error) {
            return dispatch({ type: "UPDATE_BLOG_FAIL", payload: { error: "No internet connection." } })
        }
        dispatch({ type: "UPDATE_BLOG_FAIL", payload: error.response.data })
    }
}

const deleteBlog = (id) => async (dispatch) => {
    try {
        dispatch({ type: "DELETE_BLOG_REQUEST" })
        const { data } = await axios({ url: "/api/blog/" + id, method: "DELETE" })
        dispatch({ type: "DELETE_BLOG_SUCCESS", payload: data })
    } catch (error) {
        if (!error) {
            return dispatch({ type: "DELETE_BLOG_FAIL", payload: { error: "No internet connection." } })
        }
        dispatch({ type: "DELETE_BLOG_FAIL", payload: error.response.data })
    }
}

const blogDetail = (id) => async (dispatch) => {
    try {
        dispatch({ type: "BLOG_DETAIL_REQUEST" })
        const { data } = await axios({ url: "/api/blog/" + id, method: "GET" })
        dispatch({ type: "BLOG_DETAIL_SUCCESS", payload: data })
    } catch (error) {
        if (!error) {
            return dispatch({ type: "BLOG_DETAIL_FAIL", payload: { error: "No internet connection." } })
        }
        dispatch({ type: "BLOG_DETAIL_FAIL", payload: error.response.data })
    }
}

const allBlogs = (category) => async (dispatch) => {
    try {
        let url = "/api/blog"
        if (category) {
            url = `/api/blog?category=${category}`
        }
        dispatch({ type: "ALL_BLOGS_REQUEST" })
        const { data } = await axios({ url, method: "GET" })
        dispatch({ type: "ALL_BLOGS_SUCCESS", payload: data })
    } catch (error) {
        if (!error) {
            return dispatch({ type: "ALL_BLOGS_FAIL", payload: { error: "No internet connection." } })
        }
        dispatch({ type: "ALL_BLOGS_FAIL", payload: error.response.data })
    }
}

const clearErrors = () => (dispatch) => {
    dispatch({ type: "CLEAR_ERRORS" })
}

export { createBlog, updateBlog, deleteBlog, clearErrors, blogDetail, allBlogs }