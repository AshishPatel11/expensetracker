const express = require('express');
const router = express.Router();
const Expenses = require('../models/expenses')

router.post('/expenses', async (req, res) => {
    try {
        function generateEid() {
            return Date.now();
        }
        let Eid = await generateEid();

        let newExpense = await Expenses.create({
            ExpenseId: Eid,
            ExpenseName: req.body.ExpenseName,
            ExpenseAmount: Number(req.body.ExpenseAmount),
            Category: req.body.Category,
            ExpenseDate: req.body.ExpenseDate,
            ExpenseDescription: req.body.ExpenseDescription,
        });

        if (newExpense) {
            res.json(newExpense)
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