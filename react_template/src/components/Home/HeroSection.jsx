import React from "react";
import { heroLinks } from "../../constants/data";
import { Link } from "react-router-dom";

import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 gap-10">
      <h1 className="text-4xl lg:text-7xl sm:text-6xl font-customFontEn tracking-tight text-neutral-700 dark:text-neutral-300 font-semibold text-center">
        AceDot Build Tools{" "}
        <span className="bg-gradient-to-t from-indigo-200 to-indigo-800 text-transparent bg-clip-text">
          for Developers
        </span>
      </h1>
      <p className="text-center text-neutral-400 max-w-4xl text-base lg:text-lg mb:text-sm">
        국가는 주택개발정책등을 통하여 모든 국민이 쾌적한 주거생활을 할 수
        있도록 노력하여야 한다. 국가는 지역간의 균형있는 발전을 위하여
        지역경제를 육성할 의무를 진다. 국가안전보장에 관련되는
        대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서
        대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다.
      </p>
      <div className="flex gap-4">
        {heroLinks.map((item, idx) => (
          <Link
            to={item.to}
            key={idx}
            className={`font-customFontEn border border-neutral-500 py-1 px-4 rounded-md ${
              idx === 1 &&
              "bg-gradient-to-r from-indigo-500 to-indigo-700 text-white border-0"
            }`}
          >
            {item.text}
          </Link>
        ))}
      </div>
      <div className="mt-10 gap-4 flex justify-center flex-col items-center md:flex-row">
        <video autoPlay muted loop className="vid md:w-[45%]">
          <source src={video1} />
        </video>
        <video autoPlay muted loop className="vid md:w-[45%]">
          <source src={video2} />
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
