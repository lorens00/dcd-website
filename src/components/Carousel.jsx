import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
];

const TRANSITION_OPTIONS = {
  duration: 0.5,
  ease: "easeInOut",
};

export default function Carousel({ className = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const directionRef = useRef(1);

  const nextSlide = () => {
    directionRef.current = 1;
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    directionRef.current = -1;
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className={`relative w-full flex flex-col items-center overflow-hidden ${className}`}>
      {/* Heading */}
      <h2 className="font-allura text-4xl font-semibold -mb-14">What's New</h2>
      
      <div className="relative w-full aspect-[16/9] flex items-center justify-center px-3">
        <div className="relative w-full h-[80%] rounded-2xl overflow-hidden shadow-lg">
          {/* Image Slider */}
          <AnimatePresence initial={false} custom={activeIndex}>
            {images.map((img, index) =>
              activeIndex === index ? (
                <div key={img} className="absolute w-full h-full overflow-hidden">
                  <motion.img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover rounded-2xl"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    initial={{ x: directionRef.current * 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -directionRef.current * 100, opacity: 0 }}
                    transition={{ ...TRANSITION_OPTIONS, opacity: { duration: 0.3 } }}
                    onDragEnd={(event, info) => {
                      if (info.offset.x < -50) nextSlide();
                      if (info.offset.x > 50) prevSlide();
                    }}
                  />
                </div>
              ) : null
            )}
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white py-2 px-4 md:py-3 md:px-5 rounded-full hover:bg-black/70 transition z-10"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white py-2 px-4 md:py-3 md:px-5 rounded-full hover:bg-black/70 transition z-10"
          >
            &#10095;
          </button>

          {/* Indicators (Dots) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 rounded-full">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-4 md:h-2 md:w-6 rounded-full cursor-pointer transition-all ${activeIndex === i ? "bg-white" : "bg-gray-400"}`}
                onClick={() => {
                  directionRef.current = i > activeIndex ? 1 : -1;
                  setActiveIndex(i);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
