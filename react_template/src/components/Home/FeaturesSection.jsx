import React from "react";
import { features } from "../../constants/data";

const FeaturesSection = () => {
  return (
    <div className="mt-20 border-b border-neutral-700">
      <div>
        <span className="bg-neutral-800 text-indigo-500 rounded-full h-8 text-sm font-medium px-4 py-1 uppercase block w-fit m-auto mb-20">
          features
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight font-semibold font-customFontEn text-center">
          Easily Build{" "}
          <span className="bg-gradient-to-t from-indigo-200 to-indigo-800 text-transparent bg-clip-text">
            Your Code
          </span>
        </h2>
        <div>
          {features.map((item, idx) => (
            <div key={idx}>{item.icon}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
