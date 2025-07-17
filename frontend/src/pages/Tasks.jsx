import React from 'react'
import { Button } from '../components/buttons'
import { Box1, Box2, Box3 } from '../components/box1'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck, faClock, faCircle, faCalendar } from '@fortawesome/free-regular-svg-icons'

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
                <Box2 mainIcon={<FontAwesomeIcon icon={faCircle} />} title="Total" cantidad="10" box3={<Box3 icono={<FontAwesomeIcon icon={faCircle} />} titulo="Tarea 1" texto="Tarea 1" prioridad="Alta" fecha={<FontAwesomeIcon icon={faCalendar} />} />}/> 
                <Box2 mainIcon={<FontAwesomeIcon icon={faCircleCheck} />} title="Completadas" cantidad="10" />
                <Box2 mainIcon={<FontAwesomeIcon icon={faClock} />} title="En Proceso" cantidad="10" />
            </div>
        </div>
    </div>
   
  )
}

export default Tasks