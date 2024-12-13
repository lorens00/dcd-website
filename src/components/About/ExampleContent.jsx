import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ExampleContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 px-3 text-2xl md:text-3xl font-bold md:col-span-4">
      Additional content explaining the above card here
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 px-3 text-lg text-neutral-600 md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptas in tempore cum. Odit et corrupti consequatur eum accusantium, nihil deleniti pariatur fugit iure vitae nulla ipsam quo magnam culpa.
      </p>
    </div>
  </div>
);

export default ExampleContent;
