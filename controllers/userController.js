const User = require("../models/User");

// GET all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {   // <-- fixed here
        res.status(500).json({ message: error.message });
    }
};

// CREATE new user
exports.createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const user = await User.create({ name, email, password, role });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
