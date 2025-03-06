import React, { useState, useEffect } from "react";
import About from "./About";
import Featured from "./Featured";
import Footer from "./Footer";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import AppNavbar from "../components/AppNavbar/AppNavbar";
import { FaTshirt } from "react-icons/fa"; // Import the clothes icon

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const carouselSection = document.getElementById("carousel-section");
      if (carouselSection) {
        const carouselTop = carouselSection.getBoundingClientRect().top;
        setShowNavbar(carouselTop <= window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Conditionally show Navbar */}
      {showNavbar && <AppNavbar />}

      <div>
        <Header />
      </div>
      <div
        className="bg-cover bg-right bg-no-repeat flex items-center p-6 lg:p-10 mb-10 h-[85vh] md:h-[90vh] lg:h-[100vh] relative"
        style={{ backgroundImage: "url('/assets/banner/hero.png')" }}
      >
        {/* Overlay */}
        <div className="bg-black bg-opacity-40 absolute top-0 left-0 w-full h-full"></div>

        {/* Content Section */}
        <div className="container relative z-10 text-white max-w-2xl mx-auto text-center lg:text-left lg:ml-16 xl:ml-20 md:pr-0">
          <h1 className="font-ostrichbold text-6xl md:text-7xl xl:text-8xl">
            A Better Pizza
          </h1>
          <p className="text-base lg:text-xl sm:text-lg mb-6 text-gray-50 font-light px-4 md:px-0 py-0.5">
            Enjoy our freshly baked pizzas and unique merch, crafted with the
            finest ingredients and styles! Treat yourself to a delicious slice
            or shop for exclusive items delivered right to your door!
          </p>

          {/* Buttons Section */}
          <div className="flex justify-center lg:justify-start space-x-4">
            {/* Replace the buttons with the AppNavbar layout */}
            <div className="flex items-center gap-1">
              {/* Merch Button (Replaces hamburger menu) */}
              <a
                href="/merch"
                className="p-4 py-5 md:p-6 xl:py-6.5 bg-black bg-opacity-70 text-white rounded-2xl shadow-xl hover:bg-opacity-80 transition duration-300"
              >
                <FaTshirt className="w-6" />
              </a>

              {/* Explore Products Button */}
              <a
                href="/menu"
                className="px-10 md:px-24 py-5 sm:py-4 md:py-5 xl:py-4.5  bg-black bg-opacity-70 text-white text-xs sm:text-sm md:text-base xl:text-lg font-semibold rounded-2xl shadow-xl hover:bg-red-700 transition duration-300"
              >
                Explore Products
              </a>

              {/* Store Button */}
              <a
                href="/store"
                className="p-4 md:p-5 bg-black bg-opacity-70 xl:py-6.5 text-white rounded-2xl shadow-xl hover:bg-opacity-80 transition duration-300"
              >
                <img src="/assets/icons/storeLogo2.svg" className="w-6" alt="Store" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Add an ID to the Carousel section */}
      <div id="carousel-section" className="pt-6 pb-8">
        <Carousel />
      </div>

      <div className="my-5">
        <About />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
