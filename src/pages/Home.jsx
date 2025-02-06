import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import About from "./About";
import Featured from "./Featured";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
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
        <div className="container relative z-10 text-white max-w-2xl mx-auto text-center lg:text-left lg:ml-16 xl:ml-20 md:pr-8">
          <h1 className="font-allura text-5xl md:text-7xl xl:text-8xl font-bold ">
            A Better Pizza
          </h1>
          <p className="text-base lg:text-xl sm:text-lg mb-6 text-gray-50 font-light px-4 md:px-0 py-0.5">
            Enjoy our freshly baked pizzas and unique merch, crafted with the
            finest ingredients and styles! Treat yourself to a delicious slice
            or shop for exclusive items delivered right to your door!
          </p>

          {/* Buttons Section */}
          <div className="flex justify-center lg:justify-start space-x-4">
            <a href="/store">
              <button className="bg-yellow-400 text-black px-5 lg:px-7 py-2.5 lg:py-3.5 rounded-lg hover:bg-yellow-500 transition duration-300 text-sm sm:text-base lg:font-semibold">
                Order Now
              </button>
            </a>
            <a href="/contact">
              <button className="outline outline-1 outline-yellow-400 text-yellow-400 px-5 lg:px-7 py-2.5 lg:py-3.5 lg:font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition duration-300 text-sm sm:text-base">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="my-5">
        <About />
      </div>

      <motion.div 
      className="pt-3 pb-8 my-8 lg:my-2 px-2"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      >
        <Featured />
      </motion.div>

      <motion.div
        className="pt-1 pb-10 my-10 lg:my-2 px-2"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Testimonials />
      </motion.div>

      <Footer />
    </>
  );
}
