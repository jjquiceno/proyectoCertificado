import React from 'react';
import { Button } from '../components/buttons';
import { Box1 } from '../components/box1';
import { Box2DnD } from '../components/box2DnD';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck, faClock, faCircle } from '@fortawesome/free-regular-svg-icons';

const Tasks = () => {
  return (
    <div>
        <div className=''>
            <div>
                <h1 className="h-fit pb-2 text-4xl font-bold bg-gradient-to-r from-[#b78b6e] to-[#6f725b] text-transparent bg-clip-text">
                    ¡Hola, juan! 👽
                </h1>
            </div>
            <div className="flex items-center justify-between">
                <p className="overline h-fit text-lg text-[#6f725b]">
                    Organiza tu vida con serenidad
                </p>
                <Button text="Crear tarea" />
            </div>
        </div>
        <br />
        <div className=''>
            <div className='flex items-center justify-between'>
                <Box1 
                    titulo="Total" 
                    numero="10" 
                    texto="Tareas" 
                    icono={<FontAwesomeIcon icon={faBullseye} />} 
                />
                <Box1 
                    titulo="Completadas" 
                    numero="10" 
                    texto="Tareas" 
                    icono={<FontAwesomeIcon icon={faCircleCheck} />} 
                />
                <Box1 
                    titulo="En Proceso" 
                    numero="10" 
                    texto="Tareas" 
                    icono={<FontAwesomeIcon icon={faClock} />} 
                />
                <Box1 
                    titulo="Progreso" 
                    numero="10" 
                    texto="Tareas" 
                    icono={<FontAwesomeIcon icon={faChartSimple} />} 
                />
            </div>
            <br />
            <div className='flex items-center justify-between h-fit'>
                <Box2DnD colKey="total" mainIcon={<FontAwesomeIcon icon={faCircle} />} title="Total" />
                <Box2DnD colKey="completadas" mainIcon={<FontAwesomeIcon icon={faCircleCheck} />} title="Completadas" />
                <Box2DnD colKey="enproceso" mainIcon={<FontAwesomeIcon icon={faClock} />} title="En Proceso" />
            </div>
        </div>
    </div>
   
  )
}

export default Tasks