import React from "react";

const CoursesSection = () => {
  return (
    <section id="courses" className="mt-16 px-4 max-w-7xl mx-auto text-center pt-16 bg-gray-50">
    {/* Section Title */}
    <h2 className="text-2xl text-gray-300">Courses</h2>
    <h2 className="text-5xl font-bold leading-tight">Explore Data Engineering</h2>
    
    {/* Title with Gradient Lines */}
    {/* Title with Gradient Lines */}
    <div className="relative inline-block mx-auto text-center">
  <h2 className="text-5xl font-bold leading-tight">Courses</h2>

  {/* First Gradient Line (Closer to Courses) */}
  <svg className="absolute left-1/2 transform -translate-x-1/2 bottom-[-7px]" width="200" height="20" viewBox="0 0 200 20">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgb(138,43,226)" stopOpacity="1"/>
        <stop offset="100%" stopColor="rgb(75,0,130)" stopOpacity="1"/>
      </linearGradient>
    </defs>
    <path d="M0,10 C50,20 150,0 200,10" stroke="url(#grad1)" strokeWidth="5" fill="none"/>
  </svg>

  {/* Second Gradient Line (Slightly Below First Line) */}
  <svg className="absolute left-1/2 transform -translate-x-1/2 bottom-[3px]" width="220" height="20" viewBox="0 0 220 20">
    <defs>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgb(138,43,226)" stopOpacity="1"/>
        <stop offset="100%" stopColor="rgb(75,0,130)" stopOpacity="1"/>
      </linearGradient>
    </defs>
    <path d="M0,12 C60,22 160,2 220,12" stroke="url(#grad2)" strokeWidth="5" fill="none"/>
  </svg>
</div>





    <p className="text-xl text-gray-600 mt-2">Unlock your potential with expert-led courses</p>

    {/* Course Cards Container */}
    <div className="mt-10 flex flex-wrap md:flex-nowrap gap-8 justify-center bg-gray-50/80 py-16 px-8 rounded-xl">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md text-left">
          <img src={"/course1.jpg"} alt={'Course ${i+1}'} className="w-full h-50 rounded-md shadow-sm"/>
          
          {/* Course Title */}
          <h3 className="mt-4 text-base font-bold text-gray-800 leading-snug min-h-[48px]">
            Workflow Orchestration with Apache Airflow for Data Engineering
          </h3>

          {/* Language Button & Pricing */}
          <div className="mt-4 flex justify-between items-center">
            <button className="px-4 py-2 bg-gray-300 text-black rounded-md text-sm">English</button>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 line-through text-sm">${199 + (i * 50)}</span>
              <span className="text-violet-700 font-bold text-lg">${149 + (i * 50)}</span>
            </div>
          </div>

          {/* Instructor & Reviews */}
          <div className="mt-4 flex items-center justify-between">
            {/* Instructor (Left) */}
            <div className="flex items-center gap-3">
              <img src="/course2.jpg" alt="Instructor" className="w-10 h-10 rounded-full"/>
              <p className="text-gray-700 ">Darshil Parmar</p>
            </div>
            {/* Reviews (Right) */}
            <p className="text-yellow-500 text-sm font-bold">5★ (800+ Reviews)</p>
          </div>

          {/* Enroll Button */}
          <div className="mt-6 flex justify-end">
            <button className="px-2 py-2 bg-gradient-to-r from-violet-500 to-violet-700 text-white rounded-md font-bold hover:scale-105 transition-all">
              Enroll Now
            </button>
          </div>
        </div>
      ))}
    </div>

    {/* View All Courses Button */}
    <div className="mt-10 flex justify-center">
      <button className="px-6 py-3 bg-black text-white rounded-md font-bold hover:scale-105 transition-all">
        View All Courses
      </button>
    </div>
  </section>
  );
};

export default CoursesSection;