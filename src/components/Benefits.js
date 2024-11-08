import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; 
import '../../src/Benefits.css'; 
import specialshapde from "../assets/special-shape.png"; 

const Benefits = () => {
  return (
    <section
      id="benefits"
      className="relative flex flex-col lg:flex-row items-center justify-center py-18 bg-white pt-24" // Used flex-row on lg screens
    >
      {/* Special Shape Image */}
      <div
        className="relative w-[40rem] h-[45rem] lg:w-[500px] lg:h-[500px] opacity-100 mb-12 lg:mb-0 lg:left-[8%] lg:top-[-20%] mt-3"
        style={{
          backgroundImage: `url(${specialshapde})`,
          backgroundSize: '110%', // Zoom in the image
          backgroundPosition: 'top right',
          backgroundRepeat: 'no-repeat',
          borderRadius: '50%', // Optional: adjust shape
        }}
      ></div>

      {/* Content Container */}
      <div className="benefits-content mx-auto px-6 text-center lg:text-left lg:max-w-3xl relative z-10 lg:ml-auto lg:mr-20">
        <h2 className="text-3xl text-center lg:text-4xl font-bold text-[#003049] mb-20">
          Who Benefits from <span className="text-[#FB8500]">ReadON?</span>
        </h2>

        {/* Benefits List */}
<ul className="space-y-8 text-left text-gray-700 flex flex-col items-center">
  {/* Benefit Item 1 */}
  <li className="flex items-start space-x-6 w-full max-w-lg">
    <FaCheckCircle className="text-blue-900 text-3xl mt-1" />
    <div>
      <p className="font-semibold text-lg text-[#FB8500]">
        Children facing reading difficulties:
        <span className="text-black font-normal">
          Unlock reading fluency and focus with targeted interventions.
        </span>
      </p>
    </div>
  </li>

  {/* Benefit Item 2 */}
  <li className="flex items-start space-x-6 w-full max-w-lg">
    <FaCheckCircle className="text-blue-900 text-5xl mt-1" />
    <div>
      <p className="font-semibold text-lg text-[#FB8500]">
        Learners with ADHD, dyslexia, or other cognitive challenges:
        <span className="text-black font-normal">
          We provide specialized strategies that cater to diverse learning needs, helping children succeed.
        </span>
      </p>
    </div>
  </li>

  {/* Benefit Item 3 */}
  <li className="flex items-start space-x-6 w-full max-w-lg">
    <FaCheckCircle className="text-blue-900 text-4xl mt-1" />
    <div>
      <p className="font-semibold text-lg text-[#FB8500]">
        Adults looking to improve literacy skills:
        <span className="text-black font-normal">
          Achieve personal or professional goals through better reading and comprehension.
        </span>
      </p>
    </div>
  </li>
</ul>

        {/* Call-to-Action Button */}
        <div className="flex items-center pl-6 pt-8">
          <button
            className="bg-[#F58220] hover:bg-[#E07B00] text-[#0B254C] font-bold text-md py-2 px-6 rounded-md transition duration-300 ease-in-out shadow-md"
            onClick={() => alert("Assessment Started")}
          >
            Start an Assessment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
