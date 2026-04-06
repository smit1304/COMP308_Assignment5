// services/aiService.js
import ollama from 'ollama';
import { getSustainabilitySummaryPrompt } from '../utils/promptTemplates.js';

export const generateSummary = async (articleText, model) => {
    const response = await ollama.chat({
        model: model,
        messages: [
            {
                role: 'system',
                // Calling our modular prompt function here
                content: getSustainabilitySummaryPrompt()
            },
            {
                role: 'user',
                content: articleText
            }
        ]
    });
    
    return response.message.content;
};