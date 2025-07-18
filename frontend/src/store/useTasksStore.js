import { create } from 'zustand';

// Ejemplo de tareas iniciales
const initialColumns = {
  'total': [
    // { id: 't1', titulo: 'Tarea 1', texto: 'Descripción 1', prioridad: 'Alta', icono: null, fecha: '' },
    // { id: 't2', titulo: 'Tarea 2', texto: 'Descripción 2', prioridad: 'Media', icono: null, fecha: '' },
  ],
  'completadas': [
    // { id: 't3', titulo: 'Tarea 3', texto: 'Descripción 3', prioridad: 'Baja', icono: null, fecha: '' },
  ],
  'enproceso': [],
};

export const useTasksStore = create((set) => ({
  columns: initialColumns,
  // Guarda el id de la tarea que se está arrastrando
  draggingTaskId: null,

  setDraggingTaskId: (id) => set({ draggingTaskId: id }),

  moveTask: (taskId, sourceCol, targetCol) =>
    set((state) => {
      // Remueve la tarea de la columna origen
      const task = state.columns[sourceCol].find((t) => t.id === taskId);
      if (!task) return {};
      return {
        columns: {
          ...state.columns,
          [sourceCol]: state.columns[sourceCol].filter((t) => t.id !== taskId),
          [targetCol]: [...state.columns[targetCol], task],
        },
        draggingTaskId: null,
      };
    }),

  addTask: (colKey, nuevaTarea) =>
    set((state) => ({
      columns: {
        ...state.columns,
        [colKey]: [...state.columns[colKey], nuevaTarea],
      },
    })),
}));
