# ExaplainIQ

Hackajam Project

ExplainIQ is a cutting-edge project that leverages the power of the MERN stack (MongoDB, Express.js, React, and Node.js) along with the OpenAI GPT-3 API to create a unique web application. This project aims to simplify the understanding of complex PDF documents by providing easier explanations for the content.

Features
PDF Simplification: Upload your PDF documents, and ExplainIQ will generate a simpler and more digestible version of the content.

Contextual Explanations: Using the GPT-3 API, ExplainIQ provides contextual explanations for selected text within the PDF. Simply select a portion of the document, and an easier-to-understand explanation will pop up.

Real-time Collaboration: Collaborate with others by sharing simplified versions and explanations of PDFs, fostering better understanding within teams.

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/explainIQ.git
Install dependencies:

bash
Copy code
cd explainIQ
npm install
Set up environment variables:

Create a .env file in the root directory and add the following:

env
Copy code
REACT_APP_API_URL=http://localhost:5000
REACT_APP_OPENAI_API_KEY=your_openai_api_key
Replace your_openai_api_key with your actual OpenAI GPT-3 API key.

Run the application:

bash
Copy code
npm run dev
This will start both the server and the React app concurrently.

Usage
Access the web application by navigating to http://localhost:3000 in your web browser.

Upload a PDF document using the provided interface.

Once the PDF is processed, select a portion of the document to see a simplified explanation using the GPT-3 API.

Collaborate with others by sharing the simplified version or explanation links.


Acknowledgments
Special thanks to OpenAI for providing the powerful GPT-3 API.
Inspired by the need for simplified explanations in technical and academic documents.
Feel free to explore, contribute, and enhance the capabilities of ExplainIQ. Happy simplifying!
