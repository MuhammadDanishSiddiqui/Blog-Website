const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please Enter Title."],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Please Enter Description."],
        trim: true,
    },
    category: {
        type: String,
        required: [true, "Please Select Category."]
    },
    imgsrc: {
        type: {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        },
        required: [true, "Please Select an Image."]
    },
    author: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Blog = new mongoose.model("Blog", blogSchema)

module.exports = Blog