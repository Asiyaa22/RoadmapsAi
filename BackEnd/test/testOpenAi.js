// import openai from "../config/openai.mjs";
// import OpenAIApi from "openai";
// import dotenv from "dotenv";

// dotenv.config();

// const client = new OpenAIApi({
//     apikey: process.env.OPENAI_API_KEY,
// });

// async function testAPI(){
//     try{
//         const chatCompletion = await client.chat.completions.create({
//             messages: [{ role: 'user', content: 'Say this is a test' }],
//             model: 'gpt-4o-mini',
//           });
//     }catch(err){
//         console.error("Error with openAi API", err);
//     }
// }

// testAPI();


//new code
import OpenAI from "openai";

const openai = new OpenAI({
 apiKey: "my test keys"
});

const completion = openai.chat.completions.create({
  model: "gpt-4o-mini",
  store: true,
  messages: [
    {"role": "user", "content": "write a haiku about ai"},
  ],
});

completion.then((result) => console.log(result.choices[0].message));