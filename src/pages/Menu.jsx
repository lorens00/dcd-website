import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import FooterCredits from '../components/FooterCredits';
import LoadingCard from '../components/LoadingCard'; 
import Header2 from '../components/Header2';

const Menu = () => {
  const [cartItems, setCartItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all'); // Default category is 'all'
  const [loadingImages, setLoadingImages] = useState(true); // State to track image loading status

  // Handle adding items to the cart
  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Filter products based on active category
  const filteredProducts = () => {
    if (activeCategory === 'all') {
      // Combine all categories into a single array
      return [
        ...products.pizza,
        ...products.merch,
      ];
    }
    // Return products from the selected category
    return products[activeCategory];
  };

  // Handle image load event to stop showing the loading cards
  const handleImageLoad = () => {
    setLoadingImages(false); // Image has loaded, hide the loading cards
  };

  return (

    <>
      <div className="mb-24 md:pb-10">
        <Header2 />
      </div>

      <div className="p-4 mt-2">
      
      {/* Main Content */}
      <div className="flex flex-col items-center pt-8 lg:pt-14">

        {/* Menu Heading */}
        <h2 className="font-allura text-4xl lg:text-5xl xl:text-6xl font-extrabold pb-6 md:pb-8 text-center text-red-700">
          Made for You
        </h2>

        {/* Category Tabs with "Go to Shop" Button */}
        <div className="container mx-auto px-4 mb-6 lg:px-32">
          <div className="flex justify-between items-center">
            {/* Category Buttons */}
            <div className="flex gap-2 md:gap-6">
              <button
                className={`text-sm md:text-lg font-semibold px-4 py-2 rounded-full transition duration-300 ${activeCategory === 'all' ? 'bg-red-700 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
                onClick={() => setActiveCategory('all')}
              >
                All
              </button>
              <button
                className={`text-sm md:text-lg font-semibold px-4 py-2 rounded-full transition duration-300 ${activeCategory === 'pizza' ? 'bg-red-700 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
                onClick={() => setActiveCategory('pizza')}
              >
                Pizza
              </button>
              <button
                className={`text-sm md:text-lg font-semibold px-4 py-2 rounded-full transition duration-300 ${activeCategory === 'merch' ? 'bg-red-700 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
                onClick={() => setActiveCategory('merch')}
              >
                Merch
              </button>
            </div>

            {/* Go to Shop Button */}
            <button
              className="font-allura flex items-center text-base md:text-lg xl:text-2xl font-semibold px-4 py-2 rounded-full bg-yellow-400 hover:bg-yellow-500 transition duration-300"
              onClick={() => window.location.href = '/store'}
            >
              Shop 
              <img src="/assets/arrow.svg" className="w-6 px-1" alt="" />
            </button>
          </div>
        </div>

        {/* Product Cards Container */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-24 lg:pb-56 ${
            activeCategory === 'merch' && filteredProducts().length < 4 ? 'justify-items-center' : ''
          }`}
        >
          {filteredProducts().map((product) => (
            <div key={product.id} className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 relative">
              {/* Product Image */}
              {loadingImages && <LoadingCard />} {/* Show LoadingCard while images are loading */}
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-72 object-cover"
                onLoad={handleImageLoad} // Image loaded, call this function
                style={loadingImages ? { display: 'none' } : {}} // Hide image while loading
              />
              
              {/* Product Details */}
              {!loadingImages && (
                <div className="absolute bottom-0 left-0 right-0 bg-black opacity-70 p-1 text-center">
                  <h3 className="text-base md:text-lg font-semibold text-white">{product.name}</h3>
                  <h4 className="text-sm md:text-base font-semibold text-yellow-500">₱{product.price}.00 only</h4>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* Footer Credits */}
      <FooterCredits />
    </div>
    </>
    
  );
};

export default Menu;
