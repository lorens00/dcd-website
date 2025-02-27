import React, { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const media = [
  { type: "video", src: "https://www.youtube.com/embed/V9Kd-IS-R9Y?si=fYaQbFOy6MfbcuVD&amp;start=3" },
  { type: "image", src: "/assets/merch/tshirt.jpg" },
  { type: "image", src: "/assets/banner/featured.jpg" },
];

const TRANSITION_OPTIONS = {
  duration: 0.5,
  ease: "easeInOut",
};

export default function Carousel({ className = "", autoPlay = true, interval = 8000 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const directionRef = useRef(1);
  const intervalRef = useRef(null);
  const iframeRef = useRef(null);

  const nextSlide = () => {
    directionRef.current = 1;
    setActiveIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    directionRef.current = -1;
    setActiveIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (autoPlay) {
      const isVideo = media[activeIndex]?.type === "video";
      if (!isVideo) {
        intervalRef.current = setInterval(nextSlide, interval);
      }
      return () => clearInterval(intervalRef.current);
    }
  }, [autoPlay, interval, activeIndex]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") nextSlide();
      if (event.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const activeMedia = useMemo(() => media[activeIndex], [activeIndex]);

  return (
    <div className={className}>
      <h2 className="font-allura text-4xl md:text-6xl font-semibold mb-1.5 md:mb-0 text-center lg:text-start mt-16 lg:mt-20 xl:pl-24 lg:pl-14">New Deals & Events!</h2>
      <div className="relative w-full flex flex-col items-center overflow-hidden mb-20">
        <div className="relative w-full md:w-11/12 aspect-[5/3] md:aspect-[4/3] lg:aspect-[8/5] xl:aspect-[12/6] flex items-center justify-center px-3">
          <div className="relative w-full h-[95%] md:h-[80%] lg:h-[90%] overflow-hidden shadow-lg">
            <AnimatePresence initial={false} custom={activeIndex}>
              {media.map((item, index) => (
                <div
                  key={item.src}
                  className={`absolute w-full h-full overflow-hidden ${activeIndex === index ? "block" : "hidden"}`}
                  aria-hidden={activeIndex !== index}
                >
                  {item.type === "video" ? (
                    <iframe
                      ref={iframeRef}
                      width="100%"
                      height="100%"
                      src={item.src}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full object-cover"
                    ></iframe>
                  ) : (
                    <motion.img
                      src={item.src}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover"
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
                  )}
                </div>
              ))}
            </AnimatePresence>

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

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 ">
              {media.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-4 md:h-2 md:w-6 rounded-full cursor-pointer transition-all ${
                    activeIndex === i ? "bg-white" : "bg-gray-400"
                  }`}
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
    </div>
  );
}
