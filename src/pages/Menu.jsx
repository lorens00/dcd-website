import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/mockDatabase';
import FooterCredits from '../components/FooterCredits';

const Menu = () => {
  const [cartItems, setCartItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all'); // Default category is 'all'

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

  return (
    <div className="p-4 mt-2">
      {/* Main Content */}
      <div className="flex flex-col items-center pt-8 lg:pt-14">

        {/* Menu Heading */}
        <h2 className="text-2xl md:text-4xl font-bold pb-6 md:pb-8 text-center text-red-700">
          Made for You
        </h2>

        {/* Category Tabs */}
        <div className="flex gap-5 md:gap-6 mb-6">
          <button
            className={`text-base md:text-lg font-semibold px-4 py-2 rounded-full transition duration-300 ${activeCategory === 'all' ? 'bg-red-700 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setActiveCategory('all')}
          >
            All
          </button>
          <button
            className={`text-base md:text-lg font-semibold px-4 py-2 rounded-full transition duration-300 ${activeCategory === 'pizza' ? 'bg-red-700 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setActiveCategory('pizza')}
          >
            Pizza
          </button>
          <button
            className={`text-base md:text-lg font-semibold px-4 py-2 rounded-full transition duration-300 ${activeCategory === 'merch' ? 'bg-red-700 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setActiveCategory('merch')}
          >
            Merch
          </button>
        </div>


        {/* Product Cards Container */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-24 lg:pb-56 ${
            activeCategory === 'merch' && filteredProducts().length < 4 ? 'justify-items-center' : ''
          }`}
        >
          {filteredProducts().map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 relative"
            >
              {/* Product Image */}
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-72 object-cover"
              />
              
              {/* Product Details */}
              <div className="absolute bottom-0 left-0 right-0 bg-black opacity-70 p-1 text-center">
                <h3 className="text-base md:text-lg font-semibold text-white">{product.name}</h3>
                <h4 className="text-sm md:text-base font-semibold text-yellow-500">₱{product.price}.00</h4>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Footer Credits */}
      <FooterCredits />
    </div>


  );
};

export default Menu;


