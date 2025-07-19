import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import { Button } from "./buttons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
    return (
        <div className="h-[9vh] bg-[#f5f3ef] text-[#2e2e2e] font-sans">
            {/* Header estilo Japandi */}
            <header className="backdrop-blur-lg fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 shadow-sm border-b border-[#e0ddd8]">
                <div className="flex items-center space-x-4 gap-2">
                    <img src="/Logo.png" alt="" className="h-10 w-10" />
                    <h1 className="text-2xl font-semibold tracking-wide text-[#3f3f3f]">
                        ZenTask
                    </h1>
                </div>


                <nav className="flex items-center space-x-8 text-sm font-medium gap-2">
                    <Link to="/" className="text-[#4f4f4f] hover:text-[#a67c52] transition-colors duration-300">
                        Inicio
                    </Link>
                    <Link to="/about" className="text-[#4f4f4f] hover:text-[#a67c52] transition-colors duration-300">
                        Sobre Nosotros
                    </Link>
                </nav>

                <div className="flex items-center space-x-4 text-sm gap-4">
                    <Link to="/login" className="text-[#6b6b6b] hover:text-[#5a4a3f]">
                        Iniciar sesión
                    </Link>
                    <Link to="/register">
                        <Button text="Registrarse" />
                    </Link>
                </div>
            </header>
        </div>
    )
}

export const HeaderTasks = () => {
    const navigate = useNavigate();

    const nombre = localStorage.getItem('userName');

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    return (
        <div className="h-[9vh] bg-[#f5f3ef] text-[#2e2e2e] font-sans">
            {/* Header estilo Japandi */}
            <header className="backdrop-blur-lg fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 shadow-sm border-b border-[#e0ddd8]">
                <div className="flex items-center space-x-4 gap-2">
                    <img src="/Logo.png" alt="" className="h-10 w-10" />
                    <h1 className="text-2xl font-semibold tracking-wide text-[#3f3f3f]">
                        ZenTask
                    </h1>
                </div>


                <nav className="flex items-center space-x-8 text-sm font-medium gap-2">
                    <Link to="/" className="text-[#4f4f4f] hover:text-[#a67c52] transition-colors duration-300">
                        Inicio
                    </Link>
                    <Link to="/tasks" className="text-[#4f4f4f] hover:text-[#a67c52] transition-colors duration-300">
                        Mis Tareas
                    </Link>
                </nav>

                <div className="flex items-center space-x-4 text-sm gap-2">
                    <FontAwesomeIcon icon={faUser}/>
                    <p>{nombre}</p>
                    <FontAwesomeIcon icon={faRightFromBracket} className='cursor-pointer text-xl' onClick={handleLogout} />
                </div>
            </header>
        </div>
    )
}

