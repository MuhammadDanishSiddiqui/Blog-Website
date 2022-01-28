
const createBlogReducer = (state = { blog: {} }, action) => {
    switch (action.type) {
        case "CREATE_BLOG_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "CREATE_BLOG_SUCCESS":
            return {
                ...state,
                loading: false,
                blog: action.payload.blog,
                message: action.payload.message
            }
        case "CREATE_BLOG_FAIL":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case "RESET_CREATE_BLOG":
            return {
                ...state,
                message: null
            }
        case "CLEAR_ERRORS":
            return {
                ...state,
                error: null
            }
        default: {
            return state
        }
    }
}

const updateBlogReducer = (state = { blog: {} }, action) => {
    switch (action.type) {
        case "UPDATE_BLOG_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "UPDATE_BLOG_SUCCESS":
            return {
                ...state,
                loading: false,
                blog: action.payload.blog,
                message: action.payload.message
            }
        case "UPDATE_BLOG_FAIL":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case "RESET_UPDATE_BLOG":
            return {
                ...state,
                message: null
            }
        case "CLEAR_ERRORS":
            return {
                ...state,
                error: null
            }
        default: {
            return state
        }
    }
}

const deleteBlogReducer = (state = { blog: {} }, action) => {
    switch (action.type) {
        case "DELETE_BLOG_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "DELETE_BLOG_SUCCESS":
            return {
                ...state,
                loading: false,
                blog: action.payload.blog,
                message: action.payload.message
            }
        case "DELETE_BLOG_FAIL":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case "RESET_DELETE_BLOG":
            return {
                ...state,
                message: null
            }
        case "CLEAR_ERRORS":
            return {
                ...state,
                error: null
            }
        default: {
            return state
        }
    }
}

const blogDetailReducer = (state = { blog: {} }, action) => {
    switch (action.type) {
        case "BLOG_DETAIL_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "BLOG_DETAIL_SUCCESS":
            return {
                ...state,
                loading: false,
                blog: action.payload.blog,
            }
        case "BLOG_DETAIL_FAIL":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case "CLEAR_ERRORS":
            return {
                ...state,
                error: null
            }
        default: {
            return state
        }
    }
}

const allBlogsReducer = (state = { blogs: [] }, action) => {
    switch (action.type) {
        case "ALL_BLOGS_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "ALL_BLOGS_SUCCESS":
            return {
                ...state,
                loading: false,
                blogs: action.payload.blogs,
            }
        case "ALL_BLOGS_FAIL":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case "CLEAR_ERRORS":
            return {
                ...state,
                error: null
            }
        default: {
            return state
        }
    }
}

export { createBlogReducer, updateBlogReducer, deleteBlogReducer, blogDetailReducer, allBlogsReducer }