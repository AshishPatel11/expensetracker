const express = require('express');
const router = express.Router();
const Expenses = require('../models/expenses')
const Reminder = require('../models/reminder')

//Add new Expense API endpoint
router.post('/ExpHistory', async (req, res) => {
    try {
        let ExpHistory = await Expenses.find({
            uid: req.body.uid,
        }, { "_id": 0, "__v": 0 }).sort({ ExpenseDate: -1 });
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

router.post('/RemHistory', async (req, res) => {
    try {
        let RemHistory = await Reminder.find({
            uid: req.body.uid,
        }, { "_id": 0, "__v": 0 });
        if (!RemHistory[0]) {
            res.json({ error: "No Data Found" })
        }
        else if (RemHistory) {
            res.json(RemHistory)
        }

    } catch (error) {
        res.status(500).send(error.message);
        console.log(error.message)
    }
})
module.exports = router