import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#f5f3ef] text-[#3f3f3f] px-4 text-center">
      <h1 className="text-5xl font-semibold mb-4 tracking-wide">
        Bienvenido
      </h1>
      <p className="max-w-md text-[#5c5c5c] mb-8 leading-relaxed">
        Este sitio combina diseño minimalista con calidez natural. Inspira calma,
        claridad y belleza en cada detalle.
      </p>
      <Link to="/about">
        <button className="bg-[#a67c52] text-white px-6 py-3 rounded-md shadow hover:bg-[#916640] transition duration-300">
          Conoce mas sobre nosotros
        </button>
      </Link>
    </div>
  );
};

export default Home;

