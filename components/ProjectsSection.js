"use client";
import React, { useState } from "react";
import Image from "next/image"; // ✅ Use Next.js Image

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const projectData = {
    projects: [
      {
        title: "Project name",
        description:
          "Learn to automate ,schedule,and monitor data pipelines with Apache Airflow.This course covers the basics,building efficient DAGs,and real-world projects on AWS & GCP. Perfect for anyone looking to manage modern data workflows easily",
        img: "/pro.png",
      },
      {
        title: "Project name",
        description:
          "Learn to automate ,schedule,and monitor data pipelines with Apache Airflow.This course covers the basics,building efficient DAGs,and real-world projects on AWS & GCP. Perfect for anyone looking to manage modern data workflows easily",
        img: "/pro.png",
      },
      {
        title: "Project name",
        description:
          "Learn to automate ,schedule,and monitor data pipelines with Apache Airflow.This course covers the basics,building efficient DAGs,and real-world projects on AWS & GCP. Perfect for anyone looking to manage modern data workflows easily",
        img: "/pro.png",
      },
    ],
    reviews: [
      {
        description:
          "Learn to automate ,schedule,and monitor data pipelines with Apache Airflow.This course covers the basics,building efficient DAGs,and real-world projects on AWS & GCP. Perfect for anyone looking to manage modern data workflows easily",
        img: "/pro.png",
      },
      {
        description:
          "Learn to automate ,schedule,and monitor data pipelines with Apache Airflow.This course covers the basics,building efficient DAGs,and real-world projects on AWS & GCP. Perfect for anyone looking to manage modern data workflows easily",
        img: "/pro.png",
      },
      {
        description:
          "Learn to automate ,schedule,and monitor data pipelines with Apache Airflow.This course covers the basics,building efficient DAGs,and real-world projects on AWS & GCP. Perfect for anyone looking to manage modern data workflows easily",
        img: "/pro.png",
      },
    ],
  };

  return (
    <section
      id="projects"
      className="mt-16 px-4 max-w-7xl mx-auto text-center pt-16"
    >
      <h2 className="text-2xl text-gray-300">Projects</h2>

      <div className="relative inline-block mx-auto mt-5 text-center">
        <h2 className="text-5xl font-bold leading-tight">
          Work on Real-Time{" "}
          <span className="relative inline-block">
            Projects
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-[160px]">
              <svg width="160" height="20" viewBox="0 0 160 20">
                <path
                  d="M0,10 C50,18 110,5 160,10"
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

              <svg
                width="180"
                height="20"
                viewBox="0 0 180 20"
                className="absolute left-1/2 transform -translate-x-1/2 bottom-[-5px]"
              >
                <path
                  d="M0,12 C70,20 140,3 180,12"
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
          </span>
        </h2>
      </div>

      <p className="text-xl text-gray-600 mt-6">
        Gain proficiency with 14+ extensive projects designed to provide{" "}
      </p>
      <p className="text-xl text-gray-600">
        {" "}
        practical,real-world data engineering experience{" "}
      </p>

      <div className="mt-6 flex justify-center gap-0">
        <button
          onClick={() => handleTabClick("projects")}
          className={`px-6 py-3 rounded-l-md transition-all ${
            activeTab === "projects"
              ? "bg-violet-600 text-white"
              : "bg-white text-black border border-violet-600"
          }`}
        >
          Data Vidhya Projects
        </button>
        <button
          onClick={() => handleTabClick("reviews")}
          className={`px-6 py-3 rounded-r-md transition-all ${
            activeTab === "reviews"
              ? "bg-violet-600 text-white"
              : "bg-white text-black border border-violet-600"
          }`}
        >
          Student Reviews
        </button>
      </div>

      <div className="mt-10 flex flex-wrap md:flex-nowrap gap-8 justify-center">
        {projectData[activeTab].map((item, i) => (
          <div
            key={i}
            className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md text-left"
          >
            <Image
              src={item.img}
              alt={item.title || "Project image"}
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded-md shadow-sm"
              loading="lazy"
            />
            <div className="mt-4 flex items-center justify-between">
              <h3 className="text-gray-500 text-xl">{item.title}</h3>
              {activeTab === "projects" && (
                <button className="px-4 py-2 bg-gray-300 text-black rounded-full shadow-sm hover:bg-gray-400 transition">
                  Airflow
                </button>
              )}
            </div>

            <p className="text-gray-500 text-[13px] mt-2">{item.description}</p>

            {activeTab === "reviews" && (
              <div className="mt-4 flex items-center gap-4 justify-start">
                <Image
                  src="/img.png"
                  alt="Reviewer"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-bold">Name, SurName</p>
                  <p className="text-gray-500 text-sm">Position ,Company Name</p>
                </div>
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 bg-blue-800 rounded-full text-white hover:bg-blue-700 transition-all ml-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.5 21.5V7h4.96v14.5H.5zM8.5 7h4.46v2h.06c.62-1.2 2.14-2.46 4.44-2.46 4.74 0 5.5 3.12 5.5 7.16v8h-4.96v-7.12c0-1.72-.03-3.94-2.46-3.94s-2.84 1.88-2.84 3.82v7.24H8.5V7z" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-15 flex justify-center">
        <button className="px-6 py-3 bg-black text-white rounded-md font-bold hover:scale-105 transition-all">
          View All Projects
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
