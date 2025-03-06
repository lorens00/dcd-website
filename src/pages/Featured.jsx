import React from 'react';
import { Link } from 'react-router-dom';

const Featured = () => {
  return (
    <div className="bg-gray-100 py-7 md:py-10 pb-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center pb-4">
          <h3 className="font-ostrichmedium font-bold text-4xl lg:text-6xl xl:ml-48 tracking-wide">
            Best Sellers
          </h3>
          <Link
            to="/menu"
            className="font-ostrichmedium font-semibold text-red-500 text-xl lg:text-2xl xl:mr-48 flex items-center gap-2 tracking-wide hover:underline hover:text-red-600"
          >
            MORE FLAVORS
            <img
              src="/assets/icons/right-arrow.svg"
              className="w-6 transition-transform duration-200 hover:translate-x-1"
              alt=""
            />
          </Link>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-8 gap-2 md:gap-3">
          {/* Big Card */}
          <div className="xl:col-span-3 sm:col-span-3 col-span-3 xl:col-start-2 relative rounded-lg overflow-hidden group">
            <div className="w-full aspect-[4/3]">
              <img
                src="assets/banner/featured.jpg"
                alt="Big Featured"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 lg:p-6 text-white transition-opacity duration-300 group-hover:from-black/80">
              <h2 className="text-lg md:text-2xl font-bold">Special Pizza</h2>
              <p className="text-xs md:text-sm">Delicious cheesy pizza with fresh toppings.</p>
            </div>
            <Link
              to="/menu"
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-white text-sm md:text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                More flavors <img src="/assets/icons/arrow2.svg" alt="arrow" className="w-4 h-4 md:w-5 md:h-5" />
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
                <div className="w-full aspect-[4/3]">
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-2 lg:p-4 text-white transition-opacity duration-300 group-hover:from-black/80">
                  <h3 className="text-base md:text-lg font-bold">{item.name}</h3>
                  <p className="text-sm md:text-sm">{item.price}</p>
                </div>
                <Link
                  to="/menu"
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-white md:text-base lg::text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                    More flavors <img src="/assets/icons/arrow2.svg" alt="arrow" className="w-4 h-4 lg:w-5 lg:h-5" />
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
