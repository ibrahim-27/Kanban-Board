require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const {taskRouter} = require('./routes/Task');

// Connect to DB
mongoose.connect(process.env.DB_CONNECT);

app.use(express.json());
app.use(cors());
app.use('/task', taskRouter);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(process.env.PORT, () => console.log(`Server up and running on port ${process.env.PORT}`));
