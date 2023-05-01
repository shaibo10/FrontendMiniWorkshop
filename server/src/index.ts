import express from 'express';
import * as fs from "fs";
import cors from 'cors';
import {Configuration, OpenAIApi} from "openai";
import * as dotenv from 'dotenv'
import {openAiClient} from "./openai-api";

let localCache: { question: string, answer: string }[] = [];

dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Load your key from an environment variable or secret management service
// (do not include your key directly in your code)
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
console.log(OPENAI_API_KEY)

const app = express();
const port = 3000;

// app.use(cors());
app.use(cors({
    origin: '*'
}));
app.use(express.json());

//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
app.post('/teamFormData', (req, res) => {
    // save form data to file or local DB
    localCache = req.body;
    res.send(localCache);
});

app.get('/teamChatGptConclusions', async (req, res) => {
    // generate positive and fun facts from form data and return them
    try {
        const response = await openAiClient.getConclusionsFromTheForm(localCache);
        res.send(response);
    }catch (e) {
        res.status(500).send(e)
    }

});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
