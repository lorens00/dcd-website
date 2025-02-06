import React, { useState, useEffect } from "react";
import { products } from "../data/products";
import FooterCredits from "../components/FooterCredits";
import LoadingCard from "../components/LoadingCard";
import Header2 from "../components/Header2";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [activeProduct, setActiveProduct] = useState(null);

  const filteredProducts = () => {
    return activeCategory === "all"
      ? [...products.pizza, ...products.merch]
      : products[activeCategory];
  };

  const handleCategoryChange = (category) => {
    setLoading(true);
    setActiveCategory(category);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, [activeCategory]);

  const toggleActiveProduct = (id) => {
    setActiveProduct(activeProduct === id ? null : id);
  };

  return (
    <div className="overflow-hidden min-h-screen bg-gray-100">
      <div className="mb-24 md:pb-10">
        <Header2 />
      </div>
      <div className="p-4 mt-2">
        <div className="flex flex-col items-center pt-8 lg:pt-14">
          <h2 className="font-allura text-4xl lg:text-5xl xl:text-6xl font-extrabold pb-6 md:pb-8 text-center text-red-700">
            Made for You
          </h2>
          <div className="container mx-auto px-4 mb-6 lg:px-32">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 md:gap-6">
                {["all", "pizza", "merch"].map((category) => (
                  <button
                    key={category}
                    className={`text-sm md:text-lg font-semibold px-4 py-2 rounded-full transition duration-300 ${
                      activeCategory === category
                        ? "bg-red-700 text-white"
                        : "text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
              <button
                className="font-allura flex items-center text-base md:text-lg xl:text-2xl font-semibold px-4 py-2 rounded-full bg-yellow-400 hover:bg-yellow-500 transition duration-300"
                onClick={() => (window.location.href = "/store")}
              >
                Shop
                <img src="/assets/icons/arrow.svg" className="w-6 px-1" alt="" />
              </button>
            </div>
          </div>
          <div className="container mx-auto lg:px-20 flex justify-center">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-24 lg:pb-56">
                {[...Array(4)].map((_, index) => (
                  <LoadingCard key={index} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-24 lg:pb-56">
                {filteredProducts().map((product) => (
                  <div
                    key={product.id}
                    className="relative flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 max-w-xs w-full"
                    onClick={() => toggleActiveProduct(product.id)}
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-72 object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ${
                        activeProduct === product.id ? "opacity-100" : ""
                      }`}
                    >
                      <button
                        className="flex items-center gap-2 text-white font-semibold py-2 px-4 transition duration-300"
                        onClick={() => (window.location.href = "/store")}
                      >
                        Order Here
                        <img className="w-4" src="/assets/icons/arrow2.svg" alt="Arrow" />
                      </button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-black opacity-70 p-1 text-center">
                      <h3 className="text-base md:text-lg font-semibold text-white">{product.name}</h3>
                      {products.merch.some((item) => item.id === product.id) ? (
                        <h4 className="text-sm md:text-base font-semibold text-yellow-500">Coming Soon</h4>
                      ) : (
                        <h4 className="text-sm md:text-base font-semibold text-yellow-500">₱{product.price}.00 only</h4>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <FooterCredits />
      </div>
    </div>
  );
};

export default Menu;