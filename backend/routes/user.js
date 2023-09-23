const express = require('express');
const router = express.Router();
const User = require('../models/user')

//API endpoint for user registration
router.post('/signup', async (req, res) => {
    try {
        // Check whether the user already exist or not
        let userdata = await User.findOne({ userName: req.body.userName });

        if (userdata) {
            return res.status(400).json({ error: "UserName already exist!!" })
        }

        function generateUid() {

            // Declare a digits variable 
            // which stores all digits
            var digits = '0123456789';
            let uid = '';
            for (let i = 0; i < 10; i++) {
                uid += digits[Math.floor(Math.random() * 10)];
            }
            return uid;
        }
        let Uid = generateUid();
        // Else create new User
        let newUser = await User.create({
            uid: Uid,
            userName: req.body.userName,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        });

        res.json(newUser)
    } catch (error) {
        res.status(500).send(error.message);
    }
})


//API endpoint for the User login
router.post('/login', async (req, res) => {
    try {
        let loginData = await User.findOne({
            userName: req.body.userName,
            password: req.body.password
        });

        if (loginData) {
            res.json(loginData)
        }
        else {
            return res.status(400).json({ error: "UserName or Password not Valid" })
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
})

module.exports = router