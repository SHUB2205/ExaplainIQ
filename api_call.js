


const fs = require('fs');
const pdf = require('pdf-parse');

let s; // Declare s outside the Promise

function extractTextFromPDF(pdfPath) {
  return new Promise((resolve, reject) => {
    const dataBuffer = fs.readFileSync(pdfPath);

    pdf(dataBuffer)
      .then(data => {
        const text = data.text;
        s = text; // Assign the extracted text to the s variable
        resolve(text);
      })
      .catch(err => {
        reject(err);
      });
  });
}

// Usage:
const pdfPath = 'test.pdf';

extractTextFromPDF(pdfPath)
  .then(extractedText => {
    // You can use the extracted text in the 'extractedText' variable, and 's' is also available here
    console.log(s); // Print the extracted text stored in 's'
    console.log("\n");
    console.log("\n");

const OpenAI = require("openai");
const readline = require("readline");

const openai = new OpenAI();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function main() {
  let userMessage = s;
  
  while (true) {
    // Generate an explanation using OpenAI's API
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "Create a program that accepts user input in the form of text and returns a simple, easy-to-understand explanation for the given topic or question" },
        { role: "user", content: userMessage },
      ],
      model: "gpt-3.5-turbo",
    });

    // Extract and format the explanation
    let explanation = completion.choices[0].message.content;
    explanation = explanation.replace(/§/g, "\n§");

    // Display the explanation to the user
    console.log("Explanation:");
    console.log(explanation);

    // Ask the user if they want to ask follow-up questions
    const response = await promptUser("Do you have any follow-up questions? (yes/no): ");

    if (response.toLowerCase() === "no") {
      break; // Exit the loop if the user says "no"
    }

    // Ask the user for their follow-up question
    userMessage = await promptUser("What is your follow-up question? ");
  }
}

function promptUser(question) {
  return new Promise((resolve) => {
    // Prompt the user for input
    rl.question(question, (userInput) => {
      resolve(userInput);
    });
  });
}

main().then(() => {
  rl.close();
});

  })
  .catch(error => {
    console.error('Error:', error);
  });
