import React from 'react';

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fdfaf6] text-[#3f3f3f] px-4">
      <h1 className="text-3xl font-semibold mb-6">Crear una cuenta</h1>
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4 border border-[#e0ddd8]">
        <div>
          <label className="block mb-2 text-sm font-medium">Nombre</label>
          <input
            type="text"
            className="w-full p-3 border border-[#d6d3cc] rounded bg-[#fdfaf6] focus:outline-none focus:ring-2 focus:ring-[#a67c52]"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Correo electrónico</label>
          <input
            type="email"
            className="w-full p-3 border border-[#d6d3cc] rounded bg-[#fdfaf6] focus:outline-none focus:ring-2 focus:ring-[#a67c52]"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Contraseña</label>
          <input
            type="password"
            className="w-full p-3 border border-[#d6d3cc] rounded bg-[#fdfaf6] focus:outline-none focus:ring-2 focus:ring-[#a67c52]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#a67c52] text-white py-3 rounded hover:bg-[#916640] transition duration-300"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
