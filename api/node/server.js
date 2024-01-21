const express = require("express");
const app = express();
const openAI = require("openai");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 4000;
const apiKey = process.env.API_KEY;

app.use(cors());
app.use(express.urlencoded({ extends: true }));

const client = new openAI({ apiKey });

app.get("/", (req, res) => {
    res.status(200).send("api is working fine");
});

app.post("/to-speech", async (req, res) => {
    const param = {
        voice: req.body.voice,
        speed: req.body.speed,
        input: req.body.text
    }
    console.log(param);
    await TextTospeech(param, res, SendResponse)
})

app.get("/test/to-speech", async (req, res) => {
    const param = {
        voice: req.query.voice || "alloy",
        speed: req.query.speed || "1",
        input: req.query.text || "Aujourd\'hui est une journée merveilleuse pour construire quelque chose que les gens aiment!"
    }
    console.log(param);
    await TextTospeech(param, res, SendResponse)
})

async function TextTospeech(param, res, cb) {
    client.audio.speech.create({
        model: "tts-1",
        voice: param.voice.toString(),
        speed: param.speed,
        input: param.input.toString()
    }).then(response => {
        cb(res, response);
    }).catch(error => {
        cb(res, undefined, error)
    });
}

function SendResponse(res, response, error) {
    if (error) {
        console.log(error);
        res.status(500).send(error);
    } else {
        console.log(response);
        res.status(200).send(response)

        // if (error) {
        //     console.log(error);
        //     res.status(500).json({ msg: "Something went wrong", error });
        // } else {
        //     const audioBuffer = Buffer.from(response.data, "base64");
        //     res.setHeader('Content-Type', 'audio/mpeg');
        //     res.setHeader('Content-Disposition', 'attachment; filename=Ausio.mp3');
        //     res.status(200).send(audioBuffer);
        // }
    }
}

app.listen(PORT);