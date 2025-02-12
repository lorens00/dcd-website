import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Bottom floating navbar */}
      <div className="fixed bottom-10 md:bottom-14 left-1/2 transform -translate-x-1/2 w-[90%] max-w-lg flex items-center justify-center gap-1 z-50">
        {/* Hamburger Button */}
        <button
          className="p-4 md:p-5 bg-black bg-opacity-70 text-white rounded-2xl shadow-xl hover:bg-opacity-80 transition duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>

        {/* Explore Menu Button */}
        <a
          href="/menu"
          className="px-10 md:px-28 py-4 md:py-4 bg-black bg-opacity-70 text-white sm:text-sm md:text-lg font-semibold rounded-2xl shadow-xl hover:bg-red-700 transition duration-300"
        >
          Explore Products
        </a>

        {/* Store Button */}
        <a
          href="/store"
          className="p-3.5 md:p-4 bg-black bg-opacity-70 text-white rounded-2xl shadow-xl hover:bg-opacity-80 transition duration-300"
        >
          <img src="/assets/icons/storeLogo2.svg" className="w-7" alt="" />
        </a>
      </div>

      {/* Hamburger menu content */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="inset-x-0 fixed bottom-28 md:bottom-32 flex items-center justify-center w-[70%] h-40 md:h-48 max-w-lg mx-auto bg-black bg-opacity-90 text-white rounded-xl shadow-xl p-4 z-50"
        >
          <div className="flex flex-col gap-2 w-11/12">
            {/* Home Item */}
            <a
              href="/"
              className="p-2 hover:bg-red-700 hover:scale-105 transform transition-all duration-300 rounded-xl border border-white flex items-center gap-2 justify-center w-full"
            >
              <img src="/assets/icons/homeLogo.svg" className="w-6" alt="Home" />
              <span className="text-sm md:text-lg">Home</span>
            </a>

            {/* Store Locations Item */}
            <a
              href="/FAQ"
              className="p-2 hover:bg-red-700 hover:scale-105 transform transition-all duration-300 rounded-xl border border-white flex items-center gap-2 justify-center w-full"
            >
              <img src="/assets/icons/question.svg" className="w-6" alt="FAQs" />
              <span className="text-sm md:text-lg">FAQs</span>
            </a>

            {/* Contact Us Item */}
            <a
              href="/contact"
              className="p-2 hover:bg-red-700 hover:scale-105 transform transition-all duration-300 rounded-xl border border-white flex items-center gap-2 justify-center w-full"
            >
              <img src="/assets/icons/phoneLogo.svg" className="w-5" alt="Contact Us" />
              <span className="text-sm md:text-lg">Contact</span>
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
}
