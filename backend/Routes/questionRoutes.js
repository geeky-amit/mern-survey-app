const express = require("express");
const {
  createQuestion,
  getQuestions
} = require("../Controllers/questionControllers");

const router = express.Router();

router.post("/createQuestion", createQuestion);
router.get("/", getQuestions);

module.exports = router;
