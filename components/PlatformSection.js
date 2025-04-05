"use client";

import React, { useState } from "react";

const platformCards = [
  {
    title: "Choose Your Path",
    description: [
      "Choose your path and have a personalized roadmap. We offer:",
      "Pyspark",
      "Scala",
      "DBT",
      "Postgre SQL ",
      "Python",
    ],
    imgSrc: "platform1.png",
  },
  {
    title: "Solve Questions",
    description:
      "Engage in real-world coding challenges and get instant feedback to enhance your skills.",
    imgSrc: "platform2.png",
  },
  {
    title: "AI Review✨",
    description:
      "Engage in real-world coding challenges and get instant feedback to enhance your skills.",
    imgSrc: "platform3.png",
  },
  {
    title: "Gamified Learning",
    description:
      "Level up skills through challenges, rewards and competition making learning addictive & effective",
    imgSrc: ["platform4.png", "platform5.png"],
  },
];

const PlatformSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleArrowClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="platform" className="mt-16 px-4 max-w-7xl mx-auto text-center pt-16 bg-gray-100">
       {/* Section Title */}
       <h2 className="text-2xl text-gray-300">Platform</h2>
      <h2 className="text-5xl font-bold leading-tight text-black">Solve LeetCode like</h2>

      <div className="relative inline-block">
        <h2 className="text-5xl font-bold leading-tight text-black">Problems</h2>

        {/* Gradient underline 1 */}
        {/* Gradient underline 1 */}
<svg className="absolute -bottom-3 left-[1%]" width="200" height="20" viewBox="0 0 200 20">

          <path
            d="M0,10 C50,20 150,0 200,10"
            stroke="url(#grad1)"
            strokeWidth="5"
            fill="none"
          />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(138,43,226)" />
              <stop offset="100%" stopColor="rgb(75,0,130)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Gradient underline 2 */}
       {/* Gradient underline 2 */}
<svg className="absolute -bottom-1 left-[1%]" width="220" height="20" viewBox="0 0 220 20">

          <path
            d="M0,12 C60,22 160,2 220,12"
            stroke="url(#grad2)"
            strokeWidth="5"
            fill="none"
          />
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(138,43,226)" />
              <stop offset="100%" stopColor="rgb(75,0,130)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <p className="text-base text-black mt-6 text-center max-w-3xl mx-auto">
        Our platform empowers you to advance your career with practical skills
        and real-world applications. Join a vibrant community that supports your
        learning journey.
      </p>

      {/* Arrow Buttons */}
      <div className="mt-10 flex justify-center overflow-x-auto px-4">
        {platformCards.map((card, index) => {
          const isFirst = index === 0;
          const isLast = index === platformCards.length - 1;

          const clipPath = isFirst
            ? "polygon(0 10px, 10px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 10px 100%, 0 90%)"
            : isLast
            ? "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 90%, calc(100% - 10px) 100%, 0 100%, 20px 50%)"
            : "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)";

          return (
            <button
              key={index}
              onClick={() => handleArrowClick(index)}
              className={`relative h-14 px-12 text-lg font-semibold transition-all duration-300 ${
                activeIndex === index
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-800"
              } hover:bg-indigo-500 hover:text-white`}
              style={{
                clipPath,
                marginLeft: index !== 0 ? "-20px" : "0",
                zIndex: platformCards.length - index,
                border: "1px solid #ccc",
                boxShadow:
                  activeIndex === index
                    ? "0 0 10px rgba(0,0,0,0.3)"
                    : "0 0 5px rgba(0,0,0,0.1)",
              }}
            >
              <span className="font-normal">{card.title}</span>
            </button>
          );
        })}
      </div>

      {/* Content Section */}
      <div className="mt-20 flex flex-wrap md:flex-nowrap gap-8 justify-between items-start">
        <div className="w-full md:w-[45%] text-left ml-6 p-6">
          <h3 className="text-2xl font-bold mb-4">
            {activeIndex === 2 ? (
              <>
                <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-transparent bg-clip-text">
                  1/4{" "}
                </span>
                AI Review✨
              </>
            ) : (
              platformCards[activeIndex].title
            )}
          </h3>

          {Array.isArray(platformCards[activeIndex].description) ? (
            <div className="text-gray-600 text-lg leading-relaxed">
              <p className="mb-3">
                {platformCards[activeIndex].description[0]}
              </p>
              <ol className="list-decimal ml-6">
                {platformCards[activeIndex].description.slice(1).map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ol>
            </div>
          ) : (
            <p className="text-gray-600 text-lg leading-relaxed">
              {platformCards[activeIndex].description}
            </p>
          )}

          {activeIndex === 2 && (
            <div className="flex gap-4 mt-6">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`w-7 h-7 rounded-full ${
                    i === 0 ? "bg-black" : "bg-gray-400"
                  }`}
                ></div>
              ))}
            </div>
          )}
        </div>

        {/* Image section */}
        <div className="w-full md:w-[90%] p-4 flex justify-center items-center gap-6 flex-wrap">
          {Array.isArray(platformCards[activeIndex].imgSrc) ? (
            platformCards[activeIndex].imgSrc.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Platform Feature ${i + 1}`}
                className="w-full sm:w-[45%] h-auto max-w-md rounded-md shadow-lg"
              />
            ))
          ) : (
            <img
              src={platformCards[activeIndex].imgSrc}
              alt="Platform Feature"
              className="w-full h-auto max-w-5xl rounded-md"
            />
          )}
        </div>
      </div>

      <div className="mt-20 flex justify-center">
        <button className="px-6 py-3 bg-violet-600 text-white rounded-md font-bold transition-all hover:bg-violet-700">
          Try Platform
        </button>
      </div>
    </section>
  );
};

export default PlatformSection;
