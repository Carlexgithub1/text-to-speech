const { inputTypeError, missingInput } = require("./Utilities");
module.exports.getUserInputs = function (inputs) {
    console.log(inputs);
    if (!inputs.voice) missingInput("voice");
    if (!inputs.speed) missingInput("speed");
    if (!inputs.input) missingInput("input");

    if (!(typeof inputs.voice == "string")) inputTypeError("[voice] input must be of type <String>");
    if (!(typeof inputs.speed == "string")) inputTypeError("[speed] input must be of type <String>");
    if (!(typeof inputs.input == "string")) inputTypeError("[input] input must be of type <String>");

    return {
        model: "tts-1",
        response_format: "mp3",
        voice: inputs.voice,
        speed: inputs.speed,
        input: inputs.input
    }
}