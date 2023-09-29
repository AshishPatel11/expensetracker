const express = require('express');
const router = express.Router();
const Reminder = require('../models/reminder')

router.post('/reminder', async (req, res) => {
    try {
        let Reminder = await Reminder.create({
            ExpenseId: req.body.ExpenseId,
            ExpenseName: req.body.ExpenseName,
            ExpenseAmount: req.body.ExpenseAmount,
            Category: req.body.Category,
            ReminderDate: req.body.ReminderDate,
        });
        if(Reminder){
            res.json(Reminder)
        }
        else{
            res.json({error:"Something went wrong!!"})
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
})
module.exports = router