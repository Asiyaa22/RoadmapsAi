import { OpenAI } from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
    apikey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAI(client);

export default openai;