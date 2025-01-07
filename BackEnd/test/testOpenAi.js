// import openai from "../config/openai.mjs";
import OpenAIApi from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAIApi({
    apikey: process.env.OPENAI_API_KEY,
});

async function testAPI(){
    try{
        const chatCompletion = await client.chat.completions.create({
            messages: [{ role: 'user', content: 'Say this is a test' }],
            model: 'gpt-4o-mini',
          });
    }catch(err){
        console.error("Error with openAi API", err);
    }
}

testAPI();