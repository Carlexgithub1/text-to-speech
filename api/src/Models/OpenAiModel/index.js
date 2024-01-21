const { OpenAI } = require("openai");
const { API_KEY } = require("../../Config/openai");

module.exports.ConnectOpenAI = function () {
    return new OpenAI({ apiKey: API_KEY });
}