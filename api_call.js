const OpenAI = require("openai");
const readline = require("readline");

const openai = new OpenAI();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function main() {
  const userMessage = "One of the first argument forms that we will look at in §2.3 is modus ponens. We will see that it has the following valid form:";
  
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "Create a program that accepts user input in the form of text and returns a simple, easy-to-understand explanation for the given topic or question" },
      { role: "user", content: userMessage },
    ],
    model: "gpt-3.5-turbo",
  });

  let explanation = completion.choices[0].message.content;

  // Add line breaks to format the explanation
  explanation = explanation.replace(/§/g, "\n§");

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

