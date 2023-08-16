const asyncHandler = require("express-async-handler");
const Question = require("../Models/questionModel");

const createQuestion = asyncHandler(async (req, res) => {
  const { question, option1, option2, option3, option4 } = req.body;

  if (!question || !option1 || !option2) {
    throw new Error("Please enter all the required fields");
  }

  const quest = await Question.create({
    question,
    option1,
    option2,
    option3,
    option4
  });

  if (quest) {
    res.status(201).json({
      _id: quest._id,
      questions: quest.question,
      option1: quest.option1,
      option2: quest.option2,
      option3: quest.option3,
      option4: quest.option4,
      surveyName: quest.surveyName
    });
  } else {
    res.status(400);
    throw new Error("Failed to Create Survey");
  }
});

const getQuestions = asyncHandler(async (req, res) => {
  const data = await Question.find();

  if (data) {
    res.status(200).json(data);
  } else {
    res.status(400);
    throw new Error("No Questions Found");
  }
});

module.exports = { createQuestion, getQuestions };
