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
        <div className="flex flex-wrap mt-10 lg:mt-20">
          {features.map((item, idx) => (
            <div key={idx} className="w-full lg:w-1/3 sm:w-1/2">
              <div className="flex">
                <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-indigo-700 justify-center items-center rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h5 className="mt-1 mb-6 text-xl font-customFontKR">
                    {item.text}
                  </h5>
                  <p className="text-base p-2 mb-20 text-neutral-500 font-customFontEn">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
