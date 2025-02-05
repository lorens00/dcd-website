import React, { useState } from "react";
import { locations } from "../data/location";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === "") {
      setFilteredResults([]);
      return;
    }

    // Filter locations based on the search term
    const results = locations.filter((location) =>
      location.name.toLowerCase().includes(term) ||
      location.address.toLowerCase().includes(term) ||
      location.contact.includes(term) ||
      location.facebook.toLowerCase().includes(term)
    );

    setFilteredResults(results);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search Branch..."
        className="w-5/6 p-2 border rounded-md"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="mt-4">
        {filteredResults.length > 0 &&
          filteredResults.map((location) => (
            <div key={location.id} className="p-4 bg-white mb-4 rounded shadow-md">
              <h2 className="text-lg font-semibold">{location.name}</h2>
              <p>{location.address}</p>
              <p>Contact: {location.contact}</p>
              <a
                href={location.facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-700"
              >
                {location.facebook}
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchBar;
