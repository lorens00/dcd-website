import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import About from "./About";
import Featured from "./Featured";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";

export default function Home() {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between p-6 lg:p-10 mb-10">
        {/* Content Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mx-3 px-3">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
            A Better Pizza
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 lg:  pr-10">
            Enjoy our freshly baked pizzas made with the finest ingredients!
            Treat yourself to a delicious slice delivered to your home!
          </p>

          {/* Buttons Section */}
          <div className="flex space-x-4 justify-center lg:justify-start">
            <button className="bg-red-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-red-600 transition duration-300 text-sm sm:text-base">
              Order Now
            </button>
            <button className="outline outline-1 outline-red-700 text-red-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-red-700 hover:text-white transition duration-300 text-sm sm:text-base">
              Contact Us
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
          <img
            src="https://via.placeholder.com/400"
            alt="Pizza"
            className="w-10/12 rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="my-5">
        <About />
      </div>

      <motion.div
        className="my-10 lg:my-20"
        initial={{ opacity: 0, y: 100 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: .7, ease: "easeOut" }}
        viewport={{ once: true }} 
      >
        <Featured />
      </motion.div>

      <motion.div
      className="pt-3 pb-10 my-10 lg:my-2 px-2"
      initial={{ opacity: 0, y: 100 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: .7, ease: "easeOut" }}
      viewport={{ once: true }} 
      >
        <Testimonials />
      </motion.div>

      <motion.div
      className="py-8 px-1 my-12 lg:my-20 pb-14"
      initial={{ opacity: 0, y: 100 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: .7, ease: "easeOut" }}
      viewport={{ once: true }} 
      >
        <FAQ />
      </motion.div>

      
    </>
  );
}
