const asyncHandler = require("express-async-handler");
const Question = require("../Models/questionModel");

const createQuestion = asyncHandler(async (req, res) => {
  const { question, optionA, optionB, optionC, optionD } = req.body;

  if (!question || !optionA || !optionB) {
    throw new Error("Please enter all the required fields");
  }

  const quest = await Question.create({
    question,
    optionA,
    optionB,
    optionC,
    optionD
  });

  if (quest) {
    res.status(201).json({
      _id: quest._id,
      questions: quest.question,
      optionA: quest.optionA,
      optionB: quest.optionB,
      optionC: quest.optionC,
      optionD: quest.optionD,
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
