import React from 'react';
import { useState, useEffect } from 'react';

import { Button } from '../components/buttons';
import { Box1 } from '../components/box1';
import { Box2DnD } from '../components/box2DnD';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faChartSimple, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck, faClock, faCircle, } from '@fortawesome/free-regular-svg-icons';
 
import { HeaderTasks } from '../components/Header';

import { useTasksStore } from '../store/useTasksStore';

const Tasks = () => {
    const columns = useTasksStore((state) => state.columns);
    const totalTareas = Object.values(columns).reduce((acc, arr) => acc + arr.length, 0);
    const completadas = columns['completadas'] ? columns['completadas'].length : 0;
    const enproceso = columns['enproceso'] ? columns['enproceso'].length : 0;

    const nombre = localStorage.getItem('userName');

    return (
        <div>
            <HeaderTasks />
            <div className='p-10'>
                <div>
                    <h1 className="h-fit pb-2 text-4xl font-bold text-[#6f725b]">
                        ¡Hola, {nombre}! ꕥ
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
                        numero={totalTareas} 
                        texto="Tareas" 
                        icono={<FontAwesomeIcon icon={faBullseye} />} 
                    />
                    <Box1 
                        titulo="En Proceso" 
                        numero={enproceso} 
                        texto="Tareas" 
                        icono={<FontAwesomeIcon icon={faClock} />} 
                    />
                    <Box1 
                        titulo="Completadas" 
                        numero={completadas} 
                        texto="Tareas" 
                        icono={<FontAwesomeIcon icon={faCircleCheck} />} 
                    />
                </div>
                <br />
                <div className='flex items-center justify-between h-fit p-5 gap-4'>
                    <Box2DnD colKey="total" mainIcon={<FontAwesomeIcon icon={faCircle} />} title="Por hacer" />
                    <Box2DnD colKey="enproceso" mainIcon={<FontAwesomeIcon icon={faClock} />} title="En Proceso" />
                    <Box2DnD colKey="completadas" mainIcon={<FontAwesomeIcon icon={faCircleCheck} />} title="Completadas" />
                </div>
            </div>
        </div>

    )
}

export default Tasks