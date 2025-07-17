import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#f5f3ef] text-[#3f3f3f] px-4 text-center">
      <h1 className="text-6xl font-bold mb-6">
              Organiza tu vida con
              <span className="text-gradient block mt-2">simplicidad zen</span>
            </h1>
      <p className="max-w-xl text-lg text-[#7e5d43] mb-8 ">
      ZenTasks combina la elegancia del diseño japonés con la funcionalidad moderna. Gestiona tus tareas con serenidad y eficiencia.
      </p>
      <Link to="/about">
        <button className="bg-[#a67c52] text-white px-6 py-3 rounded-md shadow hover:bg-[#916640] transition duration-300">
          Conoce mas sobre nosotros
        </button>
      </Link>
      <br />
      <Link to="/tasks">
        <button className="bg-[#a67c52] text-white px-6 py-3 rounded-md shadow hover:bg-[#916640] transition duration-300">
          Tareas
        </button>
      </Link>
    </div>
  );
};

export default Home;

