import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Featured = () => {
  // State for the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of images for the slideshow
  const slides = [
    "/assets/merch/mug.jpg",
    "/assets/merch/pen.jpg",
    "/assets/merch/umbrella.jpg",
  ];

  const ONE_SECOND = 1000;
  const AUTO_DELAY = ONE_SECOND * 3; // Change slide every 3 seconds
  const DRAG_BUFFER = 50;

  const dragX = useMotionValue(0);
  const x = useTransform(dragX, (value) => value); // Mapping drag value to transform

  // Auto slide after every 3 seconds
  useEffect(() => {
    const intervalRef = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  // Handling drag end to change slide based on swipe
  const onDragEnd = () => {
    const xPosition = dragX.get();

    if (xPosition <= -DRAG_BUFFER && currentSlide < slides.length - 1) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    } else if (xPosition >= DRAG_BUFFER && currentSlide > 0) {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  // Slide transition animation
  const slideTransition = {
    type: 'spring',
    stiffness: 300,
    damping: 30,
  };

  return (
    <div className="bg-gray-100 py-10 pb-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center pb-4">
          <h3 className="font-ostrichmedium font-bold text-4xl lg:text-6xl xl:ml-48 tracking-wide">
            Melt Into Style!
          </h3>
          <Link
            to="/menu"
            className="font-ostrichmedium font-semibold text-red-500 text-xl lg:text-2xl xl:mr-48 flex items-center gap-2 tracking-wide hover:underline hover:text-red-600"
          >
            SHOP
            <img
              src="/assets/icons/right-arrow.svg"
              className="w-6 transition-transform duration-200 hover:translate-x-1"
              alt=""
            />
          </Link>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-8 gap-2 md:gap-3">
          {/* Big Card (Carousel) */}
          <div className="xl:col-span-3 sm:col-span-3 col-span-3 xl:col-start-2 relative rounded-lg overflow-hidden group">
            <motion.div
              className="w-full aspect-[4/3]"
              style={{ x }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }} // Prevent out-of-bounds drag
              onDragEnd={onDragEnd}
              transition={slideTransition}
            >
              <img
                src={slides[currentSlide]}
                alt="Big Featured"
                className="w-full h-full object-cover transition-all duration-500 ease-in-out"
              />
            </motion.div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 w-2 rounded-full ${index === currentSlide ? 'bg-red-500' : 'bg-gray-500'}`}
                />
              ))}
            </div>
          </div>

          {/* Small Cards (Grid Layout) */}
          <div className="grid grid-cols-2 xl:grid-cols-2 gap-2 md:gap-3 col-span-3">
            {[ 
              { name: "DCD Tshirt", price: "₱359.00", src: "/assets/merch/tshirt.jpg" },
              { name: "DCD Hat", price: "₱389.00", src: "/assets/merch/hat.jpg" },
              { name: "DCD Tumbler", price: "₱359.00", src: "/assets/merch/tumbler.jpg" },
              { name: "DCD Tote Bag", price: "₱439.00", src: "/assets/merch/tote-bag.jpg" }
            ].map((item, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden group">
                <div className="w-full aspect-[4/3]">
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col justify-end p-4 text-white transition-opacity duration-300 group-hover:bg-opacity-50">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-sm">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
