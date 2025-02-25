import React from 'react';
import { Link } from 'react-router-dom';

const Featured = () => {
  return (
    <div className="bg-gray-100 py-10 ">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center pb-4">
          <h3 className="font-bold text-4xl">Best Sellers</h3>
          <Link to="/menu" className="text-red-500 hover:underline text-lg">
            VIEW ALL
          </Link>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Big Card */}
          <div className="lg:col-span-2 sm:col-span-2 col-span-2 relative rounded-lg overflow-hidden">
            <img
              src="assets/banner/featured.jpg"
              alt="Big Featured"
              className="w-full h-72 sm:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 text-white">
              <h2 className="text-xl sm:text-lg font-bold">Special Pizza</h2>
              <p className="text-sm">Delicious cheesy pizza with fresh toppings.</p>
            </div>
          </div>

          {/* Small Cards (Grid Layout) */}
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 col-span-2">
            {[
              { name: "All Meat", price: "₱359.00", src: "/assets/PizzaFlavor/AllMeat.jpg" },
              { name: "Kaniyaki", price: "₱389.00", src: "/assets/PizzaFlavor/Kaniyaki.jpg" },
              { name: "Pesto", price: "₱359.00", src: "/assets/PizzaFlavor/Pesto.jpg" },
              { name: "Garlic Seafood", price: "₱439.00", src: "/assets/PizzaFlavor/Garlic Seafood.jpg" }
            ].map((item, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden">
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-64 sm:h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-sm">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
