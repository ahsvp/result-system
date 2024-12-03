import React from 'react';
import './Result.css';

const Result = ({ results }) => {
  // If there are no results, show a message with some styling
  if (!results || results.length === 0) {
    return (
      <div className="no-results-container">
        <h2>No Results Available</h2>
        <p>Check back later for upcoming results or contact the administrator.</p>
      </div>
    );
  }

  return (
    <div className="results-container">
      <h2>Competition Results</h2>
      {results.map((result, index) => (
        <div key={index} className="result-box">
          <div className="result-header">
            <h3>{result.title}</h3>
            <p className="section-label">{result.section}</p>
          </div>
          
          <div className="prize-list">
            <div className="prize first-prize">
              <span className="prize-rank">1st Prize</span>
              <div className="prize-details">
                <strong>{result.first.name}</strong>
                <span className="group-label">Group {result.first.group}</span>
              </div>
            </div>
            
            <div className="prize second-prize">
              <span className="prize-rank">2nd Prize</span>
              <div className="prize-details">
                <strong>{result.second.name}</strong>
                <span className="group-label">Group {result.second.group}</span>
              </div>
            </div>
            
            <div className="prize third-prize">
              <span className="prize-rank">3rd Prize</span>
              <div className="prize-details">
                <strong>{result.third.name}</strong>
                <span className="group-label">Group {result.third.group}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Result;