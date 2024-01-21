const { join: pjoin } = require("path");
const router = require("express").Router();
const IndexController = require(pjoin(__dirname, "../../Controllers/IndexController"));
const TTSController = require(pjoin(__dirname, "../../Controllers/TTSController"));

router.get("/", IndexController.SendAPIDescription);
router.post("/", TTSController.SendAudioFile);

module.exports = router;