const express = require("express");
const authentication = require("../Middlewares/authentication");
const {
  createSurvey,
  getSurveys,
  deleteSurvey,
  updateSurvey,
  getSurveyById
} = require("../Controllers/surveyControllers");

const router = express.Router();

router.post("/createSurvey", authentication, createSurvey);
router.get("/", getSurveys);
router.get("/:id", getSurveyById);
router.patch("/:id", authentication, updateSurvey);
router.delete("/:id", authentication, deleteSurvey);

module.exports = router;
