const IndexEndpoint = require("./IndexEndpoint")
const TTSENdpoint = require("./TTSEndpoint");
// const TestEndpoint = require("./TestEndpoint");

function route(app) {
    app.use("/", IndexEndpoint);
    app.use("/to-speech", TTSENdpoint);
    // app.use("/test", TestEndpoint)
}

module.exports = route;