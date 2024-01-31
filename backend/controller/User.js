const mongoose = require("mongoose");
const { User } = require("../model/User");

exports.CreateUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (error) {
    console.log("Error creating user");
    res.sendStatus(500);
  }
};
