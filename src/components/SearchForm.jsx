import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className=" bg-white text-blue-500 flex-grow px-4 py-3 rounded-l-lg border-2 border-blue-300 focus:outline-none focus:border-blue-500 text-white-700"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-r-lg transition-colors duration-300"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;