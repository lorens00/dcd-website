import React from 'react';

const ProductCard = ({ imageUrl, heading, subheading, altText, heightClass, price }) => {
  return (
    <div className={`border rounded-lg overflow-hidden bg-white shadow-md ${heightClass}`}>
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-36 md:h-48 object-cover" /* Adjusted image height */
      />
      <div className="p-4">
        <h4 className="font-bold text-sm md:text-lg text-center md:pb-2 md:leading-3 truncate">{heading}</h4>
        <p className="text-gray-600 text-xs md:text-sm text-center pb-1 md:pb-2 mt-1 leading-snug truncate">{subheading}</p> 
        
        {/* Price and Icon Section */}
        <div className="mt-2 flex justify-between items-center">
          <span className="text-red-700 font-semibold text-xs md:text-base md:pl-3">₱{price}.00 only</span>
          <button className="md:px-1 py-1 md:py-2 rounded hover:scale-105 md:mr-1">
            <img src="/assets/add-to-bag.svg" className="w-5 md:w-6" alt="Add to Bag" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
