const express = require('express');
const router = express.Router();
const Reminder = require('../models/reminder')

router.post('/reminder', async (req, res) => {
    try {
        function generateEid() {
            return Date.now();
        }
        let Eid = await generateEid();
        let reminder = await Reminder.create({
            ExpenseId: Eid,
            ExpenseName: req.body.ExpenseName,
            ExpenseAmount: req.body.ExpenseAmount,
            Category: req.body.Category,
            ReminderDate: req.body.ReminderDate,
            uid: req.body.uid,
        });
        if (reminder) {
            res.json(reminder)
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