// routes/summaryRoutes.js
import express from 'express';
import { summarizeArticle } from '../controllers/summeryController.js';

const router = express.Router();

// This will map to /api/summarize based on how we set it up in server.js
router.post('/', summarizeArticle);

export default router;