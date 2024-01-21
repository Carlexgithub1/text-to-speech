const { request, response } = require("express");
const SendAudioFile = require("./SendAudioFile");
request.body = {
    voice: "alloy",
    speed: "1",
    "input": "Hello world"
}

SendAudioFile(request, response)
console.log(response);