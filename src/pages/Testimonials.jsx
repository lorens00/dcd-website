import React, { useState } from "react";
import { motion } from "framer-motion";
import TestimonialCard from "../components/Testimonials/TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      image: "https://readymadeui.com/team-1.webp",
      rating: 4,
      text: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
    },
    {
      name: "Jane Smith",
      image: "https://readymadeui.com/team-2.webp",
      rating: 5,
      text: "Exceptional experience! The food quality was top-notch, and the service exceeded my expectations. Highly recommend it.",
    },
    {
      name: "Alex Johnson",
      image: "https://readymadeui.com/team-3.webp",
      rating: 4,
      text: "The ambiance and the food were excellent. The staff was professional and courteous. A memorable dining experience.",
    },
    {
      name: "Sam Brown",
      image: "https://readymadeui.com/team-4.webp",
      rating: 4,
      text: "Great experience! Everything was perfect from the food to the service. Will definitely be back.",
    },
    {
      name: "Emily White",
      image: "https://readymadeui.com/team-5.webp",
      rating: 5,
      text: "The best dining experience I've had in a while! The food was delicious, and the atmosphere was fantastic.",
    },
    {
      name: "Chris Green",
      image: "https://readymadeui.com/team-6.webp",
      rating: 5,
      text: "Absolutely fantastic! The staff was amazing, and the food was top-notch. Highly recommend.",
    },
  ];

  const cardsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState("next");

  const handlePrev = () => {
    setDirection("prev");
    setCurrentPage((prevPage) => (prevPage === 0 ? totalPages - 1 : prevPage - 1));
  };

  const handleNext = () => {
    setDirection("next");
    setCurrentPage((prevPage) => (prevPage === totalPages - 1 ? 0 : prevPage + 1));
  };

  const startIndex = currentPage * cardsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div className="mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-gray-800 text-2xl md:text-3xl font-extrabold">What our customers say</h2>
          <p className="text-sm text-gray-800 mt-3 pb-5 leading-relaxed px-3">
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
            <svg xmlns="http://www.w3.org/2000/svg" 
            className="w-6 h-6 text-white" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
