// services/aiService.js
import ollama from 'ollama';
import { getSustainabilitySummaryPrompt } from '../utils/promptTemplates.js';

export const generateSummary = async (articleText, model, customPrompt = null) => {
    const systemPrompt = customPrompt || getSustainabilitySummaryPrompt();
    
    const response = await ollama.chat({
        model: model,
        messages: [
            {
                role: 'system',
                // Use custom prompt if provided, otherwise use default prompt
                content: systemPrompt
            },
            {
                role: 'user',
                content: articleText
            }
        ]
    });
    
    return response.message.content;
};