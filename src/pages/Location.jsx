import React, { useState } from 'react';
import { locations } from '../data/location';
import FooterCredits from '../components/FooterCredits';
import Header2 from '../components/Header2';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className=" mb-3 md:mb-4 flex justify-center pt-3">
      <div className="relative w-2/3 lg:w-1/3 max-w-full">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search location..."
          className="w-full pl-10 pr-4 py-1.5 md:py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500"
        />
        <img
          src="/assets/icons/search.svg"
          alt="Search Icon"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
        />
      </div>
    </div>
  );
};

const Location = () => {
  const [mapVisibility, setMapVisibility] = useState({});
  const [filteredLocations, setFilteredLocations] = useState(locations);

  const toggleMap = (id) => {
    setMapVisibility((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleSearch = (query) => {
    if (!query) {
      setFilteredLocations(locations);
      return;
    }
    const filtered = locations.filter((location) =>
      location.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredLocations(filtered);
  };

  return (
    <>
      <div className="mb-24 md:pb-10">
        <Header2 />
      </div>
      <div className="bg-gray-50 py-6 overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-36 max-w-7xl">
          <h2 className="font-allura font-extrabold text-4xl md:text-5xl lg:text-6xl text-center lg:py-4 text-red-800">
            Our Store Locations
          </h2>
          <SearchBar onSearch={handleSearch} />
          <ul className="space-y-4">
            {filteredLocations.map((location) => (
              <li key={location.id} className="bg-white p-4 mb-4 rounded shadow-md mx-4 sm:mx-6 lg:mx-8">
                <div className="flex flex-col mb-2 md:mb-4">
                  <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">{location.name}</h3>
                  <div className="mt-4 lg:pl-2">
                    <h4 className="font-semibold">Contact:</h4>
                    <div className="flex items-center mt-2">
                      <img src="/assets/icons/phone2.svg" alt="Phone Icon" className="w-6 h-6 mr-2" />
                      <p className="text-sm md:text-base">{location.contact}</p>
                    </div>
                    <div className="flex items-center mt-2">
                      <img src="/assets/icons/facebook2.svg" alt="Facebook Logo" className="w-6 mr-2" />
                      <a
                        href={location.facebookLink}
                        className="underline font-semibold text-sm md:text-base"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {location.facebook}
                      </a>
                    </div>
                    <div className="mt-2 md:mt-4 lg:pl-2">
                      <h4 className="font-semibold">Address:</h4>
                      <div className="flex items-center mt-2">
                        <img src="/assets/icons/location.svg" className="w-5 mr-2" alt="Location Icon" />
                        <p className="text-sm md:text-base">{location.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => toggleMap(location.id)}
                  className="text-red-700 mb-4 font-semibold"
                >
                  {mapVisibility[location.id] ? 'Hide Map' : 'Show Map'}
                </button>
                {mapVisibility[location.id] && location.mapLink && (
                  <div className="h-64 mb-4">
                    <iframe
                      src={location.mapLink}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map of ${location.name}`}
                    ></iframe>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <FooterCredits />
      </div>
    </>
  );
};

export default Location;
