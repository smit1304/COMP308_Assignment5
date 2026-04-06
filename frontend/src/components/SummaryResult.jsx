const SummaryResult = ({ summary }) => {
    if (!summary) return null;

    return (
        <div className="result-container">
            <div className="result-header">
                <h2 className="result-title">Summary Result</h2>
            </div>
            <div className="result-content">
                {summary}
            </div>
        </div>
    );
};

export default SummaryResult;