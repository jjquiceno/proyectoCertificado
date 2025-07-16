import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login"
import Register from "./pages/Register"


function App() {
  return (
    <div className="min-h-screen bg-[#f5f3ef] text-[#2e2e2e] font-sans">
      {/* Header estilo Japandi */}
      <header className="flex items-center justify-between px-8 py-4 bg-[#fdfaf6] shadow-sm border-b border-[#e0ddd8]">
        <h1 className="text-2xl font-semibold tracking-wide text-[#3f3f3f]">
          ZenTask
        </h1>

        <nav className="space-x-8 text-sm font-medium">
          <Link
            to="/"
            className="text-[#4f4f4f] hover:text-[#a67c52] transition-colors duration-300"
          >
            Inicio
          </Link>
          <Link
            to="/about"
            className="text-[#4f4f4f] hover:text-[#a67c52] transition-colors duration-300"
          >
            Sobre Nosotros
          </Link>
        </nav>

        <div className="space-x-4 text-sm">
          <Link
            to="/login"
            className="text-[#6b6b6b] hover:underline hover:text-[#5a4a3f]"
          >
            Iniciar sesión
          </Link>
          <Link
            to="/register"
            className="bg-[#a67c52] text-white px-4 py-2 rounded hover:bg-[#916640] transition duration-300"
          >
            Registrarse
          </Link>
        </div>
      </header>

      {/* Contenido */}
      <main className="p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
