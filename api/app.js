const express = require("express");
const app = express();
const cors = require("cors");
// const apiKey = require("./src/Config/openai");
// const client = new OpenAI({ apiKey });
// const { OpenAI } = require("openai");

app.use(cors());
app.use(express.urlencoded({ extends: true }));
require("./src/Router")(app);

// app.post("/to-speech", async (req, res) => {
//     const param = {
//         voice: req.body.voice,
//         speed: req.body.speed,
//         input: req.body.text,
//     }
//     console.log(param);
//     await TextTospeech(param, res)
// })

// app.get("/test/to-speech", async (req, res) => {
//     res.header()
//     const param = {
//         voice: req.query.voice || "alloy",
//         speed: req.query.speed || "1",
//         input: req.query.text || "Aujourd\'hui est une journée merveilleuse pour construire quelque chose que les gens aiment!"
//     }
//     console.log(param);
//     await TextTospeech(param, res)
// })

// async function TextTospeech(param, res) {
//     client.audio.speech.create({
//         model: "tts-1",
//         response_format: "mp3",
//         voice: param.voice.toString(),
//         speed: param.speed,
//         input: param.input.toString()
//     }).then(async response => {
//         const audio_buffer = Buffer.from(await response.arrayBuffer(), "base64");
//         res.setHeader('Content-Type', 'audio/mpeg');
//         res.setHeader('Content-Disposition', 'attachment; filename=Ausio.mp3');
//         res.send(audio_buffer)
//     }).catch(error => {
//         console.log(error);
//         res.status(500).send(error);
//     });
// }

module.exports = app;