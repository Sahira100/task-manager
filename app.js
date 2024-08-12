const express = require("express");
const notFound = require("./middleware/not-found");
const erroHandler = require("./middleware/error-handler");
const connectDB = require("./db/connect");
require("dotenv").config();

const taskRouter = require("./routes/tasks");

const app = express();

app.use(express.json());
app.use(express.static("./public"));

//routes
app.use("/api/v1/tasks", taskRouter);
app.use("*", notFound);

app.use(erroHandler);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(process.env.PORT, () => {
      console.log("server is listening on port:" + process.env.PORT);
    });
  } catch (err) {
    console.log("Server ❌");
  }
};

start();
