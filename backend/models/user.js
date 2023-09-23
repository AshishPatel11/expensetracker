const mongoose = require('mongoose')
const { Schema } = mongoose;


//created model(Schema) for the User collection in database
const UserSchema = new Schema({
    //fields to be added in collection
    uid: {
        type: Number,
        required: true,
        unique: true
    },
    userName: {
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

//exporting the model module
module.exports = mongoose.model('users', UserSchema)