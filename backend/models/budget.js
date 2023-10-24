const mongoose = require('mongoose')
const { Schema } = mongoose;


//created model(Schema) for the User collection in database
const BudgetSchema = new Schema({
    //fields to be added in collection
    BudgetId: {
        type: Number,
        required: true,
        unique: true
    },
    BudgetAmt: {
        type: Number,
        required: true
    },
    uid: {
        type: Number,
        required: true
    }
});

//exporting the model module
module.exports = mongoose.model('budget', BudgetSchema)