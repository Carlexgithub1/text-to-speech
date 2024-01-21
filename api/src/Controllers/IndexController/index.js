const { join: pjoin } = require("path");
module.exports.SendAPIDescription = function (req, res) {
    res.status(200).json(require(pjoin(__dirname, "../../Config/api.json")))
}