const User = require('../models/User')

const authController = {};

authController.register = async (req,res) => {
    try {
        const newUser = await User.create({
            name: "Felipe",
            email:"felipe@felipe.com",
            password: "123456"
            
        })
        return res.send(newUser)
    } catch (error) {
        return res.status(500).json({
            succes: true,
            message: "Something went wrong",
            error: error.message
        })
    }
}




module.exports = (authController);