const asyncHandler = require("express-async-handler");
const Survey = require("../Models/surveyModel");
const mongodb = require("mongodb");

const createSurvey = asyncHandler(async (req, res) => {
  const {
    name,
    description,
    typeOfSurvey,
    startDate,
    endDate,
    otherCriteria,
    surveyPicture
  } = req.body;

  if (
    !name ||
    !description ||
    !typeOfSurvey ||
    !startDate ||
    !endDate ||
    !otherCriteria ||
    !surveyPicture
  ) {
    throw new Error("Please enter all the required fields");
  }

  const survey = await Survey.create({
    name,
    description,
    typeOfSurvey,
    startDate,
    endDate,
    otherCriteria,
    surveyPicture
  });

  if (survey) {
    res.status(201).json({
      _id: survey._id,
      name: survey.name,
      description: survey.description,
      typeOfSurvey: survey.typeOfSurvey,
      startDate: survey.startDate,
      endDate: survey.endDate,
      otherCriteria: survey.otherCriteria,
      surveyPicture: survey.surveyPicture
    });
  } else {
    res.status(400);
    throw new Error("Failed to Create Survey");
  }
});

const getSurveys = asyncHandler(async (req, res) => {
  const data = await Survey.find();

  if (data) {
    res.status(200).json(data);
  } else {
    res.status(400);
    throw new Error("No Survey Found");
  }
});

const getSurveyById = asyncHandler(async (req, res) => {
  const id = req.params;

  if (id) {
    const data = await Survey.findOne({ _id: new mongodb.ObjectId(id) });
    res.status(200).json(data);
  } else {
    res.status(500);
    throw new Error("No Survey found");
  }
});

const updateSurvey = asyncHandler(async (req, res) => {
  const _id = req.params.id;

  if (_id) {
    const surveyInfo = req.body;
    const survey = await Survey.findByIdAndUpdate(_id, surveyInfo, {
      new: true
    });

    res.status(200).json(survey);
  } else {
    res.status(500);
    throw new Error("Something wend wrong");
  }
});

const deleteSurvey = asyncHandler(async (req, res) => {
  const id = req.params.id;

  if (id) {
    const data = await Survey.deleteOne({ _id: new mongodb.ObjectId(id) });
    res.status(200).json(data);
  } else {
    res.status(500);
    throw new Error("Something wend wrong");
  }
});

module.exports = {
  createSurvey,
  getSurveys,
  deleteSurvey,
  updateSurvey,
  getSurveyById
};
