import React, { useState } from 'react';
import { locations } from '../data/location';
import FooterCredits from '../components/FooterCredits'; 

const Location = () => {
  const [mapVisibility, setMapVisibility] = useState({});

  const toggleMap = (id) => {
    setMapVisibility((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="bg-gray-50 py-6">
      <div className="container mx-auto px-4 mb-36">
        <h2 className="font-allura font-extrabold text-4xl md:text-5xl lg:text-6xl text-center md:text-start lg:py-4 text-red-800">Our Store Locations</h2>

        <ul>
          {locations.map((location) => (
            <li key={location.id} className="bg-white p-4 mb-4 rounded shadow-md">
              <div className="flex flex-col mb-2 md:mb-4">
                <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">{location.name}</h3>

                <div className="mt-2 md:mt-4">
                  <h4 className="font-semibold">Address:</h4>

                  {/* Location Section */}
                  <div className="flex items-center mt-2">
                    <img src="/assets/location.svg" className="w-5 mr-2" alt="Location Icon" />
                    <p className='text-sm md:text-base'>{location.address}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold">Contact:</h4>

                  {/* Contact Section */}
                  <div className="flex items-center mt-2">
                    <img src="/assets/phone2.svg" alt="Phone Icon" className="w-6 h-6 mr-2" />
                    <p className=" text-sm md:text-base">{location.contact}</p>
                  </div>

                  {/* Facebook Section */}
                  <div className="flex items-center mt-2">
                    <img src="/assets/facebook2.svg" alt="Facebook Logo" className="w-6 mr-2" />
                    <a
                      href={location.facebookLink}
                      className=" underline font-semibold text-sm md:text-base"
                      target='_blank'
                    >
                      {location.facebook}
                    </a>
                  </div>
                </div>
              </div>

              <button
                onClick={() => toggleMap(location.id)}
                className="text-red-700 mb-4 font-semibold"
              >
                {mapVisibility[location.id] ? "Hide Map" : "Show Map"}
              </button>

              {mapVisibility[location.id] && location.mapLink && (
                <div className="h-64 mb-4">
                  <iframe
                    src={location.mapLink}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen="true"
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
  );
};

export default Location;
