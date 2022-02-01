const express = require("express")
const Blog = require("../models/blog")
const upload = require("../middleware/upload")
const cloudinary = require("cloudinary")
const sharp = require('sharp')
const { ObjectId } = require('mongodb')

const router = new express.Router()

router.post("/api/blog", upload.single("imgsrc"), async (req, res) => {
    try {
        const myId = new ObjectId("507f191e810c19729de860ea")

        if (req.file) {
            const bufferImage = await sharp(req.file.buffer).resize({ width: 600, height: 500, fit: sharp.fit.fill, }).png().toBuffer()
            const image = `data:image/png;base64,${bufferImage.toString('base64')}`
            const myImage = await cloudinary.v2.uploader.upload(image, {
                folder: "blog-images",
            })
            req.body.imgsrc = { public_id: myImage.public_id, url: myImage.secure_url }
        }

        const blog = new Blog({
            ...req.body, author: "fake author", user: myId
        })
        await blog.save()
        res.status(201).send({ message: "Blog added successfully.", blog })
    } catch (error) {
        res.status(400).send(error)
    }
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

router.get("/api/blog", async (req, res) => {
    try {
        const blogs = await Blog.find({})
        if (blogs.length === 0) {
            return res.send({ message: "No Blog Added" })
        }
        res.send({ blogs })
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/api/blog/:id", async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id)
        if (!blog) {
            return res.status(404).send({ error: "No Blog Found" })
        }
        res.send({ blog })
    } catch (error) {
        res.status(500).send(error)
    }
})

router.delete("/api/blog/:id", async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id)
        if (!blog) {
            return res.status(404).send({ error: "No Blog Found. " })
        }
        res.send({ blog, message: "Blog deleted successfully." })
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router




