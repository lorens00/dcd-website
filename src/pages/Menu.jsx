import React, { useState, useEffect } from "react";
import { products } from "../data/products";
import FooterCredits from "../components/FooterCredits";
import LoadingCard from "../components/LoadingCard";
import Header2 from "../components/Header2";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [cachedProducts, setCachedProducts] = useState(null);

  useEffect(() => {
    if (!cachedProducts) {
      setLoading(true);
      setTimeout(() => {
        setCachedProducts({
          pizza: products.pizza || [],
          chicken: products.chicken || [],
          pasta: products.pasta || [],
        });
        setLoading(false);
      }, 3000);
    } else {
      setLoading(false);
    }
  }, [cachedProducts]);

  const filteredProducts = () => {
    if (!cachedProducts) return [];
    if (activeCategory === "all") {
      return [...cachedProducts.pizza, ...cachedProducts.chicken, ...cachedProducts.pasta];
    }
    return cachedProducts[activeCategory] || [];
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="mb-24 md:pb-10">
        <Header2 />
      </div>

      {/* Main Content (Takes Remaining Space) */}
      <div className="flex-grow">
        {/* Sticky Navigation */}
        <div className="p-4 mt-2 sticky top-0 bg-white z-10">
          <div className="flex flex-col items-center pt-5">
            <h2 className="font-allura text-4xl lg:text-5xl xl:text-6xl font-extrabold pb-6 md:pb-8 text-center text-red-700">
              Made for You
            </h2>
            <div className="container mx-auto px-2 mb-6 lg:px-32">
              <div className="flex justify-center items-center -mb-6">
                {/* Category Buttons (Centered) */}
                <div className="flex gap-3 md:gap-6 md:gap-8 flex-wrap justify-center">
                  {["all", "pizza", "chicken", "pasta"].map((category) => (
                    <button
                      key={category}
                      className={`text-sm md:text-lg font-semibold px-4 py-2 rounded-full transition duration-300 ${
                        activeCategory === category
                          ? "bg-red-700 text-white"
                          : "text-gray-700 hover:bg-gray-200"
                      }`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid or "Coming Soon" */}
        <div className="container mx-auto lg:px-20 flex justify-center">
          {loading ? (
            // Loading Animation
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-24 lg:pb-56">
              {[...Array(12)].map((_, index) => (
                <LoadingCard key={index} />
              ))}
            </div>
          ) : filteredProducts().length === 0 ? (
            // "Coming Soon" Full-Height Centered
            <div className="flex flex-col items-center justify-center min-h-[50vh] pb-24 lg:pb-56">
              <img
                src="/assets/icons/coming-soon.jfif"
                alt="Coming Soon"
                className="w-64 object-fill"
              />
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-600 mt-4">Coming Soon...</h2>
            </div>
          ) : (
            // Product List
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-24 lg:pb-56">
              {filteredProducts().map((product) => (
                <div
                  key={product.id}
                  className="relative flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 max-w-xs w-full"
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black opacity-70 p-1 text-center">
                    <h3 className="text-base md:text-lg font-semibold text-white">{product.name}</h3>
                    <h4 className="text-sm md:text-base font-semibold text-yellow-500 font-outfit">
                      ₱{product.price}.00 only
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer (Always at the Bottom) */}
      <FooterCredits />
    </div>
  );
};

export default Menu;
