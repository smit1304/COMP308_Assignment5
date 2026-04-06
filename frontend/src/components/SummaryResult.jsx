const SummaryResult = ({ summary }) => {
    if (!summary) return null;

    return (
        <div className="summary-result">
            <h2>Summary Result</h2>
            <div className="summary-text">{summary}</div>
        </div>
    );
};

export default SummaryResult;