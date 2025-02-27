import React from 'react';
import { Link } from 'react-router-dom';

const Featured = () => {
  return (
    <div className="bg-gray-100 py-10 pb-10 ">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center pb-4">
          <h3 className="font-bold text-4xl">Best Sellers</h3>
          <Link to="/menu" className="text-red-500 hover:underline text-lg">
            VIEW ALL
          </Link>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-8 gap-2 md:gap-3">
          {/* Big Card */}
          <div className="xl:col-span-3 sm:col-span-3 col-span-3 xl:col-start-2 relative rounded-lg overflow-hidden">
            <img
              src="assets/banner/featured.jpg"
              alt="Big Featured"
              className="w-full sm:h-64 md:h-80 lg:h-fit xl:h-[61.5vh] sm:object-fill md:object-cover md:object-center lg:object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 text-white">
              <h2 className="text-xl sm:text-lg font-bold">Special Pizza</h2>
              <p className="text-sm">Delicious cheesy pizza with fresh toppings.</p>
            </div>
          </div>

          {/* Small Cards (Grid Layout) */}
          <div className="grid grid-cols-2 xl:grid-cols-2 gap-2 md:gap-3 col-span-3">
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
                  className="w-[35vh] h-56 md:h-64 md:w-[36vh] xl:h-[30vh] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-35 flex flex-col justify-end p-4 text-white">
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
