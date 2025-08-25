import React from "react";
import "../styles/YearSelector.css";

const YearSelector = ({ years, selectedYear, onYearChange }) => {
  return (
    <div className="year-selector">
      <h2 className="year-selector-title">Selecione o Ano:</h2>
      <div className="year-buttons">
        {years.map((year) => (
          <button
            key={year}
            className={`year-button ${selectedYear === year ? "active" : ""}`}
            onClick={() => onYearChange(year)}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
};

export default YearSelector;