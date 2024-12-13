import React from 'react';

const ProductCard = ({ imageUrl, heading, subheading, altText, heightClass }) => {
  return (
    <div className={`border rounded-lg overflow-hidden bg-white shadow-md ${heightClass}`}>
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-44 object-cover" /* Adjusted image height */
      />
      <div className="p-4">
        <h4 className="font-bold text-lg text-center pb-2 leading-tight truncate">{heading}</h4> {/* Reduced line height */}
        <p className="text-gray-600 text-sm text-center pb-2 mt-1 leading-snug truncate">{subheading}</p> {/* Reduced margin and line height */}
        <div className="mt-2 text-center">
          <button className="outline outline-red-700 outline-1 text-red-700 hover:bg-red-800 hover:text-white text-sm px-4 py-2 rounded hover:bg-red-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
