const { ConnectOpenAI } = require("../../Models/OpenAIModel");

module.exports.getAudioBuffer = async function (param, cb) {

    // Create new OpenAI API client
    let client;
    try {
        client = ConnectOpenAI();
    } catch (error) {
        throw new Error(`Unable to connect with OpenAI API server`);
    }

    // Request the TTS audio from API
    let response
    try {
        response = await client.audio.speech.create(param);
    } catch (error) {
        throw new Error(`Unable to generate Audio Speech: ${error.message}`);
    }

    // Bufferrise the audio file response
    try {
        return await Buffer.from(response.arrayBuffer(), "base64");
    } catch (error) {
        throw new Error(`Unable to create audio array buffer: ${error.message}`);
    }
}