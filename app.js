const express = require("express");
const connectDB = require("./db/connect");
require("dotenv").config();

const taskRouter = require("./routes/tasks");
const port = 3000;

const app = express();

app.use(express.json());

//routes
app.use(express.static("./public"));

app.use("/api/v1/task", taskRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(port, () => {
      console.log("server is listening on port:" + port);
    });
  } catch (err) {
    console.log("Server ❌");
  }
};

start();
