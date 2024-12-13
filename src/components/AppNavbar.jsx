import React, { useState, useEffect } from 'react'; 
import { motion } from 'framer-motion'; 
import { FaHome, FaUtensils, FaPhoneAlt, FaShoppingCart, FaUser } from 'react-icons/fa';

export default function AppNavbar() {
  const [isVisible, setIsVisible] = useState(true);

  // Scroll effect to show/hide logo
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsVisible(true); // Show logo at the top of the page
      } else {
        setIsVisible(false); // Hide logo when scrolled down
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Logo with scroll effect */}
      <motion.div
        className="text-center my-5"
        initial={{ opacity: 0 }} 
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <a href="/">
          <img
            className="w-36 md:w-40 mx-auto bg-transparent"
            src="/assets/logo.png"
            alt="Logo"
          />
        </a>
      </motion.div>

      {/* Bottom floating navbar with gray background and white text */}
      <div className="fixed bottom-8 md:bottom-14 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md flex justify-around items-center md:py-1 rounded-full bg-black bg-opacity-80 text-white shadow-xl z-50">
        <a
          href="/"
          className="flex flex-col items-center font-normal hover:text-red-500 p-2 rounded-lg transition-all duration-200 text-xs w-16 h-16 justify-center items-center hover:scale-90"
        >
          <FaHome className="mb-1 text-xl" />
          Home
        </a>
        <a
          href="/menu"
          className="flex flex-col items-center font-normal hover:text-red-500 p-2 rounded-lg transition-all duration-200 text-xs w-16 h-16 justify-center items-center hover:scale-90"
        >
          <FaUtensils className="mb-1 text-xl" />
          Menu
        </a>
        <a
          href="/contact"
          className="flex flex-col items-center font-normal hover:text-red-500 p-2 rounded-lg transition-all duration-200 text-xs w-16 h-16 justify-center items-center hover:scale-90"
        >
          <FaPhoneAlt className="mb-1 text-xl" />
          Contact
        </a>
        <a
          href="/cart"
          className="flex flex-col items-center font-normal hover:text-red-500 p-2 rounded-lg transition-all duration-200 text-xs w-16 h-16 justify-center items-center hover:scale-90"
        >
          <FaShoppingCart className="mb-1 text-xl" />
          Cart
        </a>
        <a
          href="/profile"
          className="flex flex-col items-center font-normal hover:text-red-500 p-2 rounded-lg transition-all duration-200 text-xs w-16 h-16 justify-center items-center hover:scale-90"
        >
          <FaUser className="mb-1 text-xl" />
          Profile
        </a>
      </div>


    </>
  );
}
