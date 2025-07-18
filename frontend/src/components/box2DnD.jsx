import React from 'react';
import { cn } from '../utils/cn';
import { Box3 } from './box1';
import { useTasksStore } from '../store/useTasksStore';
import { CrearTareaModal } from './CrearTareaModal';

export const Box2DnD = ({ colKey, mainIcon, title }) => {
  const { columns, moveTask, draggingTaskId, setDraggingTaskId } = useTasksStore();
  const tareas = columns[colKey] || [];

  // Drag Over
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Drop
  const handleDrop = (e) => {
    e.preventDefault();
    const sourceCol = e.dataTransfer.getData('sourceCol');
    const taskId = e.dataTransfer.getData('taskId');
    if (sourceCol && taskId && sourceCol !== colKey) {
      moveTask(taskId, sourceCol, colKey);
    }
  };

  // Highlight drop target
  const isOver = draggingTaskId && draggingTaskId !== null;

  const handleAddTask = () => {
    const nuevaTarea = {
      id: uuidv4(),
      titulo: `Nueva tarea`,
      texto: 'Descripción rápida...',
      prioridad: 'Media',
      icono: null,
      fecha: new Date().toISOString().split('T')[0], // fecha de hoy
    };

    addTask(colKey, nuevaTarea);
  };

  return (
    <div
      className={cn(
        'border border-[#e0ddd8] w-[31.5vw] h-[70vh] rounded-xl bg-[#faf9f8] flex flex-col items-center pl-5 pr-5 pt-8 pb-3 transition-all',
        isOver && 'ring-2 ring-[#a67c52]'
      )}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className='h-15 w-full flex items-center justify-between'>
        <div className='flex items-center justify-center gap-2'>
          <span className='text-[#a67c52] font-bold text-2xl'>{mainIcon}</span>
          <h1 className='text-[#3f3f3f] text-xl font-bold tracking-wider'><span>{title}</span></h1>
          <p className='text-[#a67c52] font-bold text-[1vw]'><span>({tareas.length})</span></p>
        </div>
        <CrearTareaModal colKey={colKey} />
      </div>
      <div className='h-[80%] w-full flex flex-col items-start justify-start gap-2'>
        {tareas.map((tarea) => (
          <Box3DnD key={tarea.id} tarea={tarea} colKey={colKey} />
        ))}
      </div>
    </div>
  );
};

// Box3DnD
export const Box3DnD = ({ tarea, colKey }) => {
  const { setDraggingTaskId } = useTasksStore();

  const handleDragStart = (e) => {
    e.dataTransfer.setData('taskId', tarea.id);
    e.dataTransfer.setData('sourceCol', colKey);
    setDraggingTaskId(tarea.id);
  };

  const handleDragEnd = () => {
    setDraggingTaskId(null);
  };

  return (
    <div draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <Box3 {...tarea} />
    </div>
  );
};
