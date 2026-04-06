import { useState } from 'react';
import SummarizerForm from './components/SummarizerForm';
import SummaryResult from './components/SummaryResult';
import './App.css';

function App() {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSummarize = async (articleText, model) => {
    if (!articleText) {
      setError('Please paste an article to summarize.');
      return;
    }

    setIsLoading(true);
    setError('');
    setSummary('');

    try {
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
    <>
      <div className="app-container">
        <header className="header">
          <h1 className="title">AI Article Summarizer</h1>
          <p className="subtitle">AI-powered insights for tomorrow's technology</p>
        </header>

        <div className="editorial-panel">
          <SummarizerForm onSummarize={handleSummarize} isLoading={isLoading} />
          
          {error && (
            <div className="error-message">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              {error}
            </div>
          )}
        </div>

        <SummaryResult summary={summary} />
      </div>
    </>
  );
}

export default App;