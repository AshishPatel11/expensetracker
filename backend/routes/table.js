const express = require('express');
const router = express.Router();
const Expenses = require('../models/expenses')

//Add new Expense API endpoint
router.post('/ExpHistory', async (req, res) => {
    try {
        let ExpHistory = await Expenses.find({
            uid: req.body.uid,
        });
        if (!ExpHistory[0]) {
            res.json({ error: "No Data Found" })
        }
        else if (ExpHistory) {
            res.json(ExpHistory)
        }

    } catch (error) {
        res.status(500).send(error.message);
        console.log(error.message)
    }
})

module.exports = router