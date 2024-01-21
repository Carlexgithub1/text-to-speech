const { getUserInputs } = require("./GetUserInputs");
const { getAudioBuffer } = require("./GetAudioBuffer");
const { v4: uuidV4 } = require("uuid");

module.exports = async function (req, res) {

    // console.log(req);
    // Checking user inputs
    let param
    try {
        param = getUserInputs({
            voice: req.body.voice,
            speed: req.body.speed,
            input: req.body.text
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: `Unable to parse user inputs: ${error.message}` });
        return;
    }

    // Generating audio speech
    let audio_buffer;
    try {
        audio_buffer = await getAudioBuffer(param);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: `Something went wrong when trying to generate audio speech: ${error.message}` })
        return
    }

    // Sending audio speech
    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Content-Disposition", `attachment; filename=audio-${uuidV4()}.mp3`);
    res.send(audio_buffer)
}