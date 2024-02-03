require("dotenv").config();

const jwt = require('jsonwebtoken');
const { User } = require("../model/User");

exports.Login = async (req, res, next) => {
    try {
        const email = req.body.lemail;
        const password = req.body.lpassword;

        const user = await User.findOne({ email, password });
        // console.log(user);

        if (!user) {
            return res.status(404).send("User not found");
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
        // console.log(token)

        // Send the token to the client
        res.status(200).json({ token, user});

    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).send("Internal Server Error");
    }
}

exports.auth = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send("Unauthorized");
    }
    try {
      const payload = jwt.verify(token, process.env.SECRET_KEY);
      req.userId = payload.userId;
      next();
    } catch (error) {
      console.error("Error authenticating user:", error);
      res.status(500).send("wrong token");
    }
  };
