import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan, faPenToSquare } from '@fortawesome/free-regular-svg-icons'

export const Box1 = ({titulo, numero, texto, icono}) => {
  return (
    <div className='flex flex-col items-center justify-between rounded-lg bg-[#faf9f8] border border-[#e0ddd8] w-[24vw] h-[10vw] pl-6 pr-6 pt-3 pb-3'>
        <div className='w-full flex items-center justify-between'>
            <h1 className='text-[#3f3f3f] text-xl font-semibold tracking-wider'>{titulo}</h1>
            <span>{icono}</span>
        </div>
        <div className='w-full '>
            <p><span className='text-[#a67c52] font-bold text-5xl'>{numero}</span></p>
        </div>
        <div className='w-full '>
            <p>{texto}</p>
        </div>
    </div>
  )
}
export const Box2 = ({ mainIcon, title, cantidad, box3 }) => {
  return (
    <div className='border border-[#e0ddd8] w-[31.5vw] h-[70vh] rounded-xl bg-[#faf9f8] flex flex-col items-center pl-5 pr-5 pt-8 pb-3'>
        <div className='h-15 w-full flex items-center justify-between'>
            <div className='flex items-center justify-center gap-2'>
                <span className='text-[#a67c52] font-bold text-2xl cursor-pointer hover:text-[#916640] transition duration-300'>{mainIcon}</span>
                <h1 className='text-[#3f3f3f] text-xl font-bold tracking-wider'><span>{title}</span></h1>
                <p className='text-[#a67c52] font-bold text-[1vw]'><span>({cantidad})</span></p>
            </div>
            <span className=' h-fit text-[#a67c52] font-bold text-3xl cursor-pointer hover:text-[#916640] transition duration-300'>+</span>
        </div>
        <div className='h-[80%] w-full flex flex-col items-start justify-start gap-2'>
            {box3}
        </div>
    </div>
  )
}
export const Box3 = ({ icono, titulo, texto, prioridad, fecha }) => {
    return (
        <div className='border border-[#e0ddd8] border-l-5 border-l-[#a67c52] w-[28vw] h-[8vw] pl-2 pr-6 pt-3 pb-3 rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:translate-y-[-8px] cursor-move'>
            <div className='grid grid-cols-[10%_10%_60%_20%] h-full'>
                <div className='h-full'>
                    <div className='m-auto grid grid-cols-2 h-fit w-fit gap-1'>
                        <div className='border-2 border-[#a67c52] h-0 w-0 rounded-full'></div>
                        <div className='border-2 border-[#a67c52] h-0 w-0 rounded-full'></div>
                        <div className='border-2 border-[#a67c52] h-0 w-0 rounded-full'></div>
                        <div className='border-2 border-[#a67c52] h-0 w-0 rounded-full'></div>
                        <div className='border-2 border-[#a67c52] h-0 w-0 rounded-full'></div>
                        <div className='border-2 border-[#a67c52] h-0 w-0 rounded-full'></div>
                    </div>
                </div>
                <div className='flex align-baseline justify-center'>
                    <span className=''>{icono}</span>
                </div>
                <div className='text-black'>
                    <p className='text-[#3f3f3f] text-[1.2vw] font-bold'>{titulo}</p>
                    <p className='text-[#6b6b6b] text-[1vw]'>{texto}</p>
                    <div className='mt-2 flex items-center gap-2 pl-2'>
                        <p className='text-[#a67c52] font-semibold text-[1vw] rounded-full bg-[#f7e9e8] w-[4vw] h-[4vh] flex items-center justify-center'>{prioridad}</p>
                        <span className='text-[#a67c52] font-semibold text-[1vw]'>{fecha}</span>
                    </div>
                </div>
                <div className='flex items-end justify-center gap-2'>
                    <span className='cursor-pointer hover:text-[#916640] transition duration-300'><FontAwesomeIcon icon={faPenToSquare} /></span>
                    <span className='cursor-pointer hover:text-[#916640] transition duration-300'><FontAwesomeIcon icon={faTrashCan} /></span>
                </div>
            </div>
        </div>
    )
}  
