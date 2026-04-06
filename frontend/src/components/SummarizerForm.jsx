import { useState } from 'react';

const SummarizerForm = ({ onSummarize, isLoading }) => {
    const [articleText, setArticleText] = useState('');
    const [model, setModel] = useState('qwen2.5-coder:7b');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSummarize(articleText, model);
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
                <label htmlFor="model-select" className="form-label">Choose Local Model</label>
                <div className="select-wrapper">
                    <select
                        id="model-select"
                        className="minimal-input"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                    >
                        <option value="qwen2.5-coder:7b">qwen2.5-coder:7b (Faster)</option>
                        <option value="qwen2.5-coder:14b">qwen2.5-coder:14b (More Nuanced)</option>
                    </select>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Article Content</label>
                <textarea
                    rows="6"
                    className="minimal-input"
                    placeholder="Paste the emerging tech article here..."
                    value={articleText}
                    onChange={(e) => setArticleText(e.target.value)}
                />
            </div>

            <button 
                type="submit" 
                disabled={isLoading}
                className="classic-button"
            >
                {isLoading ? (
                    <>
                        <span className="spinner"></span>
                        Generating Summary...
                    </>
                ) : (
                    'Summarize Article'
                )}
            </button>
        </form>
    );
};

export default SummarizerForm;