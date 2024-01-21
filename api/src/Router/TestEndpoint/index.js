const { join: pjoin } = require("path");
const router = require("express").Router();
const TestController = require(pjoin(__dirname, "../../Controllers/TestController"));

router.get("/to-speech", TestController.TestTTS);

module.exports = router;