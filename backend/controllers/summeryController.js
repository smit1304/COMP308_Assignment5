// controllers/summaryController.js
import { generateSummary } from '../services/aiService.js';

export const summarizeArticle = async (req, res) => {
    try {
        const { articleText, model = 'qwen2.5-coder:7b' } = req.body; 

        if (!articleText) {
            return res.status(400).json({ error: 'Please provide the article text to summarize.' });
        }

        console.log(`Generating summary using ${model}...`);

        // Call the service layer instead of writing logic here
        const summaryContent = await generateSummary(articleText, model);

        res.json({ 
            success: true, 
            modelUsed: model,
            summary: summaryContent 
        });

    } catch (error) {
        console.error('Error generating summary:', error);
        res.status(500).json({ error: 'An error occurred while generating the summary.' });
    }
};