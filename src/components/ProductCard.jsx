import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const ProductCard = ({ imageUrls, heading, price, heightClass }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openPreview = (index) => {
    setCurrentIndex(index);
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? imageUrls.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === imageUrls.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white rounded-lg group overflow-hidden cursor-pointer relative z-40 shadow-lg hover:shadow-2xl transition-all duration-300 w-48 lg:w-52 mx-auto">
      {/* Image Section */}
      <div className={`overflow-hidden mx-auto ${heightClass}`} onClick={() => openPreview(0)}>
        <img
          src={imageUrls[0]}
          alt={heading}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Hover Text Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 w-full p-2 flex justify-center items-center group-hover:opacity-100 transition-opacity duration-300 opacity-100 lg:opacity-0">
        <div className="text-center">
          <h3 className="text-sm lg:text-base font-bold text-white">{heading}</h3>
          <h4 className="text-sm lg:text-base text-yellow-400 font-bold mt-1">{price}</h4>
        </div>
      </div>

      {/* Preview Modal */}
      {isPreviewOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={closePreview}
          >
            <FaTimes />
          </button>
          <button
            className="absolute left-5 text-white text-3xl"
            onClick={prevImage}
          >
            <FaChevronLeft />
          </button>
          <img src={imageUrls[currentIndex]} alt={heading} className="max-w-full max-h-[80vh] object-contain" />
          <button
            className="absolute right-5 text-white text-3xl"
            onClick={nextImage}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;