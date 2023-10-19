// src/components/SearchBox.js
import React from 'react';

const SearchBox = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by username"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBox;
