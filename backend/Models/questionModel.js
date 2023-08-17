const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema(
  {
    question: {
      type: String,
      required: true
    },
    optionA: {
      type: String,
      required: true
    },
    optionB: {
      type: String,
      required: true
    },
    optionC: {
      type: String,
      default: "none"
    },
    optionD: {
      type: String,
      default: "none"
    },
    surveyName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Survey"
    }
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", QuestionSchema);
module.exports = Question;
