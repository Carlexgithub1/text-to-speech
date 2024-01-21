const router = require("express").Router();
const TTSController = require("../../Controllers/TTSController");

router.post("/", TTSController.SendAudioFile);

module.exports = router;