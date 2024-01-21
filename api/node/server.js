const express = require("express");
const app = express();
const { OpenAI } = require("openai");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 4000;
const apiKey = process.env.API_KEY;

app.use(cors());
app.use(express.urlencoded({ extends: true }));

const client = new OpenAI({ apiKey });

app.get("/", (req, res) => {
    res.status(200).send("api is working fine");
});

app.post("/to-speech", async (req, res) => {
    const param = {
        voice: req.body.voice,
        speed: req.body.speed,
        input: req.body.text,
    }
    console.log(param);
    await TextTospeech(param, res)
})

app.get("/test/to-speech", async (req, res) => {
    res.header()
    const param = {
        voice: req.query.voice || "alloy",
        speed: req.query.speed || "1",
        input: req.query.text || "Aujourd\'hui est une journée merveilleuse pour construire quelque chose que les gens aiment!"
    }
    console.log(param);
    await TextTospeech(param, res)
})

async function TextTospeech(param, res) {
    client.audio.speech.create({
        model: "tts-1",
        response_format: "mp3",
        voice: param.voice.toString(),
        speed: param.speed,
        input: param.input.toString()
    }).then(response => {
        const audio_buffer = Buffer.from(response.arrayBuffer(), "base64");
        res.setHeader('Content-Type', 'audio/mpeg');
        res.setHeader('Content-Disposition', 'attachment; filename=Ausio.mp3');
        res.send(audio_buffer)
    }).catch(error => {
        console.log(error);
        res.status(500).send(error);
    });
}

// if (error) {
//     console.log(error);
//     res.status(500).json({ msg: "Something went wrong", error });
// } else {
//     const audioBuffer = Buffer.from(response.data, "base64");
//     res.setHeader('Content-Type', 'audio/mpeg');
//     res.setHeader('Content-Disposition', 'attachment; filename=Ausio.mp3');
//     res.status(200).send(audioBuffer);
// }

app.listen(PORT);