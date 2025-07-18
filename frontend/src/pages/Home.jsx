import React from 'react';
import { Link } from 'react-router-dom';
import { Header, HeaderTasks } from '../components/Header';
import Bubbles from '../components/Bubbles';

const Home = () => {

  if (!localStorage.getItem('userName')) {
    return (
      <div>
  
        <Header />
        <div className="flex flex-col items-center justify-center h-[90vh] bg-[#f5f3ef] text-[#3f3f3f] px-4 text-center">
          <h1 className="text-7xl font-bold mb-6">
            Organiza tu vida con
            <span className="text-[#696D59]  text-gradient block mt-2">simplicidad zen</span>
          </h1>
          <p className="max-w-xl text-lg text-[#7e5d43] mb-8 ">
            ZenTasks combina la elegancia del diseño japonés con la funcionalidad moderna. Gestiona tus tareas con serenidad y eficiencia.
          </p>
  
          <div className="flex items-center justify-center gap-5">
            <Link to="/about">
              <button className="bg-[#a67c52] text-white cursor-pointer shadow-md shadow-gray-400 px-6 py-3 rounded-md hover:bg-[#916640] transition duration-300">
                Conoce más sobre nosotros
              </button>
            </Link>
            <br />
            <Link to="/login">
              <button className="bg-[#f5f3ef] text-[#4e2d0e] cursor-pointer border border-[#d4a373] px-6 py-3 rounded-md shadow-md shadow-gray-400 hover:shadow-none transition-shadow duration-300">
                Iniciar sesión
              </button>
            </Link>
  
            <Bubbles />
          </div>
          
  
        </div>
      </div>
  
    );
  }else {
    return (
      <div>
        <HeaderTasks />
        <div className="flex flex-col items-center justify-center h-[90vh] bg-[#f5f3ef] text-[#3f3f3f] px-4 text-center">
          <h1 className="text-7xl font-bold mb-6">
            Organiza tu vida con
            <span className="text-[#696D59]  text-gradient block mt-2">simplicidad zen</span>
          </h1>
          <p className="max-w-xl text-lg text-[#7e5d43] mb-8 ">
            ZenTasks combina la elegancia del diseño japonés con la funcionalidad moderna. Gestiona tus tareas con serenidad y eficiencia.
          </p>
  
          <div className="flex items-center justify-center gap-5">
            <Link to="/tasks">
              <button className="bg-[#f5f3ef] text-[#4e2d0e] cursor-pointer border border-[#d4a373] px-6 py-3 rounded-md shadow-md shadow-gray-400 hover:shadow-none transition-shadow duration-300">
                Mis Tareas
              </button>
            </Link>
  
            <Bubbles />
          </div>
          
  
        </div>
      </div>
    );
  }
  
};

export default Home;

