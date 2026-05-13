const express = require("express");
const router = express.Router();

const User = require("../models/User");


// CREATE
router.post("/addUser", async (req, res) => {

    const user = new User(req.body);

    await user.save();

    res.send("User Added");
});


// READ
router.get("/getUsers", async (req, res) => {

    const users = await User.find();

    res.json(users);
});


// UPDATE
router.put("/updateUser/:id", async (req, res) => {

    await User.findByIdAndUpdate(req.params.id, req.body);

    res.send("User Updated");
});


// DELETE
router.delete("/deleteUser/:id", async (req, res) => {

    await User.findByIdAndDelete(req.params.id);

    res.send("User Deleted");
});

module.exports = router;