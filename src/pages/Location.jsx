import React, { useState } from 'react';

const locations = [
  {
    id: 1,
    name: "Angeles City, Pampanga",
    lat: 14.5995,
    lng: 120.9842,
    address: "PH 123 LOT 456",
    contact: "(123) 456-7890"
  },
  {
    id: 2,
    name: "Mabalacat City, Pampanga",
    lat: 14.6359,
    lng: 120.9822,
    address: "PH 123 LOT 456",
    contact: "(987) 654-3210"
  },
  {
    id: 3,
    name: "Balanga Bataan",
    lat: 14.6021,
    lng: 120.5412,
    address: "PH 123 LOT 456",
    contact: "none"
  },
  
];

const Location = () => {
  const [mapVisibility, setMapVisibility] = useState({});

  const toggleMap = (id) => {
    setMapVisibility((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-2xl lg:text-3xl text-center pb-4 text-red-800">Our Store Locations</h2>

        <ul>
          {locations.map((location) => (
            <li key={location.id} className="bg-white p-4 mb-4 rounded shadow-md">
              <div className="flex items-center mb-4">
                <div>
                  <h3 className="font-semibold text-xl md:text-2xl">{location.name}</h3>
                  <div className='py-2'>
                    <h4 className='font-semibold'> Address:</h4>
                    <p>{location.address}</p>
                  </div>
                  <div>
                    <h4 className='font-semibold'>Contact:</h4>
                    <p>{location.contact}</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => toggleMap(location.id)}
                className="text-red-700 mb-4 font-semibold"
              >
                {mapVisibility[location.id] ? 'Hide Map' : 'Show Map'}
              </button>

              {mapVisibility[location.id] && (
                <div className="h-64 bg-gray-300 mb-4">
                  {/* Map content can be integrated here */}
                  <h4 className="text-center text-xl font-semibold">Map for {location.name}</h4>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Location;
