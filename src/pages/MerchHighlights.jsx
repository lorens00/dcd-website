import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Featured = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/assets/merch/mug.jpg",
    "/assets/merch/pen.jpg",
    "/assets/merch/umbrella.jpg",
    "/assets/merch/tshirt.jpg",
    "/assets/merch/tote-bag.jpg"
  ];

  const ONE_SECOND = 1000;
  const AUTO_DELAY = ONE_SECOND * 3; // Change slide every 3 seconds

  // Auto slide after every 3 seconds
  useEffect(() => {
    const intervalRef = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

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
          {/* Big Card (Swiper Carousel) */}
          <div className="xl:col-span-3 sm:col-span-3 col-span-3 xl:col-start-2 relative rounded-lg overflow-hidden group">
            <Swiper
              spaceBetween={10} // Space between slides
              slidesPerView={1} // Only one image visible at a time
              loop={true} // Loop back to the first slide after the last one
              autoplay={{ delay: AUTO_DELAY }} // Auto slide every 3 seconds
              onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)} // Update slide index on change
              className="w-full aspect-[4/3]"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={slide}
                    alt={`Featured ${index}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Title and Description (Positioned at the Bottom) */}
            <div className="absolute bottom-4 left-4 z-10 text-white pb-2 lg:pb-4">
              <h2 className="font-bold text-lg md:text-2xl">DCD Merch Custom</h2>
              <p className="text-xs md:text-sm">Exclusive custom merch designed just for you. Style that stands out!</p>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 lg:h-1.5 w-3 lg:w-4 rounded-full ${index === currentSlide ? 'bg-red-500' : 'bg-gray-500'} transition-colors duration-300 ease-in-out hover:bg-red-700 z-10`}
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
                <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col justify-end px-2 py-1.5 md:px-3 md:py-2 text-white transition-opacity duration-300 group-hover:bg-opacity-50">
                  <h3 className="text-base lg:text-lg font-bold">{item.name}</h3>
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
