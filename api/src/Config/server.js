const { HttpsProxyAgent } = require("https-proxy-agent");
require("dotenv").config();

const proxy = process.env.PROXY || undefined;
var proxyAgent = proxy ? new HttpsProxyAgent(proxy) : undefined;

module.exports.proxyAgent = proxyAgent;
module.exports.PORT = process.env.PORT || 4000;