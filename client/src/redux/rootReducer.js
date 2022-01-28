import { combineReducers } from 'redux'
import { createBlogReducer, updateBlogReducer, deleteBlogReducer, blogDetailReducer, allBlogsReducer } from "./reducers/blogReducers"

const appReducer = combineReducers({
    createBlog: createBlogReducer,
    updateBlog: updateBlogReducer,
    deleteBlog: deleteBlogReducer,
    blogDetail: blogDetailReducer,
    allBlogs: allBlogsReducer
})

const rootReducer = (state, action) => {
    if (action.type === "LOGOUT") {
        return appReducer(undefined, action)
    }
    return appReducer(state, action)
}

export default rootReducer