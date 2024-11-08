import React from 'react';
import wave3 from "../assets/wave3.png";  
import hero from "../assets/hero.png"; 

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-start justify-start h-screen px-8 md:px-16 pt-24 text-left bg-cover -bottom-7"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: '75%', // Reduced size of the hero image
        backgroundPosition: 'top right', 
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-0"></div>

      {/* Left Column: Text Content */}
      <div className="relative z-10 w-full md:w-1/2 max-w-2xl mt-8 top-10 md:mt-0"> {/* Adjusted top spacing */}
        <h1 className="text-[3.5rem] font-sans font-extrabold text-[#023047] mb-4 leading-tight">
          Read Better with
          <br />
          <span className="text-[#FB8500] font-sans">ReadON</span>
        </h1>

        <p className="text-lg text-[#555555] mb-4 w-full md:w-3/4">
          Transform Your Child's Reading Journey with ReadON Digital Cognitive Assessment & Therapies
        </p>

        <div className="flex items-center pt-2">
          <button
            className="bg-[#F58220] hover:bg-[#E07B00] text-[#0B254C] font-bold text-md py-2 px-6 rounded-md transition duration-300 ease-in-out shadow-md"
            onClick={() => alert("Assessment Started")}
          >
            Start an Assessment
          </button>
        </div>
      </div>

      {/* Wave Image at the Bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-[8rem] bg-cover bg-center z-[-4] -pt-2"
        style={{
          backgroundImage: `url(${wave3})`,
          backgroundSize: '100%', 
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
    </section>
  );
};

export default Home;
