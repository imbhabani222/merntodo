const express = require("express");
const router = express.Router();
const dataController = require("../controller/taskController.js");
// const taskDetail = require("../models/Task");

router.get("/displayTask", dataController.getAllData);

module.exports = router;

// async (req, res) => {
//   try {
// // const data  = await mongoDB()
// console.log(taskDetail,"jjjjjjj")
// const detail = await taskDetail.find()
//     res.send(detail);
//   } catch (error) {
//     console.log(error);
//     res.send("server error");
//   }
// }
