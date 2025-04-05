import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="home" className="px-4 max-w-7xl mx-auto text-left pt-10">
      {/* Large Title */}
      <h1 className="text-6xl font-bold leading-tight">
        Unlock Your  
        <span className="bg-gradient-to-r mx-4 from-violet-700 to-violet-700 text-transparent bg-clip-text">
          Data Engineering
        </span>
        <span className="text-6xl font-bold leading-tight">
          Potential
        </span>
      </h1>
      <h1 className="text-6xl font-bold leading-tight">today 🎉</h1>

      {/* Checkboxes Section */}
      <div className="mt-6 flex items-start space-x-5 text-lg">
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 rounded-full bg-green-500 flex justify-center items-center text-white font-bold">✔</div>
          <span>Engage in Real Time projects</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 rounded-full bg-green-500 flex justify-center items-center text-white font-bold">✔</div>
          <span>Solve leet-code like problems</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 rounded-full bg-green-500 flex justify-center items-center text-white font-bold">✔</div>
          <span>Learn latest trends from our courses</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <button className="px-6 py-3 bg-gradient-to-r from-violet-700 to-violet-700 text-white rounded-md font-bold hover:scale-105 transition-all">
          Explore Courses
        </button>
        <button className="px-6 py-3 bg-black text-white rounded-md font-bold hover:scale-105 transition-all">
          Solve Questions
        </button>
      </div>

      <div className="mt-9 border-t border-gray-200 w-full shadow-lg"></div>

      {/* Cards Section - Full Width */}
      <div className="mt-10 -mx-[50vw] left-1/2 right-1/2 relative w-screen">
        <div 
          className="w-full bg-white py-16" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #f8f8f8 1px, transparent 1px),
              linear-gradient(to bottom, #f8f8f8 1px, transparent 1px)
            `,
            backgroundSize: '96px 48px'
          }}
        >
          <div className="max-w-7xl mx-auto px-12">
            <div className="flex flex-wrap md:flex-nowrap gap-8">
              {/* First Card - 6 Small Images */}
              <div className="w-full md:w-1/2 bg-gray-50/80 p-8 rounded-xl shadow-md">
                <div className="grid grid-cols-3 gap-6">
                  {[...Array(6)].map((_, index) => (
                    <Image 
                      key={index}
                      src="/home1.png"
                      alt={`Image ${index + 1}`}
                      width={144} // 36 * 4
                      height={96} // 24 * 4
                      className="rounded-lg shadow-sm hover:shadow-md transition-all object-cover"
                    />
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <p className="text-gray-700 text-lg font-medium">Data Vidhya</p>
                  <a href="#courses" className="text-blue-600 text-lg font-medium hover:text-blue-700 transition-colors">Courses</a>
                </div>
                <p className="mt-4 text-gray-600">Our extensive course catalogue keeps you in trend with data Engineering</p>
              </div>

              {/* Second Card - Single Image */}
              <div className="w-full md:w-1/2 bg-gray-50/80 p-8 pr-24 rounded-xl shadow-md">
                <Image 
                  src="/home2.jpg" 
                  alt="Main Feature" 
                  width={400}
                  height={220}
                  className="rounded-lg shadow-lg object-cover"
                />
                <div className="mt-6 flex items-center gap-2">
                  <p className="text-gray-700 text-lg font-medium">Data Vidhya</p>
                  <a href="#platform" className="text-blue-600 text-lg font-medium hover:text-blue-700 transition-colors">Platform</a>
                </div>
                <p className="mt-4 text-gray-600">Experience our platform and improve your problem solving skills with our questions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
