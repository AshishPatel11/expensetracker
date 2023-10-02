const express = require('express');
const router = express.Router();
const Expenses = require('../models/expenses')

//Add new Expense API endpoint
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
            Bill: req.body.Bill,
            uid: req.body.uid,
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


//fetching data for the Bar chart
router.post('/BarChart', async (req, res) => {
    try {

        //Query for the data of monthly Expenses
        const aggregate = await Expenses.aggregate([
            {
                $project: {
                    yearMonth: { $dateToString: { format: "%Y-%m", date: "$ExpenseDate" } },
                    ExpenseAmount: 1
                }
            },
            {
                $group: {
                    _id: "$yearMonth",
                    totalExpense: { $sum: "$ExpenseAmount" }
                }
            },
            {
                $sort: { _id: 1 } // Sort by year and month
            }
        ]);
        if (!aggregate[0]) {
            res.json({ error: "No Data Found" })
        }
        else if (aggregate) {
            res.json(aggregate);
        }
    } catch (error) {
        res.status(500).send(error.message);
        console.log(error.message)
    }
})

module.exports = router