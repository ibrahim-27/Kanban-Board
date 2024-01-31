const express = require('express');
const userRouter = express.Router();

const { CreateUser } = require('../controller/User');

userRouter.post('/', CreateUser);

exports.userRouter = userRouter;