import React from 'react';

const FilterControls = ({ onYearChange, onStateChange, availableStates }) => {
  const years = ["2024"]; // Expand this array as you add more data

  return (
    <div className="flex flex-wrap items-center space-x-4 mb-6">
      <div>
        <label htmlFor="year-select" className="text-sm font-medium mr-2">Year:</label>
        <select id="year-select" onChange={(e) => onYearChange(e.target.value)} className="border rounded px-3 py-2 bg-card text-card-foreground">
          {years.map(year => <option key={year} value={year}>{year}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="state-select" className="text-sm font-medium mr-2">Region:</label>
        <select id="state-select" onChange={(e) => onStateChange(e.target.value)} className="border rounded px-3 py-2 bg-card text-card-foreground">
          <option value="National">National</option>
          {availableStates.map(state => <option key={state} value={state}>{state}</option>)}
        </select>
      </div>
    </div>
  );
};

export default FilterControls;
