import React from 'react';
import { products } from '../data/mockDatabase'; 
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom'; 

const Featured = () => {
  // Limit the number of products
  const featuredProducts = products.pizza.slice(0, 5);

  return (
    <div className="bg-gray-100 py-6">
      {/* Container for Header and Cards */}
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex justify-between items-center pb-4">
          <h3 className="font-bold text-2xl lg:text-3xl">Best Sellers</h3>
          <Link
            to="/menu"
            className="text-red-500 hover:underline mt-2 inline-block text-xs lg:text-lg"
          >
            VIEW ALL
          </Link>
        </div>

        {/* Cards Section */}
        <div className="overflow-x-auto pb-6 snap-x snap-mandatory no-scrollbar flex justify-start md:justify-center">
          {/* Adding a wrapper div to ensure the first card is visible on smaller screens */}
          <div className="flex items-center -space-x-2 md:space-x-2 lg:space-x-4">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`flex-shrink-0 snap-start w-56 sm:w-64 md:w-56`}
              >
                <ProductCard
                  imageUrl={product.imageUrl || 'https://via.placeholder.com/300x200?text=No+Image'}
                  heading={product.name || 'Unnamed Product'}
                  subheading={product.description || 'No description available'}
                  price={`₱${product.price.toFixed(2)}`}
                  altText={product.name || 'Product Image'}
                  heightClass="h-60" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
