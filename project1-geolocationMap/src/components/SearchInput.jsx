import React from "react";

const SearchInput = ({ handleLocation, setLocationSearch }) => {
  return (
    <div className="textBox">
      <div>
        <input
          type="text"
          placeholder="Enter IP for lookup"
          onChange={(e) => setLocationSearch(e.target.value)}
        />
        <button onClick={handleLocation}>search</button>
      </div>
    </div>
  );
};

export default SearchInput;
