import React, { useState } from 'react';

const StoreLocation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState('Select a Branch'); // Initial placeholder text

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle branch selection
  const handleSelectBranch = (branch) => {
    setSelectedBranch(branch); // Update the selected branch name
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative w-full sm:w-1/3 mx-auto"> {/* Make the container responsive */}
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="w-full px-5 py-1.5 rounded-md text-white text-sm font-semibold tracking-wide border-none outline-none bg-red-700 hover:bg-red-800 active:bg-red-600 flex items-center justify-between"
      >
        {/* Store Icon and Text */}
        <div className="flex items-center">
          <img src="/assets/storeLogo.svg" className='w-10 text-white inline-block px-1' alt="Store Logo" />
          <span className="ml-2">{selectedBranch}</span>
        </div>
        {/* Arrow Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-white" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute block shadow-lg bg-white py-2 px-2 z-[1000] min-w-full w-max rounded max-h-96 overflow-auto">
          <li className="py-2.5 px-4 hover:bg-gray-100 text-black text-sm cursor-pointer rounded" onClick={() => handleSelectBranch('Branch 1')}>Branch 1</li>
          <li className="py-2.5 px-4 hover:bg-gray-100 text-black text-sm cursor-pointer rounded" onClick={() => handleSelectBranch('Branch 2')}>Branch 2</li>
          <li className="py-2.5 px-4 hover:bg-gray-100 text-black text-sm cursor-pointer rounded" onClick={() => handleSelectBranch('Branch 3')}>Branch 3</li>
        </ul>
      )}
    </div>
  );
};

export default StoreLocation;
