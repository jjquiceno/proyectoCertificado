import React from 'react';
import { Header } from '../components/Header';
import { BoxAbout } from '../components/box1';

const About = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center h-[60vh] bg-white text-[#3f3f3f] px-6 text-center">
        <h2 className="text-6xl text-black mb-6 font-bold ">
          Somos <span className="text-[#a67c52] font-bold">ZenTask</span>
        </h2>
        <p className="max-w-xl text-[#5c5c5c] leading-relaxed">
          Somos una pagina web con enfoque en simplicidad, estética y funcionalidad.
          Este sitio refleja nuestro gusto por la organizacion y el minimalismo
        </p>
      </div>
      <div className='bg-[#fdfaf6] w-full h-[60vh] flex flex-col items-center justify-center gap-10 p-10 mt-10'>
          <h1 className='text-4xl font-bold'>Funcionalidades pensadas para ti</h1>
          <p className='text-[#696D59]'>Cada característica ha sido diseñada con la filosofía de simplicidad y funcionalidad japonesa.</p>
          <div className='flex gap-5'>
            <BoxAbout img="/Logo.png" title={"Organización Intuitiva"} parr={"Organiza tus tareas en columnas: Por hacer, En proceso y Completadas."} />
            <BoxAbout img="/gestion.png" title={"Gestión Temporal"} parr={"Establece fechas límite y prioridades para mantener el control."} />
            <BoxAbout img="/seguimiento.png" title={"Seguimiento Visual"} parr={"Visualiza tu progreso y productividad con estadísticas claras."} />
          </div>
        </div>
    </div>
  )
};

export default About;
