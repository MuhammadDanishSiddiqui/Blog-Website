const mongoose = require("mongoose")

mongoose.connect(process.env.DB).then(() => {
    console.log("Connected to Data Base.")
}).catch(() => {
    console.log("Unable to connect to Data Base")
})