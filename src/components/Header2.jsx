import React, { useState, useEffect } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide the header when scrolling down
      setIsVisible(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`top-0 left-0 right-0 z-10 p-5 transition-all duration-200 ${
        isVisible ? "fixed opacity-100" : "fixed opacity-0 pointer-events-none"
      } bg-transparent`}
    >
      <a href="/" className={`${isVisible ? "pointer-events-auto" : "pointer-events-none"}`}>
        <img
          className="w-36 md:w-44 mx-auto"
          src="/assets/icons/logo.png"
          alt="Logo"
        />
      </a>
    </div>
  );
};

export default Header;
