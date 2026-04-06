import { useState } from 'react';
import './App.css';

function App() {
  const [articleText, setArticleText] = useState('');
  const [model, setModel] = useState('qwen2.5-coder:7b');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSummarize = async (e) => {
    e.preventDefault();
    
    if (!articleText) {
      setError('Please paste an article to summarize.');
      return;
    }

    setIsLoading(true);
    setError('');
    setSummary('');

    try {
      // Calling the Express backend we just built
      const response = await fetch('http://localhost:5000/api/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ articleText, model }),
      });

      const data = await response.json();

      if (response.ok) {
        setSummary(data.summary);
      } else {
        setError(data.error || 'Failed to generate summary.');
      }
    } catch (err) {
      setError('Cannot connect to the backend. Is the server running?');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Tech Sustainability Summarizer</h1>
      
      <form onSubmit={handleSummarize} className="summarizer-form">
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

      {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}

      {summary && (
        <div style={{ marginTop: '30px', textAlign: 'left', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', color: '#333' }}>
          <h2>Summary Result:</h2>
          <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>{summary}</p>
        </div>
      )}
    </div>
  );
}

export default App;