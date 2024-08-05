import React from "react";
import codeImg from "../../assets/code.jpg";
import { checklistItems } from "../../constants/data";
import { CheckCircle2 } from "lucide-react";

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-tight font-customFontEn font-semibold">
        Acellerate Your{" "}
        <span className="bg-gradient-to-t from-indigo-200 to-indigo-800 text-transparent bg-clip-text">
          Coding Workflow
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="" />
        </div>
        <div className="p-12 w-full lg:w-1/2">
          {checklistItems.map((item, idx) => (
            <div key={idx} className="flex mb-12">
              <div className="text-indigo-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl font-customFontEn">
                  {item.title}
                </h5>
                <p className="text-base text-neutral-500 font-customFontEn">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
