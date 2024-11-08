import React from 'react';
import bottomFullImage from "../assets/2nd-Section.png";

const About = () => {
  return (
    <section id="about" className="text-black pb-3 pt-36">
      {/* Text Content Container */}
      <div className="container mx-auto px-4 pt-8 pb-6 text-center">
        {/* Title */}
        <h2 
          className="font-bold text-[24pt] mb-8 leading-tight max-w-4xl mx-auto" 
          style={{color:'#004668'}}
        >
          We understand the challenges children face in developing strong reading skills.
        </h2>
        
        {/* Body text */}
        <p className="max-w-6xl mx-auto text-[14pt] leading-relaxed">
          ReadON is an advanced digital cognitive therapy that begins with a comprehensive assessment to identify your child's unique cognitive reading challenges and strengths. This tailored approach ensures that your child receives the targeted neuroplasticity-based support they need to enhance their reading fluency, comprehension, and focus, helping them thrive academically.
        </p>
      </div>

      {/* Image Container */}
      <div className="h-auto w-full mb-4 -mt-12">
        <img 
          src={bottomFullImage}
          alt="Children with educational elements"
          className="w-full h-auto object-contain"
          style={{ maxWidth: '85%', margin: '0 auto' }}
        />
      </div>
    </section>
  );
};

export default About;