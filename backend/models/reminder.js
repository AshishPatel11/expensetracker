const mongoose = require('mongoose')
const { Schema } = mongoose;


//created model(Schema) for the User collection in database
const ReminderSchema = new Schema({
    //fields to be added in collection
    ExpenseId: {
        type: Number,
        required: true,
        unique: true
    },
    ExpenseName: {
        type: String,
        required: true,
    },
    ExpenseAmount: {
        type: Number,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    ReminderDate: {
        type: Date,
        required: true
    },
    uid: {
        type: String,
        required: true
    },
});

//exporting the model module
module.exports = mongoose.model('reminder', ReminderSchema)