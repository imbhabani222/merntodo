const express = require("express");
const router = express.Router();
// const { body, validationResult } = require("express-validator");
// const Task = require("../models/Task");
const dataController = require("../controller/taskController.js");

router.post("/createTask", dataController.createData);

module.exports = router;

// router.get('/', dataController.getAllData);
// router.post('/', dataController.createData);
// // Define other routes similarly

// module.exports = router;

// [body("task").isLength({ min: 5 })],
// async (req, res) => {
//   const error = validationResult(req);
//   if (!error.isEmpty()) {
//     return res.status(400).json({ errors: error.array() });
//   }
//   try {
//     Task.create({
//       task: req.body.task,
//     }).then(await newData.save(), res.json(newData));
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Server Error");
//   }
// }
