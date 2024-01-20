const express = require("express");
const app = express();
const openAI = require("openai");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT;
const apiKey = process.env.API_KEY;

app.use(cors());
app.use(express.urlencoded({ extends: true }));

const client = new openAI({ apiKey });
async function TextTospeech(param, cb) {
    client.audio.speech.create({
        model: 'tts-1',
        voice: param.voice,
        speed: param.speed,
        input: param.input
    }).then(response => {
        cb(response);
    }).catch(error => {
        cb(undefined, error)
    });
}
app.get("/", (req, res) => {
    res.status(200).send("api is working fine");
});

app.post("/to-speech", (req, res) => {
    console.log(req.body);
    res.status(200).json(req.body);
})

app.get("/test/to-speech", async (req, res) => {
    const param = {
        voice: req.query.voice || 'alloy',
        speed: req.query.speed || 1,
        input: req.query.text || 'Aujourd\'hui est une journée merveilleuse pour construire quelque chose que les gens aiment!'
    }
    console.log(param);

    await TextTospeech(param, (response, error) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).send(response)
        }
    })
})

app.listen(PORT);