import React from "react";

const ProductCard = ({ imageUrl, heading, price, heightClass, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg group overflow-hidden cursor-pointer relative z-40 shadow-lg hover:shadow-2xl transition-all duration-300 w-48 lg:w-52 mx-auto">
      {/* Image Section */}
      <div className={`overflow-hidden mx-auto ${heightClass}`}>
        <img
          src={imageUrl}
          alt={heading}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Hover Text Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 w-full p-2 flex justify-center items-center group-hover:opacity-100 transition-opacity duration-300 opacity-100 lg:opacity-0">
        <div className="text-center">
          <h3 className="text-sm lg:text-base font-bold text-white">
            {heading}
          </h3>
          <h4 className="text-sm lg:text-base text-yellow-400 font-bold mt-1">
            {price}
          </h4>
        </div>
      </div>


    </div>
  );
};

export default ProductCard;
