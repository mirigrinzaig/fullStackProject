const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        trim:true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        trim:true
    },
    phone: {
        type: String
    },
    roles: {
        type: String,
        //האם להוסיף עוד הרשאה חוץ ממנהל ולקוחות? אולי הרשאת מוכר
        enum: ['admin', 'user'],
        default: 'user'
    }

}, {
    timestamps: true
})
module.exports = mongoose.model('User', userSchema)