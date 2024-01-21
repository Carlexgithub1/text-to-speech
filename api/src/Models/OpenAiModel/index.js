const { OpenAI } = require("openai");
const { API_KEY } = require("../../Config/openai");
const { proxyAgent } = require("../../Config/server");

module.exports.ConnectOpenAI = function () {
    console.log(`API_KEY: ${API_KEY}\nProxy Agent: ${proxyAgent}`);
    return new OpenAI({ apiKey: API_KEY, httpAgent: proxyAgent });
}