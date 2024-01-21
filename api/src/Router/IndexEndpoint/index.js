const router = require("express").Router();
const IndexController = require("../../Controllers/indexController");
const TTSController = require("../../Controllers/TTSController");

router.get("/", IndexController.SendAPIDescription);
router.post("/", TTSController.SendAudioFile);

module.exports = router;