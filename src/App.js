import React, { useState } from "react";
import "./App.css";
import allCountryScores from "./scores";

function App() {
  const [sortOrder, setSortOrder] = useState("desc");

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === "desc" ? "asc" : "desc";
    setSortOrder(newSortOrder);
  };

  const sortScores = (scores) => {
    return scores.sort((a, b) => {
      if (sortOrder === "desc") {
        return b.s - a.s;
      } else {
        return a.s - b.s;
      }
    });
  };

  const renderHighScoreTable = (countryScores) => {
    const sortedScores = sortScores(countryScores.scores);

    return (
      <div key={countryScores.name}>
        <h2>{countryScores.name}</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {sortedScores.map((score, index) => (
              <tr key={index}>
                <td>{score.n}</td>
                <td>{score.s}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderHighScoreTables = () => {
    const sortedCountries = allCountryScores.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    return (
      <div className="App-header">
        <button onClick={toggleSortOrder} className="App-link">
          Toggle Sort Order
        </button>
        {sortedCountries.map((countryScores) =>
          renderHighScoreTable(countryScores)
        )}
      </div>
    );
  };

  return (
    <div className="App">
      <h1>High Score Tables</h1>
      {renderHighScoreTables()}
    </div>
  );
}

export default App;
