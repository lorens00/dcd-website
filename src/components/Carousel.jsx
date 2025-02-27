import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

const media = [
  { type: "video", src: "https://www.youtube.com/embed/V9Kd-IS-R9Y?si=fYaQbFOy6MfbcuVD&amp;start=3" },
  { type: "image", src: "/assets/merch/tshirt.jpg" },
  { type: "image", src: "/assets/banner/featured.jpg" },
];

export default function Carousel({ className = "" }) {
  const [activeIndex, setActiveIndex] = useState(1); // Default to second item
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 🔥 Swipe & Click Handlers with a small delay
  const changeSlide = (newIndex) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex(newIndex);
        setIsTransitioning(false);
      }, 200); // Delay for smoothness
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => changeSlide(Math.min(activeIndex + 1, media.length - 1)),
    onSwipedRight: () => changeSlide(Math.max(activeIndex - 1, 0)),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div {...handlers} className={`relative w-full flex flex-col items-center overflow-hidden ${className}`}>
      <h2 className="font-ostrichmedium text-3xl md:text-6xl font-semibold mb-0 text-center mt-10">
        New Deals & Events!
      </h2>

      {/* 📌 Carousel Container */}
      <div className="relative w-full md:w-10/12 lg:w-8/12 flex justify-center items-center overflow-hidden h-[30vh] md:h-[40vh] lg:h-[60vh] mb-14 lg:-mt-5">
        <div className="relative w-full flex justify-center items-center h-full">
          <div className="relative flex justify-center items-center w-full h-full">
            {media.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={item.src}
                  className={`absolute cursor-pointer transition-transform duration-200 ease-in-out ${
                    isActive
                      ? "z-10 scale-110 w-4/5 md:w-3/5 lg:w-1/2"
                      : "z-5 scale-90 w-3/5 md:w-2/5 lg:w-1/3 opacity-60"
                  }`}
                  style={{ transform: `translateX(${(index - activeIndex) * 60}%)` }}
                  onClick={() => changeSlide(index)}
                >
                  {item.type === "video" ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`${item.src}${isActive ? "&autoplay=1" : ""}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full aspect-video object-cover rounded-lg shadow-lg"
                    ></iframe>
                  ) : (
                    <img
                      src={item.src}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full aspect-video object-cover rounded-lg shadow-lg"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
