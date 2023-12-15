const express = require('express');
const router = express.Router();
const Reminder = require('../models/reminder')
const User = require('../models/user')
const schedule = require('node-schedule');
const nodemailer = require('nodemailer')

router.post('/reminder', async (req, res) => {
    try {

        function generateEid() {
            return Date.now();
        }
        let userdata = await User.findOne({ uid: req.body.uid })
        let Eid = await generateEid();
        let reminder = await Reminder.create({
            ExpenseId: Eid,
            ExpenseName: req.body.ExpenseName,
            ExpenseAmount: req.body.ExpenseAmount,
            Category: req.body.Category,
            ReminderDate: req.body.ReminderDate,
            uid: req.body.uid,
            status: "Pending"
        });

        if (reminder) {
            const date = new Date(req.body.ReminderDate);
            const job = schedule.scheduleJob(date, async function () {

                let transporter = await nodemailer.createTransport({
                    service: 'gmail',
                    host: "smtp.gmail.com",
                    port: 587,
                    secure: false,
                    auth: {
                        user: 'ashishpatel287680@gmail.com',
                        pass: 'elxzerajexrjvreb',
                    },
                });

                let info = await transporter.sendMail({
                    from: '"Ashish Patel" <ashishpatel287680@gmail.com>', // sender address
                    to: userdata.email, // list of receivers
                    subject: "Reminder Alert for Expense Tracker", // Subject line
                    text: `This is the reminder for the Expense: ${req.body.ExpenseName}. Please visit the website for the further update`, // plain text body
                    html: `<b>This is the reminder for the Expense: ${req.body.ExpenseName}. Please visit the website for the further update</b>`, // html body
                })

                let updateRem = await Reminder.updateOne({ ExpenseId: Eid }, { status: "Settled" })


            });
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
//update reminder
router.post('/updateReminder', async (req, res) => {
    try {
        let update = await Reminder.updateOne({ ExpenseId: req.body.ExpenseId }, {
            ExpenseName: req.body.ExpenseName,
            ExpenseAmount: req.body.ExpenseAmount,
            Category: req.body.Category,
            ReminderDate: req.body.ReminderDate,
        })

        if (update.matchedCount) {
            res.json({ success: "Reminder updated successfully" })
        }
        else {
            res.json({ fail: "Reminder details couldn't update!!" })
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
})
module.exports = router