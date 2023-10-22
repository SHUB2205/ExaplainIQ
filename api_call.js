/*
const OpenAI = require("openai");

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  const tokensUsed = completion.usage.total_tokens;
  console.log(`Tokens used: ${tokensUsed}`);
  console.log(completion.choices[0]);

}

main();


const OpenAI = require("openai");

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a knowledgeable assistant that can explain various topics." },
      { role: "user", content: "Can you explain the theory of relativity to me?" },
    ],
    model: "gpt-3.5-turbo",
  });

  const explanation = completion.choices[0].message.content;
  console.log("Explanation:");
  console.log(explanation);
}

main();
*/


const OpenAI = require("openai");
const readline = require("readline");

const openai = new OpenAI();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function main() {
  const userMessage = "Population diversity of India";
  
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a knowledgeable assistant that can explain various topics. Give me an explain" },
      { role: "user", content: userMessage },
    ],
    model: "gpt-3.5-turbo",
  });

  const explanation = completion.choices[0].message.content;
  console.log("Explanation:");
  console.log(explanation);
}

function promptUser(question) {
  return new Promise((resolve) => {
    rl.question(question, (userInput) => {
      resolve(userInput);
    });
  });
}

main().then(() => {
  rl.close();
});

