const express = require('express');
const router = express.Router();
const User = require('../models/user')
router.post('/signup', async (req, res) => {
    try {
        // Check whether the Sem with this name exists already
        let userdata = await User.findOne({ userName: req.body.userName });
        if (userdata) {
            return res.status(400).json({ error: "UserName already exist!!" })
        }

        // Create a new sem
        newUser = await User.create({
            uid: req.body.uid,
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password
        });
        res.json(newUser)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router