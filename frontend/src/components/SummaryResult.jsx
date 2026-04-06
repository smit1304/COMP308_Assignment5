import { useState } from 'react';

const SummaryResult = ({ summary }) => {
    const [copied, setCopied] = useState(false);

    if (!summary) return null;

    const handleCopy = () => {
        navigator.clipboard.writeText(summary);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="summary-result-wrapper editorial-panel">
            <div className="form-group">
                <label className="form-label">Summary Result</label>
                <button 
                    onClick={handleCopy}
                    className="copy-button"
                    title="Copy summary to clipboard"
                >
                    {copied ? '✓ Copied' : 'Copy'}
                </button>
            </div>
            <textarea
                readOnly
                rows="8"
                className="minimal-input"
                value={summary}
            />
        </div>
    );
};

export default SummaryResult;