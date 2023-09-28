const mongoose = require('mongoose')
const { Schema } = mongoose;


//created model(Schema) for the User collection in database
const  ReceiptSchema = new Schema({
    //fields to be added in collection
    ReceiptId: {
        type: Number,
        required: true,
        unique: true
    },
    ReceiptPDF: {
        type: String,
        required: true
    }
});

//exporting the model module
module.exports = mongoose.model('receipt', ReceiptSchema)