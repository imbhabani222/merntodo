const express = require("express");
const PORT = 4000;
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const mongoDB = require("./db");
const createController = require("./Routes/CreateTask");
mongoDB();

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type , Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome");
});
app.use("/", createController);
app.use("/", require("./Routes/DisplayTask"));

app.listen(PORT, () => {
  console.log("Server connected in port");
});
