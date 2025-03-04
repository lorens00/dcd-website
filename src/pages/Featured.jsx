import React from 'react';
import { Link } from 'react-router-dom';

const Featured = () => {
  return (
    <div className="bg-gray-100 py-10 pb-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center pb-4">
          <h3 className="font-ostrichmedium font-bold text-6xl ml-48 tracking-wide">Best Sellers</h3>
          <Link to="/menu" className="font-ostrichmedium font-semibold text-red-500 text-2xl mr-48 flex items-center gap-2 tracking-wide hover:underline hover:text-red-600">
            MORE FLAVORS
            <img src="/assets/icons/right-arrow.svg" className="w-6 transition-transform duration-200 hover:translate-x-1" alt="" />
          </Link>
        </div>



        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-8 gap-2 md:gap-3">
          {/* Big Card */}
          <div className="xl:col-span-3 sm:col-span-3 col-span-3 xl:col-start-2 relative rounded-lg overflow-hidden group">
            <img
              src="assets/banner/featured.jpg"
              alt="Big Featured"
              className="w-full sm:h-64 md:h-80 lg:h-fit xl:h-[61.5vh] sm:object-fill md:object-cover md:object-center lg:object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col justify-end p-6 text-white transition-opacity duration-300 group-hover:bg-opacity-50">
              <h2 className="text-xl sm:text-lg font-bold">Special Pizza</h2>
              <p className="text-sm">Delicious cheesy pizza with fresh toppings.</p>
            </div>
            {/* Hover Effect */}
            <Link to="/menu" className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
              <div className="flex items-center gap-2 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                More flavors <img src="/assets/icons/arrow2.svg" alt="arrow" className="w-5 h-5" />
              </div>
            </Link>
          </div>

          {/* Small Cards (Grid Layout) */}
          <div className="grid grid-cols-2 xl:grid-cols-2 gap-2 md:gap-3 col-span-3">
            {[
              { name: "Hamzarella", price: "₱359.00", src: "/assets/PizzaFlavor/Hamzarella.jpg" },
              { name: "Kaniyaki", price: "₱389.00", src: "/assets/PizzaFlavor/Kaniyaki.jpg" },
              { name: "Pesto", price: "₱359.00", src: "/assets/PizzaFlavor/Pesto.jpg" },
              { name: "Garlic Seafood", price: "₱439.00", src: "/assets/PizzaFlavor/Garlic Seafood.jpg" }
            ].map((item, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden group">
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-[35vh] h-56 md:h-64 md:w-[36vh] xl:h-[30vh] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col justify-end p-4 text-white transition-opacity duration-300 group-hover:bg-opacity-50">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-sm">{item.price}</p>
                </div>
                {/* Hover Effect */}
                <Link to="/menu" className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
                  <div className="flex items-center gap-2 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    More flavors <img src="/assets/icons/arrow2.svg" alt="arrow" className="w-5 h-5" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
