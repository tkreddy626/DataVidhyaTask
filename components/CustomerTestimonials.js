import React from "react";
import Image from "next/image";

const testimonials = [
  { 
    name: "Name Surname",
    position: "Position",
    company: "Company Name",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
  },
  { 
    name: "Name Surname",
    position: "Position",
    company: "Company Name",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
  },
  { 
    name: "Name Surname",
    position: "Position",
    company: "Company Name",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
  },
  { 
    name: "Name Surname",
    position: "Position",
    company: "Company Name",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
  },
  { 
    name: "Name Surname",
    position: "Position",
    company: "Company Name",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
  },
  { 
    name: "Name Surname",
    position: "Position",
    company: "Company Name",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
  },
];

const CustomerTestimonials = () => {
  return (
    <section className="mt-16 px-4 max-w-7xl mx-auto text-center pt-16 mb-20">
      <h2 className="text-5xl font-bold">Customer Testimonials</h2>
      <p className="text-xl text-gray-600 mt-4">This platform transformed my Data Engineering skills</p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-left relative border border-gray-200">
            <div className="absolute top-4 left-4 flex">
              {"★★★★★".split("").map((star, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>

            <p className={`mt-12 text-black font-medium ${(index === 1 || index === 4) ? 'mb-8' : 'mb-2'}`}>&quot;{testimonial.text}&quot;</p>


            <div className="mt-4 flex items-center gap-4 justify-start">
              {/* Optimized Image */}
              <Image 
                src="/img.png" 
                alt={testimonial.name} 
                width={48} 
                height={48} 
                className="rounded-full"
                unoptimized
              />

              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.position}, {testimonial.company}</p>
              </div>

              <a href="#" className="flex items-center justify-center w-12 h-12 bg-blue-800 rounded-full text-white hover:bg-blue-700 transition-all ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.5 21.5V7h4.96v14.5H.5zM8.5 7h4.46v2h.06c.62-1.2 2.14-2.46 4.44-2.46 4.74 0 5.5 3.12 5.5 7.16v8h-4.96v-7.12c0-1.72-.03-3.94-2.46-3.94s-2.84 1.88-2.84 3.82v7.24H8.5V7z"/>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerTestimonials;
