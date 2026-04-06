    # Lab 5: Tech Sustainability Summarizer

## Group Members
* Smit Patel
* Sanjeev Chauhan
* Jingfu Luo


---

## Part 1: How to Run the Application

This project is divided into a Node.js/Express backend and a Vite/React frontend. It uses a local instance of Ollama to generate summaries. 

### Prerequisites
1. **Node.js**: Ensure Node.js is installed on your machine.
2. **Ollama**: Ensure Ollama is installed and running in the background.
3. **Local Models**: You must pull the required Qwen models to your local machine before running the app. Open your terminal and run:
   * `ollama pull qwen2.5-coder:7b`
   * `ollama pull qwen2.5-coder:14b`

### 1. Starting the Backend Server
The backend handles the API requests and communicates with the local Ollama instance.

1. Open a terminal and navigate to the backend directory:
   ```bash
   cd lab5-summarizer-backend
Install the required dependencies:
cd
Bash
npm install
Start the development server:

Bash
npm run dev
The server should now be running on http://localhost:5000.

2. Starting the Frontend UI
The frontend provides the user interface for inputting articles and displaying the generated summaries.

Open a new terminal window and navigate to the frontend directory:
Bash
cd frontend

Install the required dependencies:
Bash
npm install

Start the Vite development server:
Bash
npm run dev

Open your browser and navigate to the local URL provided by Vite (usually http://localhost:5173/).

3. Using the Application
Copy the text of an article related to technology and sustainability.

Paste the text into the provided text area in the UI.

Select your preferred local model from the dropdown menu (qwen2.5-coder:7b for speed, or 14b for nuance).

Click "Summarize Article" and wait for the AI to process the text and return the formatted summary.



## Part 2: Process Documentation
Implementation of the Summarizer
The application was built using a modernized MERN-stack approach, utilizing ES Modules throughout.

Backend Architecture: We implemented an MVC (Model-View-Controller) architecture to keep the code modular and scalable.

Routing: summaryRoutes.js intercepts incoming POST requests.

Controllers: summaryController.js handles the HTTP request/response cycle and error handling.

Services: aiService.js manages the direct integration with the ollama npm package.

Prompt Engineering: To ensure high-quality, consistent summaries, we abstracted the AI system instructions into a utils/promptTemplates.js file. The prompt strictly enforces a Markdown template, requiring the AI to categorize its findings into "Environmental Impact" and "Sustainable Solutions," aligning perfectly with the assignment rubric.

Frontend Architecture: The UI was built using React and Vite. We separated the UI into functional components (SummarizerForm and SummaryResult) and abstracted the API fetching logic into a dedicated services/api.js file. Custom CSS variables were used to create a clean, modern, and responsive user interface.

Selection of Articles
Articles were selected based on relevance, recency, and authority. We focused on two primary categories:

Impact of Emerging Technologies: We sourced articles from independent, reputable organizations (such as the World Economic Forum and MIT News) to gather unbiased data on the energy and water consumption of modern AI and data centers.

Sustainable Solutions: We directly referenced the most recent official environmental reports (2024/2025) published by top software makers like Microsoft and Google to analyze their specific mitigation strategies, such as carbon-negative goals and water-positive datacenter cooling innovations.

Testing the Solution
The application underwent several testing phases to ensure reliability:

API Integration Testing: We utilized Thunder Client/Postman to send raw text payloads to the Express backend to verify that the Ollama SDK was successfully communicating with the local models and returning data.

Error Handling Verification: We tested the frontend by submitting empty forms and temporarily stopping the backend server to ensure the UI gracefully displayed appropriate error messages (e.g., "Please paste an article" or "Cannot connect to the backend") without crashing.

Prompt Adherence Testing: We fed the AI various articles (some heavily focused on impact, others on solutions) to verify that the custom prompt template successfully forced the AI to maintain the required formatting and accurately state "Information not explicitly provided" when data was missing, preventing AI hallucinations.
