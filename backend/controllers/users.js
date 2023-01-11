let User = require('../models/User')

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json('Error: ' + error)
    }
}

const addUser = async (req, res) => {
    try {
        const { username } = req.body;
        const newUser = new User({username});
        await newUser.save()
        res.status(201).json("User Added!!")
    } catch (error) {
        res.status(400).json('Error: ' + error)
    }
}

module.exports = {
    getUsers,
    addUser
}