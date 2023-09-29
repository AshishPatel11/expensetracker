const express = require('express');
const router = express.Router();
const Reminder = require('../models/reminder')

router.post('/reminder', async (req, res) => {
    try {
        let reminder = await Reminder.create({
            ExpenseId: req.body.ExpenseId,
            ExpenseName: req.body.ExpenseName,
            ExpenseAmount: req.body.ExpenseAmount,
            Category: req.body.Category,
            ReminderDate: req.body.ReminderDate,
        });
        if (reminder) {
            res.json(reminder)
        }
        else {
            res.json({ error: "Something went wrong!!" })
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
})
module.exports = router