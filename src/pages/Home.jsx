import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import About from "./About";
import Featured from "./Featured";
import Testimonials from "./Testimonials";
import FAQs from "../components/FAQs";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <div className="bg-white flex flex-col-reverse lg:flex-row items-center justify-between p-6 lg:p-10 mb-10">
        {/* Content Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mx-3 px-3">
          <h1 className="font-allura text-5xl md:text-7xl xl:text-8xl font-bold text-gray-800">
            A Better Pizza
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 lg:px-5">
             Enjoy our freshly baked pizzas and unique merch, crafted with the finest ingredients and styles! Treat yourself to a delicious slice or shop for exclusive items delivered right to your door!
          </p>

          {/* Buttons Section */}
          <div className="flex space-x-4 justify-center lg:justify-start px-5" >
            <a href="/store"><button className="bg-red-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-red-600 transition duration-300 text-sm sm:text-base">
              Order Now
            </button></a>
            
            <a href="/contact"><button className="outline outline-1 outline-red-700 text-red-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-red-700 hover:text-white transition duration-300 text-sm sm:text-base">
              Contact Us
            </button></a>
            
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

      <div className="pt-3 pb-8 my-8 lg:my-2 px-2">
        <Featured />
      </div>

      <motion.div
      className="pt-3 pb-10 my-10 lg:my-2 px-2"
      initial={{ opacity: 0, y: 100 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }} 
      >
        <Testimonials />
      </motion.div>

      <motion.div
      className="py-8 px-1 my-12 lg:my-20 pb-14"
      initial={{ opacity: 0, y: 100 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }} 
      >
        <FAQs />
      </motion.div>

      <Footer />

      
    </>
  );
}
