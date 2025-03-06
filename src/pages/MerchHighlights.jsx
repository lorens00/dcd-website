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
  const AUTO_DELAY = ONE_SECOND * 3;

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  return (
    <div className="bg-gray-100 py-6 pb-6">
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
              spaceBetween={10} 
              slidesPerView={1} 
              loop={true} 
              autoplay={{ delay: AUTO_DELAY }} 
              onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)} 
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

            {/* Overlay covering bottom part */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-35 px-3 py-2 text-white z-10 pb-4 lg:pb-7">
              <h2 className="font-bold text-lg md:text-2xl">DCD Merch!</h2>
              <p className="text-xs md:text-sm">
                Exclusive custom merch designed just for you. Style that stands out!
              </p>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 lg:h-1.5 w-3 lg:w-4 rounded-full ${index === currentSlide ? 'bg-red-500' : 'bg-white'} transition-colors duration-300 ease-in-out hover:bg-red-700 z-10`}
                />
              ))}
            </div>
          </div>

          {/* Small Cards */}
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
                {/* Overlay covering bottom part */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-35 px-3 py-1 text-white">
                  <h3 className="text-base lg:text-lg font-bold">{item.name}</h3>
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
