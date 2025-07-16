import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fdfaf6] text-[#3f3f3f] px-6 text-center">
      <h2 className="text-5xl text-[#6b6b6b] mb-6">
        Somos <span className="text-[#a67c52] font-medium">ZenTask</span>
      </h2>
      <p className="max-w-xl text-[#5c5c5c] leading-relaxed">
        Somos una pagina web con enfoque en simplicidad, estética y funcionalidad.
        Este sitio refleja nuestro gusto por la organizacion y el minimalismo
      </p>

    </div>
  )
};

export default About;
