const { join: pjoin } = require("path");
const router = require("express").Router();
const TTSController = require(pjoin(__dirname, "../../Controllers/TTSController"));

router.post("/", TTSController.SendAudioFile);

module.exports = router;