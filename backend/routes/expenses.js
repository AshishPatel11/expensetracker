const express = require('express');
const router = express.Router();
const Expenses = require('../models/expenses')

router.post('/expenses', async (req, res) => {
    try {
        let newExpense = await Expenses.create({
            ExpenseId: req.body.ExpenseId,
            ExpenseName: req.body.ExpenseName,
            ExpenseAmount: req.body.ExpenseAmount,
            Catagory: req.body.Catagory,
            ExpenseDate: req.body.ExpenseDate,
            ExpenseDescription: req.body.ExpenseDescription,
        });
        if(newExpense){
            res.json(newExpense)
        }
        else{
            res.json({error:"Something went wrong!!"})
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
})
module.exports = router