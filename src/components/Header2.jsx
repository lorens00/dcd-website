import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

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

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div
      className={`absolute top-0 left-0 right-0 p-4 md:p-5 ${isVisible ? "" : "hidden"} bg-transparent`}
    >
      <a href="#" onClick={handleClick} className="flex justify-center w-auto mx-auto">
        <img
          className="w-40 md:w-48"
          src="/assets/icons/logo.png"
          alt="Logo"
        />
      </a>
    </div>
  );
};

export default Header;
