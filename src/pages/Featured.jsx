import React from 'react';
import { products } from '../data/products'; 
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
          <h3 className="font-allura font-bold text-4xl lg:text-4xl xl:text-5xl lg:pl-16">Best Sellers</h3>
          <Link
            to="/menu"
            className="text-red-500 hover:underline mt-2 inline-block text-xs lg:text-lg lg:pr-16"
          >
            VIEW ALL
          </Link>
        </div>

        {/* Cards Section */}
        <div className="overflow-x-auto pb-6 snap-x snap-mandatory no-scrollbar flex justify-start -space-x-6 lg:-space-x-6 xl:justify-center">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="flex-shrink-0 snap-start w-56 sm:w-64 md:w-56 lg:w-64"
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
  );
};

export default Featured;
