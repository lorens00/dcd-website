import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TestimonialCard from "../components/Testimonials/TestimonialCard";
import testimonials from "../data/testimonials"; 

const Testimonials = () => {
  const cardsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState("next");
  const [shuffledTestimonials, setShuffledTestimonials] = useState([]);

  // Fisher-Yates Shuffle algorithm
  const shuffleArray = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap
    }
    return shuffled;
  };

  useEffect(() => {
    // Shuffle the testimonials when the component is first loaded
    const shuffled = shuffleArray(testimonials);
    setShuffledTestimonials(shuffled);
  }, []);

  const handlePrev = () => {
    setDirection("prev");
    setCurrentPage((prevPage) => (prevPage === 0 ? totalPages - 1 : prevPage - 1));
  };

  const handleNext = () => {
    setDirection("next");
    setCurrentPage((prevPage) => (prevPage === totalPages - 1 ? 0 : prevPage + 1));
  };

  const startIndex = currentPage * cardsPerPage;
  const currentTestimonials = shuffledTestimonials.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div className="mt-10">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-ostrichmedium text-4xl md:text-6xl font-bold tracking-wide">
            Don't Take It from Us
          </h2>
          <p className=" text-sm md:text-base text-gray-800 mt-3 pb-5 md:pb-7 leading-relaxed px-3">
            We value our customers and always aim to provide the best service. Here's what they have to say about us!
          </p>
        </div>

        {/* Sliding Animation for Testimonials */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 max-md:gap-10 max-md:justify-center mt-8 px-3 mx-2"
          key={currentPage}
          initial={{ x: direction === "next" ? "100%" : "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: direction === "next" ? "-100%" : "100%" }}
          transition={{ type: "tween", duration: 0.5 }}
        >
          {currentTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              image={testimonial.image}
              rating={testimonial.rating}
              text={testimonial.text}
              ratingTextSize="text-lg" // Customize rating text size here
            />
          ))}
        </motion.div>

        {/* Arrow Buttons */}
        <div className="flex justify-center mt-6 space-x-4">
          <motion.button
            onClick={handlePrev}
            className="outline outline-1 outline-red-500 p-2 rounded-full hover:bg-white hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </motion.button>

          <motion.button
            onClick={handleNext}
            className="bg-red-600 p-2 rounded-full hover:bg-red-700 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
