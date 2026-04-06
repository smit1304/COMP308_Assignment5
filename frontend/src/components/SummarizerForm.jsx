// src/components/SummarizerForm.jsx
import { useState } from 'react';

const SummarizerForm = ({ onSummarize, isLoading }) => {
    const [articleText, setArticleText] = useState('');
    const [model, setModel] = useState('qwen2.5-coder:7b');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSummarize(articleText, model);
    };

    return (
        <form onSubmit={handleSubmit} className="summarizer-form">
            <div className="form-group">
                <label htmlFor="model-select"><strong>Choose Local Model: </strong></label>
                <select
                    id="model-select"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                >
                    <option value="qwen2.5-coder:7b">qwen2.5-coder:7b (Faster)</option>
                    <option value="qwen2.5-coder:14b">qwen2.5-coder:14b (More Nuanced)</option>
                </select>
            </div>

            <div className="form-group">
                <textarea
                    rows="12"
                    style={{ width: '100%', marginTop: '15px', padding: '10px' }}
                    placeholder="Paste the article text about sustainability initiatives here..."
                    value={articleText}
                    onChange={(e) => setArticleText(e.target.value)}
                />
            </div>

            <button 
                type="submit" 
                disabled={isLoading}
                style={{ marginTop: '15px', padding: '10px 20px', cursor: 'pointer' }}
            >
                {isLoading ? 'Generating Summary...' : 'Summarize Article'}
            </button>
        </form>
    );
};

export default SummarizerForm;