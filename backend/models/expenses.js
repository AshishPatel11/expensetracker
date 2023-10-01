const mongoose = require('mongoose')
const { Schema } = mongoose;


//created model(Schema) for the User collection in database
const ExpensesSchema = new Schema({
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
    ExpenseDate: {
        type: Date,
        required: true
    },
    ExpenseDescription: {
        type: String,
        required: true
    },
    Bill: {
        type: String,
    }
});

//exporting the model module
module.exports = mongoose.model('expenses', ExpensesSchema)