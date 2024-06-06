const mongoose = require('mongoose')
const postSchema = new mongoose.Schema(
    {
        header: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true
        },
        image:{
            type: String,
            // required: true
        },
        likes:{
            tipe:Number,
        }
    },
    { timestamps: true }
)
module.exports = mongoose.model('post', postSchema)


