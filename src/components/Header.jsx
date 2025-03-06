import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 z-50 p-5 ${
        isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      } transition-opacity duration-200 bg-transparent`}
    >
      <a href="/" className={`${isVisible ? "pointer-events-auto" : "pointer-events-none"}`}>
        <img
          className="w-40 md:w-52 lg:w-60 mx-auto"
          src="/assets/icons/logo-white.png"
          alt="Logo"
        />
      </a>
    </motion.div>
  );
};

export default Header;
