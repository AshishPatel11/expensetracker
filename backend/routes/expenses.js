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
                $match: {
                    uid: req.body.uid
                }
            },
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
                $sort: {
                    "_id.year": 1,
                    "_id.month": 1
                }
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



//fetching data for the pie chart
router.post('/PieChart', async (req, res) => {
    try {
        //Query for the data of monthly Expenses
        const totalResult = await Expenses.aggregate([
            {
                $match: {
                    uid: req.body.uid
                }
            },
            {
                $group: {
                    _id: null,
                    totalExpense: { $sum: '$ExpenseAmount' }
                }
            }
        ]).exec();

        if (!totalResult[0]) {
            res.json({ error: "no data available" })
        }
        else {
            const totalExpense = totalResult[0].totalExpense;

            // Calculate category-wise percentages
            const result = await Expenses.aggregate([
                {
                    $match: {
                        uid: req.body.uid
                    }
                },
                {
                    $group: {
                        _id: '$Category',
                        totalExpense: { $sum: '$ExpenseAmount' }
                    }
                },
                {
                    $project: {
                        _id: 0,
                        Category: '$_id',
                        totalExpense: 1,
                        percentage: {
                            $multiply: [
                                { $divide: ['$totalExpense', totalExpense] },
                                100
                            ]
                        }
                    }
                }
            ]).exec();
            res.json(result);
        }

    } catch (error) {
        res.status(500).send(error.message);
        console.log(error.message)
    }
})

module.exports = router