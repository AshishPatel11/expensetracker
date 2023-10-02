const express = require('express');
const router = express.Router();
const ExpHistory = require('../models/expenses')

//Add new Expense API endpoint
router.post('/ExpHistory', async (req, res) => {
    try{
        let ExpHistory = await Expenses.find({
            uid: req.body.uid,
        });

        if (ExpHistory) {
            res.json(ExpHistory)
        }
        else {
            res.json({ error: "Something went wrong!!" })
        }
    } catch (error) {
        res.status(500).send(error.message);
        console.log(error.message)
    }
})

module.exports = router