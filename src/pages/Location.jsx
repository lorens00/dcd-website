import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import { locations } from '../data/location';
import FooterCredits from '../components/FooterCredits';
import Header from '../components/Header';

const SearchBar = ({ onSearch, toggleFilter, isFilterOpen }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="pt-5 pb-5 md:pt-2 md:pb-6 flex justify-center items-center relative px-8">
      {/* Search Input Wrapper */}
      <div className="flex items-center w-6/7 lg:w-1/3 max-w-full border border-gray-300 rounded-full shadow-sm px-1 md:px-4 py-1 md:py-2 bg-white">
        <div className="relative flex-grow">
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search nearby store"
            className="w-full pl-8 pr-6 border-none focus:outline-none text-sm md:text-base bg-white"
          />
          <img
            src="/assets/icons/search.svg"
            alt="Search Icon"
            className="absolute left-1 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />
        </div>
        {/* Animated Filter/Close Icon */}
        <motion.img
          src={isFilterOpen ? '/assets/icons/close.svg' : '/assets/icons/filter.svg'}
          className="w-6 md:w-8 cursor-pointer mr-3"
          alt="Filter Icon"
          onClick={toggleFilter}
          animate={{ rotate: isFilterOpen ? 180 : 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
};

const Location = () => {
  const [mapVisibility, setMapVisibility] = useState({});
  const [filteredLocations, setFilteredLocations] = useState(locations);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleMap = (id) => {
    setMapVisibility((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleSearch = (query) => {
    if (!query) {
      setFilteredLocations(locations);
      return;
    }
    const filtered = locations.filter((location) =>
      location.name.toLowerCase().includes(query.toLowerCase()) ||
      location.address.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredLocations(filtered);
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-full z-50">
        <Header className="bg-transparent" />
      </div>

      <div className="bg-red-800 py-6 overflow-x-hidden pt-28 md:pt-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-36 max-w-7xl">
          <h2 className="font-ostrichmedium tracking-wide font-extrabold text-4xl md:text-5xl lg:text-6xl text-center lg:py-4 text-white pt-12 md:pb-4">
            Find a Branch Near You!
          </h2>
          <SearchBar onSearch={handleSearch} toggleFilter={toggleFilter} isFilterOpen={isFilterOpen} />

          {/* Animated Filter List */}
          <motion.ul
            className="px-8 text-base md:text-xl text-white text-center flex flex-wrap justify-center gap-3 lg:gap-7 pb-2 md:pt-0"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isFilterOpen ? 1 : 0, height: isFilterOpen ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            {['Pampanga', 'Tarlac', 'Zambales', 'Bataan', 'Bulacan'].map((location) => (
              <li
                key={location}
                className="cursor-pointer hover:underline px-2"
                onClick={() => handleSearch(location)}
              >
                {location}
              </li>
            ))}
          </motion.ul>

          <ul className="space-y-4">
            {filteredLocations.map((location) => (
              <li key={location.id} className="bg-slate-50 p-4 mb-4 rounded shadow-md mx-4 sm:mx-6 lg:mx-8">
                <div className="flex flex-col mb-2 md:mb-4">
                  <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">{location.name}</h3>
                  <div className="mt-2 md:mt-4 lg:pl-2">
                    <h4 className="font-medium">Contact:</h4>
                    <div className="flex items-center mt-2">
                      <img src="/assets/icons/phone2.svg" alt="Phone Icon" className="w-6 h-6 mr-2" />
                      <p className="text-sm md:text-base">{location.contact}</p>
                    </div>
                    <div className="flex items-center mt-2">
                      <img src="/assets/icons/facebook2.svg" alt="Facebook Logo" className="w-6 mr-2" />
                      <a
                        href={location.facebookLink}
                        className="font-medium text-sm md:text-base"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {location.facebook}
                      </a>
                    </div>
                    <div className="mt-2 md:mt-4 lg:pl-2">
                      <h4 className="font-medium">Address:</h4>
                      <div className="flex items-center mt-2">
                        <img src="/assets/icons/location.svg" className="w-5 mr-2" alt="Location Icon" />
                        <p className="text-sm md:text-base">{location.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button onClick={() => toggleMap(location.id)} className="text-red-700 mb-4 font-semibold">
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
