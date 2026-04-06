// src/App.jsx
import { useState } from 'react';
import SummarizerForm from './components/SummarizerForm';
import SummaryResult from './components/SummaryResult';
import { fetchSummary } from './services/api';
import './App.css';

function App() {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSummarize = async (articleText, model) => {
    if (!articleText.trim()) {
      setError('Please paste an article to summarize.');
      return;
    }

    setIsLoading(true);
    setError('');
    setSummary('');

    try {
      const data = await fetchSummary(articleText, model);
      setSummary(data.summary);
    } catch (err) {
      setError(err.message || 'Cannot connect to the backend. Is the server running?');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Tech Sustainability Summarizer</h1>
      
      <SummarizerForm 
        onSummarize={handleSummarize} 
        isLoading={isLoading} 
      />

      {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}

      <SummaryResult summary={summary} />
    </div>
  );
}

export default App;