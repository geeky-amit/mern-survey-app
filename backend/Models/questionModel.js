const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema(
  {
    question: {
      type: String,
      required: true
    },
    option1: {
      type: String,
      required: true
    },
    option2: {
      type: String,
      required: true
    },
    option3: {
      type: String,
      default: "none"
    },
    option4: {
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
