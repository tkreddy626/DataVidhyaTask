"use client";
import React, { useState } from "react";

const faqs = [
  { question: "How do I enroll in a course?", answer: "You can enroll by clicking the 'Enroll Now' button on the course page." },
  { question: "Are the projects beginner-friendly?", answer: "Yes! We have beginner-friendly and advanced projects to suit different skill levels." },
  { question: "What topics does the platform cover?", answer: "Our platform covers Data Engineering, System Design, Algorithm Challenges, and more!" },
  { question: "Can I get a certificate?", answer: "Yes! Completing a course earns you a verified certificate to showcase your skills." },
  { question: "Is there a free trial?", answer: "Yes! You can explore a free trial to experience the platform before subscribing." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-5xl font-bold">FAQs</h2>
        <p className="text-xl text-gray-600 mt-4">
          Find answers to your most pressing questions about our data engineering courses and platform
        </p>

        {/* FAQ Boxes */}
        <div className="mt-20 space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md text-left cursor-pointer border border-gray-300"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <p className="font-bold">{faq.question}</p>
                <span className="text-2xl font-bold">{openIndex === index ? "-" : "+"}</span>
              </div>
              {openIndex === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
            </div>
          ))}
        </div>

        {/* Still Have Questions? */}
        <p className="mt-20 text-2xl font-bold">Still have questions?</p>
        <p>We are here to help you</p>

        {/* Contact Button */}
        <div className="mt-6 flex justify-center">
          <button className="px-6 py-3 bg-black text-white rounded-md font-bold hover:scale-105 transition-all">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
