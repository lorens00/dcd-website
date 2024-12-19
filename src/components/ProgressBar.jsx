import React from 'react';

const ProgressBar = () => {
  return (
    <div className="flex flex-col max-w-2xl mx-auto mt-4 p-2">
      {/* Steps */}
      <div className="flex justify-around items-start text-center gap-3">
        {[
          { step: 1, label: 'Order', active: true },
          { step: 2, label: 'Checkout', active: false },
          { step: 3, label: 'Verify', active: false},
        ].map(({ step, label, active }) => (
          <div key={step} className="flex flex-col justify-center items-center">
            <div
              className={`${
                active ? 'bg-red-600 text-white' : 'bg-gray-300 text-gray-400'
              } w-7 h-7 font-bold text-xs rounded-full flex items-center justify-center`}
            >
              {step}
            </div>
            <p
              className={`${
                active ? 'text-red-900 font-semibold' : 'text-gray-300'
              } text-xs mt-1.5`}
            >
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="bg-gray-300 rounded-full w-full h-2 mt-4">
        <div className="w-1/3 h-full rounded-full bg-red-600 shadow-md flex items-center relative transition-all duration-300">
          <span className="absolute text-xs right-0.5 bg-white w-2 h-2 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
