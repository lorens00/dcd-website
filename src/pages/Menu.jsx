import React, { useState, useEffect } from "react";
import { products } from "../data/products";
import FooterCredits from "../components/FooterCredits";
import LoadingCard from "../components/LoadingCard";
import Header2 from "../components/Header2";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [cachedProducts, setCachedProducts] = useState(null);
  const navigate = useNavigate();

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
    return activeCategory === "all"
      ? [...cachedProducts.pizza, ...cachedProducts.chicken, ...cachedProducts.pasta]
      : cachedProducts[activeCategory] || [];
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="mb-24 md:pb-10 bg-yellow-300">
        <Header2 />
      </div>

      {/* Sticky Section (Title + Categories) */}
      <div className="sticky top-0 z-20 bg-white shadow-md max-w-full">
        <div className="p-4">
          <div className="flex flex-col items-center pt-5">
            <h2 className="font-ostrichmedium font-bold text-4xl md:text-5xl lg:text-6xl pb-3 md:pb-6 text-center text-red-700">
              Made for You
            </h2>
            <div className="container mx-auto px-4 sm:px-6 lg:px-20">
              <div className="flex justify-center">
                <div className="flex gap-3 md:gap-6 flex-wrap justify-center">
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
      </div>

      {/* Main Content */}
      <div className="flex-grow">
        {/* Product Grid */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-20 flex justify-center">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-24 lg:pb-56">
              {[...Array(12)].map((_, index) => (
                <LoadingCard key={index} />
              ))}
            </div>
          ) : filteredProducts().length === 0 ? (
            <div className="flex flex-col items-center justify-center min-h-[50vh] pb-24 lg:pb-56">
              <img
                src="/assets/banner/waiting.svg"
                alt="Coming Soon"
                className="w-72 object-contain"
              />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-600 mt-4">
                Coming Soon...
              </h2>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-24 lg:pb-56">
              {filteredProducts().map((product) => (
                <div
                  key={product.id}
                  className="relative flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden max-w-xs w-full group"
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 text-center">
                    <h3 className="text-base md:text-lg font-semibold text-white">{product.name}</h3>
                    <h4 className="text-sm md:text-base font-semibold text-yellow-500">
                      ₱{product.price}.00 only
                    </h4>
                  </div>
                  <button
                    onClick={() => navigate("/store")}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm lg:text-base font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Order Here
                    <img src="/assets/icons/arrow2.svg" alt="Arrow" className="ml-2 w-4 lg:w-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <FooterCredits />
    </div>
  );
};

export default Menu;

