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
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500 bg-transparent`}
    >
      <a href="/">
        <img
          className="w-36 md:w-48 lg:w-56 mx-auto"
          src="/assets/icons/logo-white.png"
          alt="Logo"
        />
      </a>
    </motion.div>
  );
};

export default Header;
