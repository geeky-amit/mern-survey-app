const express = require("express");
const authentication = require("../Middlewares/authentication");
const {
  createSurvey,
  getSurveys,
  deleteSurvey
} = require("../Controllers/surveyControllers");

const router = express.Router();

router.post("/createSurvey", authentication, createSurvey);
router.get("/", getSurveys);
router.delete("/:id", authentication, deleteSurvey);

module.exports = router;
