const { join: pjoin } = require("path");
const { OpenAI } = require("openai");
const { API_KEY } = require(pjoin(__dirname, "../../Config/openai"));
const { proxyAgent } = require(pjoin(__dirname, "../../Config/server"));

module.exports.ConnectOpenAI = function () {
    console.log(`API_KEY: ${API_KEY}\nProxy Agent: ${proxyAgent}`);
    return new OpenAI({ apiKey: API_KEY, httpAgent: proxyAgent });
}