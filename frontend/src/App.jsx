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
      <Route path="*" element={<h1 className="font-bold text-4xl m-50">404 Ruta no encontrada</h1>} />
    </Routes>
  );
}

export default App;
