const express = require("express")
const app = express()
const path = require("path")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config({ path: path.resolve(__dirname, "../.env") })
const cloudinary = require("cloudinary")
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})
require("./db/conn")
const blogRouter = require("./routes/blog")
app.use(cors())
app.use(express.json())
app.use(blogRouter)


const port = process.env.PORT || 5000


app.listen(port, () => {
    console.log("Server is runnig at port " + port)
})
