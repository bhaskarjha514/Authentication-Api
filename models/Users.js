const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    username: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    created_at: {
        type:Date,
        defalut: Date.now
    }
});

const User = module.exports = mongoose.model('User',UserSchema)