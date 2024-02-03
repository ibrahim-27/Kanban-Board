require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const { Login, auth } = require("./controller/Auth");

const { userRouter } = require("./routes/User");
const { taskRouter } = require("./routes/Task");
const { projectRouter } = require("./routes/Project");

// Connect to DB
mongoose.connect(process.env.DB_CONNECT);

app.use(express.json());
app.use(cors());

app.post("/login", Login);

app.use("/task", taskRouter);
app.use("/user", userRouter);
app.use("/project", projectRouter);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(process.env.PORT, () =>
  console.log(`Server up and running on port ${process.env.PORT}`)
  
);
