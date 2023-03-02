const User = require('../models/User');
const authController = require('../views/authController')

const router = require('express').Router();

router.post('/register', async(req,res) => {
    try {
        const newUser = await User.create({
            name: "Felipe",
            email:"felipe@felipe.com",
            password: "123456"
        })
     


        return res.send('register')
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

router.post('/login', (req,res) => {
    res.send("login")
})


module.exports = router;