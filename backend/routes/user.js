const express = require('express');
const router = express.Router();
const User = require('../models/user')
const nodemailer = require('nodemailer')

//API endpoint for user registration
router.post('/signup', async (req, res) => {
    try {
        // Check whether the user already exist or not
        let userdata = await User.findOne({ userName: req.body.userName });

        if (userdata) {
            return res.status(400).json({ error: "UserName already exist!!" })
        }
        //function for random user id generate
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



//API endpoint for the OTP forgot password
router.post('/getotp', async (req, res) => {
    try {
        let userdata = await User.findOne({ userName: req.body.userName })
        if (userdata) {

            //function for random user id generate
            function generateOTP() {

                // Declare a digits variable 
                // which stores all digits
                var digits = '0123456789';
                let OTP = '';
                for (let i = 0; i < 6; i++) {
                    OTP += digits[Math.floor(Math.random() * 10)];
                }
                return OTP;
            }
            let OTP = await generateOTP();

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
                subject: "OTP verification for forget password", // Subject line
                text: `Your OTP for reseting password is ${OTP}`, // plain text body
                html: `<b>Your OTP for reseting password is ${OTP}</b>`, // html body
            })

            res.send([OTP, userdata])
        }
        else {
            return res.status(400).json({ error: "Username doesn't exist!!" })
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
})


//API endpoint for the Password update
router.post('/updatepass', async (req, res) => {
    try {
        let update = await User.updateOne({ userName: req.body.userName }, { password: req.body.password })

        if (update.matchedCount) {
            res.json({ success: "Password updated successfully" })
        }
        else {
            res.json({ fail: "Password couldn't update!!" })
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
})

module.exports = router