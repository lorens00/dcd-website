import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Cart from './Cart';
import ProgressBar from '../components/ProgressBar';
import { products } from '../data/mockDatabase';
import StoreLocation from '../components/StoreLocation';
import FooterCredits from '../components/FooterCredits';

const Menu = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="p-4 mt-10">
      {/* Progress Bar */}
      <div className="mb-6">
        <ProgressBar />
      </div>

      <div className="py-5">
        <StoreLocation />
      </div>

      {/* Main Content */}
      <div className="flex flex-wrap pt-8 lg:pt-14">
        {/* Product Section */}
        <div className="w-full lg:w-2/3 lg:pl-28 py-5 md:py-8 pb-5">
          {/* Menu Heading */}
          <h2 className="text-2xl font-bold pb-6 text-center lg:text-start">
            Made for You
          </h2>

          {/* Product Cards Container */}
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center lg:justify-start pb-16 lg:pb-24">
            {products.map((product, index) => (
              <div
                key={index}
                className="w-40 md:w-1/4"
              >
                <ProductCard
                  imageUrl={product.imageUrl}
                  heading={product.name}
                  subheading={product.description}
                  price={product.price}
                  heightClass="h-64 md:h-80"
                  onAddToCart={() => handleAddToCart(product)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Cart Section */}
        <div className="w-full lg:w-1/3">
          {/* Cart Display */}
          <div className="hidden lg:block lg:pr-10">
            <Cart cartItems={cartItems} />
          </div>
        </div>
      </div>
      <FooterCredits />
    </div>
    
  );
};

export default Menu;
