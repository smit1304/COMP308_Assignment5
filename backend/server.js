// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import summaryRoutes from './routes/summeryRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/summarize', summaryRoutes);

// Basic test route
app.get('/', (req, res) => {
    res.send('Summarizer Backend is running with MVC Architecture!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log('Make sure the Ollama app is running on your computer!');
});