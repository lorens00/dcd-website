import React from "react";
import { motion } from "framer-motion";
import AboutSection from "../components/About/AboutSection";
import Featured from "./Featured";

const About = () => {
  return (
    <div className="bg-white">
      <AboutSection
        imgUrl="/assets/banner/pesto.png"
        subheading="Fresh Ingredients"
        heading="Quality You Can Taste"
      >
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
          <h2 className="col-span-1 px-3 text-2xl md:text-3xl font-bold md:col-span-4">
            Crafted with Freshness, Served with Quality
          </h2>
          <div className="col-span-1 md:col-span-8">
            <p className="mb-4 px-3 text-lg text-neutral-600 md:text-2xl">
              Every pizza starts with our fresh, hand-stretched dough, made from scratch to create the perfect base. Topped with the finest ingredients, from savory sauces to premium cheeses and toppings, we deliver a delicious, high-quality experience in every bite.
            </p>
          </div>
        </div>
      </AboutSection>

      <motion.div 
        className="mb-20"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Featured />
      </motion.div>

      <AboutSection
        imgUrl="/assets/banner/about02.jpg"
        subheading="Affordable Prices"
        heading="Pizza for Every Occasion"
      >
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
          <h2 className="col-span-1 px-3 text-2xl md:text-3xl font-bold md:col-span-4">
            Great Pizza, Great Prices
          </h2>
          <div className="col-span-1 md:col-span-8">
            <p className="mb-4 px-3 text-lg text-neutral-600 md:text-2xl">
              Enjoy delicious pizzas without breaking the bank. Whether it's a family gathering, a casual get-together, or a solo treat, our affordable prices make it easy to enjoy pizza for any occasion, anytime.
            </p>
          </div>
        </div>
      </AboutSection>
      
      <AboutSection
        imgUrl="/assets/banner/about3.jpg"
        subheading="Exclusive Merch"
        heading="Just for You"
      >
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
          <h2 className="col-span-1 px-3 text-2xl md:text-3xl font-bold md:col-span-4">
            Gear Up with Our Exclusive Merch
          </h2>
          <div className="col-span-1 md:col-span-8">
            <p className="mb-4 px-3 text-lg text-neutral-600 md:text-2xl">
              Show off your love for great pizza with our exclusive merchandise. From stylish shirts to cool accessories, our merch is designed to add a touch of flavor to your wardrobe. Grab yours today and wear your passion!
            </p>
          </div>
        </div>
      </AboutSection>
    </div>
  );
};

export default About;
