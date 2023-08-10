const mongoose = require("mongoose");

const surveySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  typeOfSurvey: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  otherCriteria: {
    type: String
  },
  image: {
    type: String,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  }
});

const Survey = mongoose.model("Survey", surveySchema);

module.exports = Survey;
