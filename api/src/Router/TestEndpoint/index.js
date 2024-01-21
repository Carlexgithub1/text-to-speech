const router = require("express").Router();
const TestController = require("../../Controllers/TestController")

router.get("/to-speech", TestController.TestTTS);

module.exports = router;