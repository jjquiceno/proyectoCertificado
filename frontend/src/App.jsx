import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login"
import Register from "./pages/Register"
import Tasks from "./pages/Tasks"

import { Button } from "./components/buttons";

function App() {
  return (
    // <div className="min-h-screen bg-[#f5f3ef] text-[#2e2e2e] font-sans">
    //   {/* Header estilo Japandi */}
    //   <header className="backdrop-blur-lg fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 shadow-sm border-b border-[#e0ddd8]">
    //     <div className="flex items-center space-x-4">
    //       <img src="/Logo.png" alt="" className="h-10 w-10" />
    //       <h1 className="text-2xl font-semibold tracking-wide text-[#3f3f3f]">
    //         ZenTask
    //       </h1>
    //     </div>


    //     <nav className="flex items-center space-x-8 text-sm font-medium">
    //       <Link to="/" className="text-[#4f4f4f] hover:text-[#a67c52] transition-colors duration-300">
    //         Inicio
    //       </Link>
    //       <Link to="/about" className="text-[#4f4f4f] hover:text-[#a67c52] transition-colors duration-300">
    //         Sobre Nosotros
    //       </Link>
    //     </nav>

    //     <div className="flex items-center space-x-4 text-sm">
    //       <Link to="/login" className="text-[#6b6b6b] hover:underline hover:text-[#5a4a3f]">
    //         Iniciar sesión
    //       </Link>
    //       <Link to="/register">
    //         <Button text="Registrarse" />
    //       </Link>
    //     </div>
    //   </header>

    //   {/* {/* Contenido */}
    //   <main className="p-3 mt-18">

    //   </main>
    // </div>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/tasks" element={
        <PrivateRoute>
          <Tasks />
        </PrivateRoute>
      } />
    </Routes>
  );
}

export default App;
